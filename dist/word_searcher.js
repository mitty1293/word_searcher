import { Octokit } from '@octokit/rest';
const atob = (base64) => {
    return Buffer.from(base64, 'base64').toString('binary');
};
const en_word_list = async () => {
    const octokit = new Octokit();
    const content = await octokit.repos.getContent({
        owner: "mitty1293",
        repo: "word_searcher",
        path: "ejdict-hand-utf8-english-only.txt"
    });
    const content_data = atob(content.data.content);
    return content_data;
};
export const word_searcher = async (pattern) => {
    const regex = new RegExp(`\\n${pattern}\\n`, 'gi');
    const data = await en_word_list();
    const result = data.match(regex)?.map(obj => obj.substring(1, obj.length - 1));
    return result;
};
