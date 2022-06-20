import { word_searcher } from './word_searcher.js';

// DOM
const search_btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("search_btn");
const input_data: HTMLInputElement = <HTMLInputElement>document.getElementById("input_data");
const output_data: HTMLInputElement = <HTMLInputElement>document.getElementById("output_data");

// eventlistener
search_btn.addEventListener('click', () => {
    word_searcher(input_data.value).then(result => {
        if (result) {
            for (let i = 0; i < result.length; i++) {
                input_data.value += result[i];
                input_data.value += "\n";
            }
        } else {
            output_data.value = "No words matching the pattern were found.";
        }
    });
});


