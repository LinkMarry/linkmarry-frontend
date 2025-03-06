export default interface Video {
    // 영상 이름
    videoTitle: string;

    // 영상 Url
    videoUrl: string;

    // Video 활성화 여부
    videoActive: boolean;
}

export const defaultVideo: Video = {
    videoTitle: '',
    videoUrl: '',
    videoActive: true,
};

export const dummyVideo: Video = {
    videoTitle: "저희 결혼합니다.",
    videoUrl: "https://www.youtube.com/embed/D1lNjuUj2c8",
    videoActive: true
};
