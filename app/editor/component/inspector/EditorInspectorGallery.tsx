import Text from "~/userinterface/component/Text.tsx";
import Input from "~/userinterface/component/Input.tsx";
import PhotoUploadBox from "~/userinterface/specific/PhotoUploadBox.tsx";
import SegmentedButton from "~/userinterface/component/SegmentedButton.tsx";
import FormToggleSet from "~/userinterface/component/FormToggleSet.tsx";
import FormToggle from "~/userinterface/component/FormToggle.tsx";
import EditorInspectorWrapper from "~/editor/component/inspector/EditorInspectorWrapper.tsx";
import type Binding from "~/shared/Binding.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import {GalleryDesignList, galleryDesignMap} from "~/infrastructure/network/enumeration/GalleryDesign.ts";
import View from "~/userinterface/core/View.tsx";
import {css} from "@linaria/core";


const EditorInspectorGallery = (
    {
        value: {gallery},
        update
    }: Binding<WeddingDto>
) => {
    return (
        <EditorInspectorWrapper type={'gallery'}>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={gallery.galleryTitle} onChange={event => update(draft => {
                    draft.gallery.galleryTitle = event.target.value;
                })}/>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>사진 첨부</Text>
                <PhotoUploadBox
                    id={'EditorInspectorGallery-imgList'}
                    value={gallery.imgList}
                    onChange={images => update(draft => {
                        draft.gallery.imgList = images;
                    })}
                />
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>디자인</Text>
                <SegmentedButton
                    items={GalleryDesignList.map(i => galleryDesignMap[i].korean)}
                    selectedTab={GalleryDesignList.indexOf(gallery.galleryDesign)}
                    onChange={tab => update(draft => {
                        draft.gallery.galleryDesign = GalleryDesignList[tab];
                    })}
                />
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>설정</Text>
                <FormToggleSet>
                    <FormToggle checked={gallery.galleryZoom} OnChange={checked => update(draft => {
                        draft.gallery.galleryZoom = checked;
                    })} label={'사진 확대 방지'}/>
                    <FormToggle checked={gallery.galleryFullScreen} OnChange={checked => update(draft => {
                        draft.gallery.galleryFullScreen = checked;
                    })} label={'이미지 클릭 시 전체 화면'}/>
                </FormToggleSet>
            </View>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorGallery;
