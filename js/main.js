import { word_searcher } from './word_searcher.js';
// DOM
const search_btn = document.getElementById("search_btn");
const input_data = document.getElementById("input_data");
const output_data = document.getElementById("output_data");
// eventlistener
search_btn.addEventListener('click', () => {
    word_searcher(input_data.value).then(result => {
        if (result) {
            output_data.value = result.join("\n");
        }
        else {
            output_data.value = "No words matching the pattern were found.";
        }
    });
});
