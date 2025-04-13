import KakaoButton from "@src/infrastructure/network/enumeration/KakaoButton";

export default interface LinkShare {
    // 카카오톡 공유 이미지 url
    kakaoImgUrl: string;

    // 카카오톡 공유 제목
    kakaoTitle: string;

    // 카카오톡 공유 내용
    kakaoContent: string;

    // 카카오 버튼 종류
    kakaoButton: KakaoButton;

    // true → 가로 false → 세로
    kakaoStyle: boolean;

    // 링크 공유 이미지 url
    urlImgUrl: string;

    // 링크 공유 제목
    urlTitle: string;

    // 링크 공유 내용
    urlContent: string;
}

export type KakaoStyle = boolean;

export const kakaoStyleList: KakaoStyle[] = [true, false];

export function getKoreanByKakaoStyle(kakaoStyle: KakaoStyle): string {
    if (kakaoStyle) {
        return '가로';
    } else {
        return '세로';
    }
}

export const defaultLinkShare: LinkShare = {
    kakaoImgUrl: "",
    kakaoTitle: "",
    kakaoContent: "",
    kakaoButton: KakaoButton.NONE,
    kakaoStyle: true,
    urlImgUrl: "",
    urlTitle: "",
    urlContent: "",
}

export const dummyLinkShare: LinkShare = {
    kakaoImgUrl: "",
    kakaoTitle: "",
    kakaoContent: "",
    kakaoButton: KakaoButton.NONE,
    kakaoStyle: true,
    urlImgUrl: "",
    urlTitle: "",
    urlContent: ""
}
