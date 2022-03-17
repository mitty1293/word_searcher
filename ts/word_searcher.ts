import fs from 'fs';
import url from 'url';
import path from 'path';

export const word_searcher = (pattern: string): string[] | undefined => {
    const __filename: string = url.fileURLToPath(import.meta.url);
    const __dirname: string = path.dirname(__filename);
    const data: string = fs.readFileSync(`${__dirname}/../ejdict-hand-utf8-english-only.txt`, 'utf-8');
    const regex: RegExp = new RegExp(`\\n${pattern}\\n`, 'gi')
    const result: string[] | undefined = data.match(regex)?.map(obj => obj.substring(1, obj.length-1));
    return result;
};