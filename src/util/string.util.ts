export const isAnyEmpty = (...strings: (string | null | undefined)[]): boolean =>
    strings.some(str => !str);