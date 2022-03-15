export const word_searcher = (pattern: string): string => {
    const test_data: string = "121-4440";
    const result = test_data.match(pattern);
    return result;
};