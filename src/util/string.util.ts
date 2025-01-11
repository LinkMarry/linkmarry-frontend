export const isAnyEmpty = (...strings: (string | null | undefined)[]): boolean =>
    strings.some(str => !str);

export function trimString(str: string, maxLength: number) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength);
    }
    return str;
}