import GalleryDesign from "@src/infrastructure/network/enumeration/GalleryDesign";

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

export const dummyGallery: Gallery = {
    galleryTitle: '',
    galleryDesign: GalleryDesign.HIGHLIGHT,
    galleryZoom: true,
    galleryFullScreen: true,
    imgList: [
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/252470f8-3c29-4e45-a05e-c18bc1abb488-GettyImages-jv11005063.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/1c4b84cb-c635-4bf3-a195-575902f33b07-GettyImages-jv11005081.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/41af240a-7157-4176-8203-75372d251004-GettyImages-jv11192610.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/19eeb9fd-5607-4e11-85af-d16f541ec7a6-GettyImages-jv11192626.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/0a9efe7e-d26d-498a-b03e-e777b6a32bfd-GettyImages-jv11192637.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/f52bbe8a-77a7-45c1-b01f-4f865b5a7870-GettyImages-jv12578254.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/d2c09181-bb9f-4cd3-9196-e06f65140228-GettyImages-jv12585991.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/f754865a-5ced-4a93-bc07-40a1d637c20e-GettyImages-jv12586038.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/7e35f845-1eb5-4be8-b3f9-c5abbe8c4e3d-GettyImages-jv12586686.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/6f7b0399-70ed-43ae-80e6-a227fc4ab54c-GettyImages-jv12586709.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/da9ea1f5-bb5d-4e85-bed8-63c355ab3e3f-GettyImages-jv12586711%20%281%29.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/dc68fab8-0042-4b3f-9a2c-892cd722fd03-GettyImages-jv12586711.jpg.jpg"
    ]
};
