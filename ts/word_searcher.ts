export const word_searcher = (pattern: RegExp): RegExpMatchArray | null => {
    const test_data: string[] = [
        "121-4440",
        "527-0231",
        "5555-3333",
        "111-1111",
        "2222-222"
    ];
    const match_array: string[] = [];

    for (const data of test_data) {
        const result: RegExpMatchArray | null = data.match(pattern);
        if (result) {
            match_array.push(result[0]);
        }
    }

    return match_array;
};