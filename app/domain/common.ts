export const FileTypeList = ["IMG", "MUSIC"] as const;
export type FileType = (typeof FileTypeList)[number];

export const kakaoButtonList = ["NONE", "PLACE", "ATTEND"] as const;
export type KakaoButton = (typeof kakaoButtonList)[number];

export interface ResponseData<T = undefined> {
    status: number;
    success: boolean;
    state: string;
    message: string;
    data: T;
}

export interface Upload {
    url: string;
    name: string;
    byte: number;
}

export interface Jwt {
    accessToken?: string;
    refreshToken?: string;
}

export interface LinkShare {
    kakaoImgUrl: string;
    kakaoTitle: string;
    kakaoContent: string;
    kakaoButton: KakaoButton;
    kakaoStyle: boolean;
    urlImgUrl: string;
    urlTitle: string;
    urlContent: string;
}

export type KakaoStyle = boolean;

export const kakaoStyleList: KakaoStyle[] = [true, false];
