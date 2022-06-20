import { Octokit } from '@octokit/rest';

const atob = (base64: string): string => {
    return Buffer.from(base64, 'base64').toString('binary');
};

const en_word_list = async (): Promise<string> => {
    const octokit = new Octokit();
    const content = await octokit.repos.getContent({
        owner: "mitty1293",
        repo: "word_searcher",
        path: "ejdict-hand-utf8-english-only.txt"
    });
    const content_data: string = atob(content.data.content);
    return content_data;
};

export const word_searcher = async (pattern: string): Promise<string[] | undefined> => {
    const regex: RegExp = new RegExp(`\\n${pattern}\\n`, 'gi');
    const data: string = await en_word_list();
    const result: string[] | undefined = data.match(regex)?.map(obj => obj.substring(1, obj.length - 1));
    return result;
};