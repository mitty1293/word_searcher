import fs from 'fs';
import url from 'url';
import path from 'path';
export const word_searcher = (regexp) => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const data = fs.readFileSync(`${__dirname}/../ejdict-hand-utf8-english-only.txt`, 'utf-8');
    // const pattern = `/\n${regexp}\n/g`
    const result = data.match(regexp);
    return result;
};
