export default interface BaseMusic {
    // 음악 URL
    musicUrl: string;

    // 음악 자동재생 여부
    effect: boolean;
}

export const dummyBaseMusic: BaseMusic = {
    musicUrl: "https://www.youtube.com/watch?v=yBYZkJGKFyA&ab_channel=%EC%98%A4%EB%9E%98%EB%90%9C%ED%95%80",
    effect: true,
}