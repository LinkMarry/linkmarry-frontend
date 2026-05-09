import {type KakaoButton} from "~/api/enumeration/KakaoButton.ts";

export interface ResponseData<T> {
    status: number;
    success: boolean;
    state: string;
    message: string;
    data: T;
}

export interface ResponseVoid {
    status: number;
    success: boolean;
    state: string;
    message: string;
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

export function getKoreanByKakaoStyle(kakaoStyle: KakaoStyle): string {
    if (kakaoStyle) {
        return "가로";
    } else {
        return "세로";
    }
}

export const defaultLinkShare: LinkShare = {
    kakaoImgUrl: "",
    kakaoTitle: "",
    kakaoContent: "",
    kakaoButton: "NONE",
    kakaoStyle: true,
    urlImgUrl: "",
    urlTitle: "",
    urlContent: "",
};

export const dummyLinkShare: LinkShare = {
    kakaoImgUrl:
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/0234d19a-3206-489b-bafb-c0fa32c850ac-GettyImages-jv11005081.jpg.jpg",
    kakaoTitle: "2월 15일, 저희 결혼합니다.",
    kakaoContent: "많이 와주세요~",
    kakaoButton: "ATTEND",
    kakaoStyle: true,
    urlImgUrl:
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/0234d19a-3206-489b-bafb-c0fa32c850ac-GettyImages-jv11005081.jpg.jpg",
    urlTitle: "2월 15일, 저희 결혼합니다.",
    urlContent: "많이 와주세요~",
};
