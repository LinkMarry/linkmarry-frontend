export default interface LinkShare {
    // 카카오톡 공유 이미지 url
    kakaoImgUrl: string;

    // 카카오톡 공유 제목
    kakaoTitle: string;

    // 카카오톡 공유 내용
    kakaoContent: string;

    // 링크 공유 이미지 url
    urlImgUrl: string;

    // 링크 공유 제목
    urlTitle: string;

    // 링크 공유 내용
    urlContent: string;
}

export const defaultLinkShare: LinkShare = {
    kakaoImgUrl: "",
    kakaoTitle: "",
    kakaoContent: "",
    urlImgUrl: "",
    urlTitle: "",
    urlContent: "",
}

export const dummyLinkShare: LinkShare = {
    kakaoImgUrl: "",
    kakaoTitle: "",
    kakaoContent: "",
    urlImgUrl: "",
    urlTitle: "",
    urlContent: ""
}