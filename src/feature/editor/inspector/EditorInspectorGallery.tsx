import React from 'react';
import {Column} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import Input from "@src/userinterface/component/Input";
import PhotoUploadBox from "@src/userinterface/specific/PhotoUploadBox";
import SegmentedButton from "@src/userinterface/component/SegmentedButton";
import FormToggleSet from "@src/userinterface/component/FormToggleSet";
import FormToggle from "@src/userinterface/component/FormToggle";
import EditorInspectorWrapper from "@src/feature/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/shared/Binding";
import WeddingDto from "@src/infrastructure/network/value/WeddingDto";
import {galleryDesignList, galleryDesignMap} from "@src/infrastructure/network/enumeration/GalleryDesign";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorGallery = (
    {
        value: {gallery},
        update
    }: Props
) => {
    return (
        <EditorInspectorWrapper type={'gallery'}>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={gallery.galleryTitle} onChange={event => update(draft => {
                    draft.gallery.galleryTitle = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>사진 첨부</Text>
                <PhotoUploadBox
                    id={'EditorInspectorGallery-imgList'}
                    value={gallery.imgList}
                    onChange={images => update(draft => {
                        draft.gallery.imgList = images;
                    })}
                />
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>디자인</Text>
                <SegmentedButton
                    items={galleryDesignList.map(i => galleryDesignMap[i].korean)}
                    selectedTab={galleryDesignList.indexOf(gallery.galleryDesign)}
                    onChange={tab => update(draft => {
                        draft.gallery.galleryDesign = galleryDesignList[tab];
                    })}
                />
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>설정</Text>
                <FormToggleSet>
                    <FormToggle checked={gallery.galleryZoom} OnChange={checked => update(draft => {
                        draft.gallery.galleryZoom = checked;
                    })} label={'사진 확대 방지'}/>
                    <FormToggle checked={gallery.galleryFullScreen} OnChange={checked => update(draft => {
                        draft.gallery.galleryFullScreen = checked;
                    })} label={'이미지 클릭 시 전체 화면'}/>
                </FormToggleSet>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorGallery;
