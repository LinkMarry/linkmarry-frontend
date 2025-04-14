export function trimString(str: string, maxLength: number) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength);
    }
    return str;
}

export function getWeddingUrl(url: string): string {
    return `${window.location.origin}/wedding/${url}`;
}
