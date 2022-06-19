import { Octokit } from '@octokit/rest';
const en_word_list = async () => {
    const octokit = new Octokit();
    const content = await octokit.repos.getContent({
        owner: "mitty1293",
        repo: "word_searcher",
        path: "ejdict-hand-utf8-english-only.txt"
    });
    const content_data = new Buffer.from(content.data.content, content.data.encoding).toString();
    return content_data;
};
export const word_searcher = (pattern) => {
    const regex = new RegExp(`\\n${pattern}\\n`, 'gi');
    const data = en_word_list();
    const result = data.match(regex)?.map(obj => obj.substring(1, obj.length - 1));
    return result;
};
