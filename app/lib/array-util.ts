export function trimArray<T>(array: T[], maxLength: number) {
    if (array.length > maxLength) {
        return array.slice(0, maxLength);
    }
    return array;
}