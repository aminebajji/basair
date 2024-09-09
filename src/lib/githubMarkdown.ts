import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

export async function renderMarkdownToHtml(markdown: string): Promise<string> {
  const response = await octokit.request("POST /markdown", {
    text: markdown,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return response.data;
}
