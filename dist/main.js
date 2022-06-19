import { Octokit } from '@octokit/rest';
(async () => {
    const octokit = new Octokit();
    const content = await octokit.repos.getContent({
        owner: "mitty1293",
        repo: "word_searcher",
        path: "ejdict-hand-utf8-english-only.txt"
    });
    const data = new Buffer.from(content.data.content, content.data.encoding);
    const data2 = data.toString();
    console.log(typeof (data));
    console.log(typeof (data2));
})();
