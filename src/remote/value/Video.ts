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
    videoTitle: "저희 결혼합니다.",
    videoUrl: "https://www.youtube.com/embed/D1lNjuUj2c8"
};