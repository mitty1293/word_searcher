import fs from 'fs';
import url from 'url';
import path from 'path';
export const word_searcher = (pattern) => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const data = fs.readFileSync(`${__dirname}/../ejdict-hand-utf8-english-only.txt`, 'utf-8');
    const regex = new RegExp(`\\n${pattern}\\n`, 'gi');
    const result = data.match(regex)?.map(obj => obj.substring(1, obj.length - 1));
    return result;
};
