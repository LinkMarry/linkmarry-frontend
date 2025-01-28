export function hexToRgba(hexColor: string, alpha: number): string {
    /**
     * Convert a HEX color and alpha value to an RGBA string.
     *
     * @param hexColor - The HEX color string (e.g., '#FFFFFF').
     * @param alpha - The alpha value (0 to 1).
     * @returns The RGBA color string (e.g., 'rgba(255, 255, 255, 0.5)').
     * @throws Error if the HEX color format is invalid or alpha is out of range.
     */
    if (alpha < 0 || alpha > 1) {
        throw new Error("Alpha value must be between 0 and 1.");
    }

    if (hexColor.startsWith("#")) {
        hexColor = hexColor.slice(1);
    }

    if (hexColor.length !== 6) {
        throw new Error("HEX color must be in the format '#RRGGBB'.");
    }

    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
        throw new Error("HEX color contains invalid characters.");
    }

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}