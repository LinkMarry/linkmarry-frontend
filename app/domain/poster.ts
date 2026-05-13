export interface Poster {
    imageUrl: string;
    brideName: string;
    groomName: string;
    weddingDate: string;
    styleId?: number;
}

export function makeDefaultPoster(): Poster {
    return {
        imageUrl: "",
        brideName: "",
        groomName: "",
        weddingDate: "",
        styleId: undefined,
    };
}

export interface PosterPreset {
    id: number;
    url: string;
    name: string;
}
