import prisma from "../config/prisma.js";
const createProject = async (req, res) => {
    const { name, description, githubUrl, repository, branch } = req.body;
    if (!name) {
        res.status(401).
            json({
            success: false,
            message: "Name is required"
        });
        return;
    }
    const project = await prisma.project.create({
        data: {
            name,
            description,
            githubUrl,
            // liveUrl,
            repository,
            branch: branch || "main",
            userId: req.userId
        }
    });
    res.status(200).json({
        success: true,
        message: "New project created successfully",
        data: {
            project,
        }
    });
};
const getProjects = async (req, res) => {
    const projects = await prisma.project.findMany({
        where: {
            userId: req.userId
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    res.status(200).json({
        success: true,
        message: "All projects are fetched succesfully",
        data: {
            projects
        }
    });
};
const getProject = async (req, res) => {
    const id = req.params.id;
    if (typeof id !== "string") {
        res.status(400).json({
            success: false,
            message: "Invalid project ID",
        });
        return;
    }
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
    res.status(200).json({
        success: true,
        data: {
            project,
        },
    });
};
const updateProject = async (req, res) => {
    const { id } = req.params;
    const { name, description, githubUrl, liveUrl, repository, branch } = req.body;
    if (typeof id !== "string") {
        res.status(400).json({
            success: false,
            message: "Invalid project ID",
        });
        return;
    }
    const existingProject = await prisma.project.findFirst({
        where: {
            id,
            userId: req.userId,
        },
    });
    if (!existingProject) {
        res.status(404).json({
            success: false,
            message: "Project not found",
        });
        return;
    }
    const project = await prisma.project.update({
        where: {
            id,
        },
        data: {
            name,
            description,
            githubUrl,
            // liveUrl,
            repository,
            branch,
        },
    });
    res.status(200).json({
        success: true,
        message: "Project updated successfully",
        data: {
            project,
        },
    });
};
const deleteProject = async (req, res) => {
    const { id } = req.params;
    if (typeof id !== "string") {
        res.status(400).json({
            success: false,
            message: "Invalid project ID",
        });
        return;
    }
    const existingProject = await prisma.project.findFirst({
        where: {
            id,
            userId: req.userId,
        },
    });
    if (!existingProject) {
        res.status(404).json({
            success: false,
            message: "Project not found",
        });
        return;
    }
    await prisma.project.delete({
        where: {
            id,
        },
    });
    res.status(200).json({
        success: true,
        message: "Project deleted successfully",
    });
};
export { createProject, getProjects, getProject, updateProject, deleteProject };
//# sourceMappingURL=project.js.map