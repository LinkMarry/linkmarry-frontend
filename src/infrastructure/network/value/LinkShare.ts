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
    kakaoImgUrl: "https://linkmarry.s3.ap-northeast-2.amazonaws.com/0234d19a-3206-489b-bafb-c0fa32c850ac-GettyImages-jv11005081.jpg.jpg",
    kakaoTitle: "2월 15일, 저희 결혼합니다.",
    kakaoContent: "많이 와주세요~",
    kakaoButton: KakaoButton.NONE,
    kakaoStyle: true,
    urlImgUrl: "https://linkmarry.s3.ap-northeast-2.amazonaws.com/0234d19a-3206-489b-bafb-c0fa32c850ac-GettyImages-jv11005081.jpg.jpg",
    urlTitle: "2월 15일, 저희 결혼합니다.",
    urlContent: "많이 와주세요~"
}
