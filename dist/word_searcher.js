export const word_searcher = (pattern) => {
    const test_data = [
        "121-4440",
        "527-0231",
        "5555-3333",
        "111-1111",
        "2222-222"
    ];
    const match_array = [];
    for (const data of test_data) {
        const result = data.match(pattern);
        if (result) {
            match_array.push(result[0]);
        }
        console.log(typeof (result));
    }
    return match_array;
};
