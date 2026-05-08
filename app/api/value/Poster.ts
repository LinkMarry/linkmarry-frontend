export interface Poster {
    // 포스터 배경 사진
    imageUrl: string;

    // 신부 이름
    brideName: string;

    // 신랑 이름
    groomName: string;

    // 예식 일시 (yyyy-MM-dd 형태)
    weddingDate: string;

    // 스타일 ID
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
