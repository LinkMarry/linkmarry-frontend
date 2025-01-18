export default interface Music {
    name: string;
    url: string;
}

export function getMusicName(music: Music) {
    const lst = music.name.split('.')
        .map(i => i.replaceAll('_', ' '));
    lst.pop();
    return lst.join('.');
}