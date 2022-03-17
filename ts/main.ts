import {word_searcher} from './word_searcher.js';

// DOM
const search_btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("search_btn");
const input_data: HTMLInputElement = <HTMLInputElement>document.getElementById("input_data");
const output_data: HTMLInputElement = <HTMLInputElement>document.getElementById("output_data");

// eventlistener
search_btn.addEventListener('click', () => {
    const result: string[] | undefined = word_searcher(input_data.value);
    const result_li: HTMLLIElement = document.createElement("li");
    if (result) {
        for (let i = 0; i < result.length; i++) {
            result_li.textContent = result[i];
            output_data.appendChild(result_li);
        }
    } else {
        result_li.textContent = "検索結果がありません";
        output_data.appendChild(result_li);
    }
});