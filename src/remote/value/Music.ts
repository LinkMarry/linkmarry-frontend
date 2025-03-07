export default interface Music {
    id: number;
    name: string;
    imgUrl: string;
    musicUrl: string;
    tag: string;
}

export function getMusicName(music: Music) {
    const lst = music.name.split('.')
        .map(i => i.replaceAll('_', ' '));
    lst.pop();
    return lst.join('.');
}
