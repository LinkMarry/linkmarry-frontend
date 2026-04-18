import Text from "~/components/core/Text.tsx";
import Input from "~/components/core/Input.tsx";
import PhotoUploadBox from "~/components/PhotoUploadBox.tsx";
import SegmentedButton from "~/components/core/SegmentedButton.tsx";
import FormToggleSet from "~/components/core/FormToggleSet.tsx";
import FormToggle from "~/components/core/FormToggle.tsx";
import EditorInspectorWrapper from "~/routes/editor/component/EditorInspectorWrapper.tsx";
import type Binding from "~/lib/Binding.ts";
import {GalleryDesignList, galleryDesignMap} from "~/api/enumeration/GalleryDesign.ts";
import View from "~/components/core/View.tsx";
import {css} from "@linaria/core";
import type Wedding from "~/api/value/Wedding.ts";


const EditorInspectorGallery = (
    {
        value: {url, gallery},
        update
    }: Binding<Wedding>
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
                    weddingUrl={url}
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
