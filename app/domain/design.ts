import {type FontFamily} from "~/components/core/text/TextType.ts";
import {type Opening} from "~/api/enumeration/Opening.ts";
import {type GalleryDesign} from "~/api/enumeration/GalleryDesign.ts";
import type {CSSProperties} from "react";

export interface WeddingDesign {
    weddingDesignName: WeddingDesignName;
    weddingDesignColor: WeddingDesignColor;
    weddingDesignFont: FontFamily;
    weddingDesignFontSize: WeddingDesignFontSize;
    titleImgUrl: string;
    opening: Opening;
    openingText: OpeningText;
}

export type WeddingDesignName = string;
export type WeddingDesignColor = WeddingDesignDefaultColor | WeddingDesignPaperColor | string;
export const weddingDesignDefaultColorList = [
    "#FFFFFF",
    "#F7F7F2",
    "#F6F2F2",
    "#FBF2F2",
    "#FFFEF5",
    "#EDF8F8",
    "#ECECEC",
] as const;
export type WeddingDesignDefaultColor = (typeof weddingDesignDefaultColorList)[number];
export const weddingDesignPaperColorList = ["paper1", "paper2", "paper3", "paper4"] as const;
export type WeddingDesignPaperColor = (typeof weddingDesignPaperColorList)[number];

export function isPaperColor(weddingDesignColor: WeddingDesignColor): boolean {
    return weddingDesignColor.startsWith("paper");
}

export function backgroundStyle(weddingDesignColor: WeddingDesignColor): CSSProperties["background"] {
    if (isPaperColor(weddingDesignColor)) {
        return `url("/paper/${weddingDesignColor}.png")`;
    } else {
        return weddingDesignColor;
    }
}

export const weddingDesignFontSizeList = ["basic", "large", "extraLarge"] as const;
export type WeddingDesignFontSize = (typeof weddingDesignFontSizeList)[number];

export const weddingDesignFontSizeMap: Record<WeddingDesignFontSize, {korean: string; addFontSize: number}> = {
    basic: {korean: "기본", addFontSize: 0},
    large: {korean: "크게", addFontSize: 2},
    extraLarge: {korean: "더 크게", addFontSize: 4},
};

export const defaultWeddingDesign: WeddingDesign = {
    weddingDesignName: "",
    weddingDesignColor: "#FFFFFF",
    weddingDesignFont: "Pretendard",
    weddingDesignFontSize: "basic",
    titleImgUrl: "",
    opening: "NONE",
    openingText: "We're getting married!",
};

export const openingTextList = [
    "We're getting married!",
    "저희 둘 결혼합니다",
    "Welcome to Our Wedding",
    "새로운 시작을 함께해주세요",
] as const;
export type OpeningText = (typeof openingTextList)[number];

export const dummyWeddingDesign: WeddingDesign = {
    weddingDesignName: "모던 심플",
    weddingDesignColor: "#FFFFFF",
    weddingDesignFont: "Pretendard",
    weddingDesignFontSize: "basic",
    titleImgUrl:
        "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_3.png",
    opening: "TYPING",
    openingText: "We're getting married!",
};

export interface WeddingDesignPreset {
    id: number;
    name: string;
    img: string;
    category: string;
}

export interface GroupedWeddingDesignPresets {
    category: string;
    items: WeddingDesignPreset[];
}

export function groupedByCategory(presets: WeddingDesignPreset[]): GroupedWeddingDesignPresets[] {
    const grouped = presets.reduce(
        (acc, preset) => {
            if (!acc[preset.category]) {
                acc[preset.category] = [];
            }
            acc[preset.category].push(preset);
            return acc;
        },
        {} as Record<string, WeddingDesignPreset[]>,
    );

    return Object.keys(grouped).map(category => ({
        category,
        items: grouped[category],
    }));
}

export interface Poster {
    imageUrl: string;
    brideName: string;
    groomName: string;
    weddingDate: string;
    styleId?: number;
}

export function makeDefaultPoster(): Poster {
    return {
        imageUrl: "",
        brideName: "",
        groomName: "",
        weddingDate: "",
        styleId: undefined,
    };
}

export interface PosterPreset {
    id: number;
    url: string;
    name: string;
}

export interface BackgroundMusic {
    backgroundMusicUrl: string;
    backgroundMusicName: string;
    effect: boolean;
    backgroundMusicActivate: boolean;
}

export const defaultBackgroundMusic: BackgroundMusic = {
    backgroundMusicUrl: "",
    backgroundMusicName: "",
    effect: true,
    backgroundMusicActivate: true,
};

export const dummyBackgroundMusic: BackgroundMusic = {
    backgroundMusicUrl:
        "https://axqjyyk4dfhw.compat.objectstorage.ap-chuncheon-1.oraclecloud.com/linkmarry/sample/music/As_Time_Goes_By.mp3",
    backgroundMusicName: "As_Time_Goes_By.mp3",
    effect: true,
    backgroundMusicActivate: true,
};

export interface Gallery {
    galleryTitle: string;
    galleryDesign: GalleryDesign;
    galleryZoom: boolean;
    galleryFullScreen: boolean;
    imgList: string[];
}

export const defaultGallery: Gallery = {
    galleryTitle: "",
    galleryDesign: "SLIDE",
    galleryZoom: true,
    galleryFullScreen: true,
    imgList: [],
};

export const dummyGallery: Gallery = {
    galleryTitle: "",
    galleryDesign: "GRID",
    galleryZoom: true,
    galleryFullScreen: true,
    imgList: [
        "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_1.png",
        "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_2.png",
        "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_3.png",
        "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_4.png",
        "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_5.png",
        "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_6.png",
        "https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_7.png",
    ],
};

export interface Video {
    videoTitle: string;
    videoUrl: string;
    videoFileUrl: string;
    videoName: string;
    videoActivate: boolean;
    videoFileType: boolean;
}

export type VideoFileType = boolean;
export const videoFileTypeList: VideoFileType[] = [true, false];
export function getKoreanByVideoFileType(videoFileType: VideoFileType): string {
    return videoFileType ? "파일로 첨부" : "URL로 첨부";
}

export const defaultVideo: Video = {
    videoTitle: "",
    videoUrl: "",
    videoFileUrl: "",
    videoName: "",
    videoActivate: true,
    videoFileType: false,
};

export const dummyVideo: Video = {
    videoTitle: "저희의 결혼식을 위한 영상입니다.",
    videoUrl: "https://www.youtube.com/embed/D1lNjuUj2c8",
    videoFileUrl: "",
    videoName: "결혼.mp4",
    videoActivate: true,
    videoFileType: false,
};

export interface Music {
    id: number;
    name: string;
    imgUrl: string;
    musicUrl: string;
    tag: string;
}

export function getMusicName(music: Music) {
    const lst = music.name.split(".").map(i => i.replaceAll("_", " "));
    lst.pop();
    return lst.join(".");
}

export interface CreateWeddingDesignRequest {
    name: string;
    img: string;
    category: string;
}

export interface PatchWeddingDesignRequest {
    id: number;
    name: string;
    img: string;
    category: string;
}
