interface SourceFile {
  path: string;
  content: string;
}

interface Issue {
  file: string;
  line: number;
  type: string;
  message: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
}

const analyzeCode = (files: SourceFile[]) => {
  const issues: Issue[] = [];

  for (const file of files) {
    const lines = file.content.split("\n");

    lines.forEach((line, index) => {
      const lineNumber = index + 1;

      // console.log detection
      if (line.includes("console.log")) {
        issues.push({
          file: file.path,
          line: lineNumber,
          type: "CODE_QUALITY",
          message: "console.log() should not be used in production code.",
          severity: "LOW",
        });
      }

      // TODO detection
      if (line.includes("TODO")) {
        issues.push({
          file: file.path,
          line: lineNumber,
          type: "MAINTAINABILITY",
          message: "TODO comment found.",
          severity: "LOW",
        });
      }

      // eval detection
      if (line.includes("eval(")) {
        issues.push({
          file: file.path,
          line: lineNumber,
          type: "SECURITY",
          message: "Avoid eval() because it can execute arbitrary code.",
          severity: "HIGH",
        });
      }

      // Long line detection
      if (line.length > 120) {
        issues.push({
          file: file.path,
          line: lineNumber,
          type: "CODE_STYLE",
          message: "Line exceeds 120 characters.",
          severity: "LOW",
        });
      }
    });
  }

  const score = calculateScore(issues);

  return {
    score,
    totalIssues: issues.length,
    issues,
  };
};

const calculateScore = (issues: Issue[]) => {
  let score = 100;

  for (const issue of issues) {
    if (issue.severity === "HIGH") {
      score -= 15;
    }

    if (issue.severity === "MEDIUM") {
      score -= 7;
    }

    if (issue.severity === "LOW") {
      score -= 2;
    }
  }

  return Math.max(score, 0);
};

export { analyzeCode };