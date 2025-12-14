import {type GalleryDesign} from "~/infrastructure/network/enumeration/GalleryDesign";

export default interface Gallery {
    galleryTitle: string;
    galleryDesign: GalleryDesign;
    galleryZoom: boolean;
    galleryFullScreen: boolean;
    imgList: string[];
}

export const defaultGallery: Gallery = {
    galleryTitle: '',
    galleryDesign: 'SLIDE',
    galleryZoom: false,
    galleryFullScreen: false,
    imgList: []
};

export const dummyGallery: Gallery = {
    galleryTitle: '',
    galleryDesign: 'GRID',
    galleryZoom: true,
    galleryFullScreen: true,
    imgList: [
        'https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_1.png',
        'https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_2.png',
        'https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_3.png',
        'https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_4.png',
        'https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_5.png',
        'https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_6.png',
        'https://axoeono6ygrw.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/axoeono6ygrw/b/linkmarry/o/samplesample_7.png',
    ]
};
