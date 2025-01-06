export default interface LinkShare {
    // 카카오톡 공유 이미지 url
    kakaoImgUrl: string;

    // 카카오톡 공유 제목
    kakaoTitle: string;

    // 카카오톡 공유 내용
    kakaoContent: string;

    // 링크 공유 이미지 url
    urlImg: string;

    // 링크 공유 제목
    urlTitle: string;

    // 링크 공유 내용
    urlContent: string;
}

export const dummyLinkShare: LinkShare = {
    kakaoImgUrl: "google.com",
    kakaoTitle: "청첩장~~",
    kakaoContent: "초대합니당 우와",
    urlImg: "google.com",
    urlTitle: "url title",
    urlContent: "url content",
}