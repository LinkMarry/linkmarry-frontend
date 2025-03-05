import GalleryDesign from "@remote/enumeration/ImgDesign";

export default interface Gallery {
    galleryTitle: string;
    galleryDesign: GalleryDesign;
    galleryZoom: boolean;
    galleryFullScreen: boolean;
    imgList: string[];
}

export const defaultGallery: Gallery = {
    galleryTitle: '',
    galleryDesign: GalleryDesign.SLIDE,
    galleryZoom: false,
    galleryFullScreen: false,
    imgList: []
};
