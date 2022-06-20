import { word_searcher } from './word_searcher.js';
word_searcher(process.argv[2]).then(result => {
    if (result) {
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }
    else {
        console.log("No words matching the pattern were found.");
    }
});
