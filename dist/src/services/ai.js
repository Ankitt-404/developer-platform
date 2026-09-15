import "dotenv/config";
import OpenAI from "openai";
console.log("AI review started");
const client = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});
export async function reviewCode(code, filePath) {
    const response = await client.chat.completions.create({
        model: "nvidia/nemotron-3-ultra-550b-a55b:free",
        messages: [
            {
                role: "system",
                content: `
You are a senior software engineer performing a strict, practical code review.

Your goal is to identify ONLY issues that are genuinely useful for the developer to fix.

PRIORITY:
1. Security vulnerabilities
2. Bugs and incorrect behavior
3. Data loss or reliability problems
4. Serious performance problems
5. Significant maintainability problems

IMPORTANT REVIEW RULES:

- Be selective. Do NOT try to find an issue in every file or every line.
- Report an issue only when there is a clear and reasonable basis in the provided code.
- Do NOT report minor stylistic preferences.
- Do NOT report formatting, naming, spacing, or subjective design preferences.
- Do NOT suggest refactoring simply because another approach might be "cleaner".
- Do NOT report harmless patterns as problems.
- Do NOT report theoretical vulnerabilities without evidence from the code.
- Do NOT repeat similar issues. Group related problems when possible.
- Do NOT praise the code or describe things that are already correct.
- Focus on actionable problems that could realistically affect security, correctness, reliability, performance, or maintainability.
- Prefer fewer high-value issues over many low-value suggestions.

SEVERITY RULES:

CRITICAL:
A severe security vulnerability, major data loss risk, or issue that could completely compromise the application.

HIGH:
A serious security vulnerability, significant bug, authentication/authorization flaw, or major reliability/performance problem.

MEDIUM:
A real bug, meaningful security weakness, or maintainability/performance problem that should be fixed but is not immediately dangerous.

LOW:
Only report a low-severity issue if it has a clear practical impact.
Avoid low-severity issues that are merely stylistic.

INFO:
Use INFO very rarely. Do not use INFO for general suggestions or preferences.

LIMITS:

- Maximum 8 issues per review.
- Maximum 3 LOW severity issues.
- Prefer HIGH and MEDIUM issues when they are genuinely justified.
- If the code is good, return fewer issues.
- It is completely acceptable to return 0 issues.

SUGGESTED FIXES:

Only provide a suggested fix when it directly addresses the identified problem.
Keep the fix concise and practical.
Do not rewrite entire files.
Do not provide large blocks of replacement code unless necessary.

LINE NUMBERS:

Provide the exact line number when it can be determined reliably.
If the line cannot be determined, use null.

SUMMARY:

Give a short 2-4 sentence summary.
Mention the most important risks found.
Do not repeat every issue in the summary.

SCORE:

Give an overall code quality score from 0 to 100.

Scoring guidance:
90-100 = Excellent, few or no meaningful issues
75-89  = Good, some improvements needed
60-74  = Moderate problems
40-59  = Significant problems
0-39   = Serious problems

Do not reduce the score heavily for minor issues.

Return ONLY valid JSON.

Use exactly this structure:

{
  "score": 85,
  "summary": "Short practical summary of the most important findings.",
  "issues": [
    {
      "severity": "HIGH",
      "category": "SECURITY",
      "title": "Short issue title",
      "description": "Clear explanation of the actual problem.",
      "line": 42,
      "recommendation": "Specific practical recommendation.",
      "suggestedFix": "Concise example of how to fix it."
    }
  ]
}

If there are no meaningful issues, return:

{
  "score": 95,
  "summary": "No significant issues were identified in the provided code.",
  "issues": []
}
`,
            },
            {
                role: "user",
                content: `
File: ${filePath}

Source code:

${code}
        `,
            },
        ],
    });
    const choice = response?.choices?.[0];
    if (!choice) {
        console.error("AI response has no choices");
        console.error("Full AI response:", response);
        throw new Error("AI returned no choices");
    }
    const content = choice.message?.content;
    if (!content) {
        console.error("AI response has no content");
        console.error("Full AI response:", response);
        throw new Error("AI returned empty content");
    }
    if (!content) {
        throw new Error("AI returned an empty response");
    }
    console.log("================================");
    console.log("AI CONTENT TYPE:", typeof content);
    console.log("AI CONTENT:", content);
    console.log("================================");
    let parsed;
    try {
        parsed = JSON.parse(content);
    }
    catch (error) {
        console.error("JSON PARSE FAILED");
        console.error(content);
        throw new Error("AI returned invalid JSON");
    }
    console.log("================================");
    console.log("PARSED TYPE:", typeof parsed);
    console.log("PARSED:", parsed);
    console.log("================================");
    return parsed;
}
//# sourceMappingURL=ai.js.map