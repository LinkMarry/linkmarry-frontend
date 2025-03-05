export default interface BackgroundMusic {
    // 음악 URL
    musicUrl: string;

    // 음악 자동재생 여부
    effect: boolean;
}

export const defaultBaseMusic: BackgroundMusic = {
    musicUrl: '',
    effect: true,
}

export const dummyBaseMusic: BackgroundMusic = {
    musicUrl: "https://linkmarry.s3.ap-northeast-2.amazonaws.com/music/As_Time_Goes_By.mp3",
    effect: true
}
