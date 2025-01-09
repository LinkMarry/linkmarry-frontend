export default interface Video {
    // 영상 이름
    videoTitle: string;

    // 영상 Url
    videoUrl: string;
}

export const defaultVideo: Video = {
    videoTitle: '',
    videoUrl: '',
};

export const dummyVideo: Video = {
    videoTitle: "이야호",
    videoUrl: "https://www.youtube.com/watch?v=xMgBuGlq8gw&ab_channel=%EB%82%98%ED%83%9C%ED%95%9C%EC%9D%80%EC%9D%80"
};