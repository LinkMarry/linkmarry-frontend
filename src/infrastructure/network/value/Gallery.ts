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
    galleryDesign: GalleryDesign.GRID,
    galleryZoom: true,
    galleryFullScreen: true,
    imgList: [
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/0234d19a-3206-489b-bafb-c0fa32c850ac-GettyImages-jv11005081.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/1b2bb890-926d-4e0f-9ecb-d8eab41d6f5c-GettyImages-jv11192610.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/0e1168cb-1ec2-4b7b-aa0b-0ac2e5e2a5d2-GettyImages-jv11192626.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/ed97f77c-fbc5-4083-94d8-fcefd5c2099f-GettyImages-jv11192637.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/c7f66ccd-e5f5-4aa7-be52-794d44efc368-GettyImages-jv12578254.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/9aad2273-caa0-4a65-8aa8-faca81d43519-GettyImages-jv12585991.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/fc5b2fd9-4e48-4ac8-adfa-2d87bca7f513-GettyImages-jv12586038.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/eac9d4db-94fa-4687-9ea6-3aa124d338be-GettyImages-jv12586686.jpg.jpg",
        "https://linkmarry.s3.ap-northeast-2.amazonaws.com/45ba7594-808b-47eb-b64f-fb745e9462f2-GettyImages-jv12586711.jpg.jpg"
    ]
};
