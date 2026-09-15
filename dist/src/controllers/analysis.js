import prisma from "../config/prisma.js";
import { getSourceFiles } from "../services/repository.js";
import { analyzeCode } from "../services/analysis.js";
import { reviewCode } from "../services/ai.js";
const analyzeProject = async (req, res) => {
    const id = req.params.id;
    if (typeof id !== "string") {
        res.status(400).json({
            success: false,
            message: "Invalid project ID",
        });
        return;
    }
    // 1. Find project
    const project = await prisma.project.findFirst({
        where: {
            id,
            userId: req.userId,
        },
    });
    if (!project) {
        res.status(404).json({
            success: false,
            message: "Project not found",
        });
        return;
    }
    // 2. Check repository
    if (!project.repository) {
        res.status(400).json({
            success: false,
            message: "Github repository not found",
        });
        return;
    }
    if (!project.githubUrl) {
        res.status(400).json({
            success: false,
            message: "GitHub URL is not configured",
        });
        return;
    }
    // 3. Parse GitHub URL
    const githubUrl = new URL(project.githubUrl);
    if (githubUrl.hostname !== "github.com") {
        res.status(400).json({
            success: false,
            message: "Invalid GitHub URL",
        });
        return;
    }
    const parts = githubUrl.pathname.split("/").filter(Boolean);
    const owner = parts[0];
    const repo = parts[1];
    if (!owner || !repo) {
        res.status(400).json({
            success: false,
            message: "Invalid GitHub repository URL",
        });
        return;
    }
    // 4. Fetch source files
    const sourceFiles = await getSourceFiles(owner, repo, project.branch);
    if (sourceFiles.length === 0) {
        res.status(400).json({
            success: false,
            message: "No supported source files found",
        });
        return;
    }
    // 5. Static analysis
    const result = analyzeCode(sourceFiles);
    // 6. AI analysis
    const aiReviews = [];
    for (const file of sourceFiles) {
        let review = null;
        let lastError = null;
        const MAX_RETRIES = 3;
        for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
            try {
                console.log(`AI Review : ${file.path} | attempt ${attempt}/${MAX_RETRIES}`);
                review = await reviewCode(file.content, file.path);
                if (review) {
                    console.log(`AI Review succesfull: ${file.path}`);
                }
                break;
            }
            catch (error) {
                lastError = error;
                console.log(`AI Review failed : ${file.path} | attempt : ${attempt}/${MAX_RETRIES}`);
                if (attempt < MAX_RETRIES) {
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                }
            }
        }
        if (review) {
            aiReviews.push({
                file: file.path,
                review,
                status: "Completed"
            });
        }
        else {
            console.error(`AI review permanantly failed for file ${file.path}:`, lastError);
            aiReviews.push({
                file: file.path,
                review: null,
                status: "failed",
                error: lastError instanceof Error ? lastError.message : "AI review failed"
            });
        }
    }
    // 7. Save static analysis
    const analysis = await prisma.analysis.create({
        data: {
            projectId: project.id,
            score: result.score,
            issues: result.totalIssues,
            security: result.issues.filter((issue) => issue.type === "SECURITY").length,
            complexity: 0,
            duplication: 0,
        },
    });
    for (const aiReview of aiReviews) {
        if (!aiReview.review)
            continue;
        await prisma.aiReview.create({
            data: {
                analysisId: analysis.id,
                file: aiReview.file,
                summary: aiReview.review.summary,
                issues: {
                    create: aiReview.review.issues.map((issue) => ({
                        severity: issue.severity,
                        category: issue.category,
                        title: issue.title,
                        description: issue.description,
                        line: typeof issue.line === "number" ? issue.line : null,
                        recommendation: issue.recommendation,
                        suggestedFix: issue.suggestedFix ?? null,
                    })),
                },
            },
        });
    }
    // 8. Save static issues
    await prisma.issue.createMany({
        data: result.issues.map((issue) => ({
            analysisId: analysis.id,
            file: issue.file,
            line: issue.line,
            type: issue.type,
            message: issue.message,
            severity: issue.severity,
        })),
    });
    // 9. Return everything
    res.status(201).json({
        success: true,
        message: "Project analyzed successfully",
        data: {
            analysis,
            staticAnalysis: {
                score: result.score,
                totalIssues: result.totalIssues,
                issues: result.issues,
            },
            aiReviews,
        },
    });
};
const getProjectAnalysis = async (req, res) => {
    const projectId = req.params.id;
    if (typeof projectId !== "string") {
        res.status(400).json({
            success: false,
            message: "Invalid project ID",
        });
        return;
    }
    const project = await prisma.project.findFirst({
        where: {
            id: projectId,
            userId: req.userId,
        },
    });
    if (!project) {
        res.status(404).json({
            success: false,
            message: "Project not found",
        });
        return;
    }
    const analyses = await prisma.analysis.findMany({
        where: {
            projectId: project.id,
        },
        include: {
            issueList: true,
            aiReviews: {
                include: {
                    issues: true,
                }
            }
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    res.status(200).json({
        success: true,
        data: {
            analyses,
        },
    });
};
export { analyzeProject, getProjectAnalysis };
//# sourceMappingURL=analysis.js.map