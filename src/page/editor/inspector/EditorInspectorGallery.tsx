import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import FormToggleSet from "@designsystem/component/FormToggleSet";
import FormToggle from "@designsystem/component/FormToggle";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import {galleryDesignList, galleryDesignMap} from "@remote/enumeration/GalleryDesign";

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
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={gallery.galleryTitle} onChange={event => update(draft => {
                    draft.gallery.galleryTitle = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>사진 첨부</Text>
                <PhotoUploadBox
                    id={'EditorInspectorGallery-imgList'}
                    value={gallery.imgList}
                    onChange={images => update(draft => {
                        draft.gallery.imgList = images;
                    })}
                />
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>디자인</Text>
                <SegmentedButton
                    items={galleryDesignList.map(i => galleryDesignMap[i].korean)}
                    selectedTab={galleryDesignList.indexOf(gallery.galleryDesign)}
                    onChange={tab => update(draft => {
                        draft.gallery.galleryDesign = galleryDesignList[tab];
                    })}
                />
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
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
