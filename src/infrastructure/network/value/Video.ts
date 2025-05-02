export default interface Video {
    // 영상 이름
    videoTitle: string;

    // 영상 Url
    videoUrl: string;

    // 영상 파일 Url
    videoFileUrl: string;

    // 영상 이름
    videoName: string;

    // Video 활성화 여부
    videoActivate: boolean;

    // true: 파일, false: url
    videoFileType: boolean;
}

export type VideoFileType = boolean;
export const videoFileTypeList: VideoFileType[] = [true, false];
export function getKoreanByVideoFileType(videoFileType: VideoFileType): string {
    if (videoFileType) {
        return '파일로 첨부'
    } else {
        return 'URL로 첨부'
    }
}

export const defaultVideo: Video = {
    videoTitle: '',
    videoUrl: '',
    videoFileUrl: '',
    videoName: '',
    videoActivate: true,
    videoFileType: true
};

export const dummyVideo: Video = {
    videoTitle: "저희의 결혼식을 위한 영상입니다.",
    videoUrl: "https://www.youtube.com/embed/D1lNjuUj2c8",
    videoFileUrl: '',
    videoName: '결혼.mp4',
    videoActivate: true,
    videoFileType: true,
};
