const getRepositoryFiles = async (owner, repo, branch = "main") => {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`, {
        headers: {
            Accept: "application/vnd.github+json",
        }
    });
    if (!response.ok) {
        throw new Error("Failed to fetch Github repository");
    }
    const data = await response.json();
    return data.tree;
};
const getFileContent = async (owner, repo, path, branch = "main") => {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, {
        headers: {
            Accept: "application/vnd.github+json"
        }
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Failed to fetch file: ${path}\nStatus: ${response.status}\n${error}`);
    }
    const data = await response.json();
    if (Array.isArray(data) || data.type !== "file") {
        throw new Error(`${path} is not a file`);
    }
    const content = await Buffer.from(data.content, "base64").toString("utf-8");
    return content;
};
export { getRepositoryFiles, getFileContent };
//# sourceMappingURL=github.js.map