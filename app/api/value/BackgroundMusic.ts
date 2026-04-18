export default interface BackgroundMusic {
    // 음악 URL
    backgroundMusicUrl: string;

    backgroundMusicName: string;

    // 음악 자동재생 여부
    effect: boolean;

    // 음악 활성화 여부
    backgroundMusicActivate: boolean;
}

export const defaultBackgroundMusic: BackgroundMusic = {
    backgroundMusicUrl: '',
    backgroundMusicName: '',
    effect: true,
    backgroundMusicActivate: true
}

export const dummyBackgroundMusic: BackgroundMusic = {
    backgroundMusicUrl: "https://axqjyyk4dfhw.compat.objectstorage.ap-chuncheon-1.oraclecloud.com/linkmarry/sample/music/As_Time_Goes_By.mp3",
    backgroundMusicName: "As_Time_Goes_By.mp3",
    effect: true,
    backgroundMusicActivate: true
}
