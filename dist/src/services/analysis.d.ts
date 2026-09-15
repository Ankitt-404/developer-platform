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
declare const analyzeCode: (files: SourceFile[]) => {
    score: number;
    totalIssues: number;
    issues: Issue[];
};
export { analyzeCode };
//# sourceMappingURL=analysis.d.ts.map