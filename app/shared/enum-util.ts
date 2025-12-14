export function allCasesOfEnum<T extends object>(enumObj: T): (T[keyof T])[] {
    return Object.keys(enumObj)
        .filter((key) => isNaN(Number(key))) // 숫자 값 제외
        .map((key) => enumObj[key as keyof T]);
}