import {Text, Input, SegmentedButton, FormToggleSet, FormToggle, View} from "~/components";
import PhotoUploadBox from "~/routes/editor/components/PhotoUploadBox.tsx";

import EditorInspectorWrapper from "~/routes/editor/wedding-invitation/components/EditorInspectorWrapper.tsx";
import type Binding from "~/lib/Binding.ts";
import {GalleryDesignList} from "~/domain";
import {galleryDesignMap} from "~/i18n/domain.ts";

import {css} from "@linaria/core";
import type {Wedding} from "~/domain";

const EditorInspectorGallery = ({value: {url, gallery}, update}: Binding<Wedding>) => {
    return (
        <EditorInspectorWrapper type={"gallery"}>
            <View
                ui={css`
                    gap: 12px;
                `}
            >
                <Text type={"p3"} bold={true}>
                    제목
                </Text>
                <Input
                    hasLabel={false}
                    value={gallery.galleryTitle}
                    onChange={event =>
                        update(draft => {
                            draft.gallery.galleryTitle = event.target.value;
                        })
                    }
                />
            </View>
            <View
                ui={css`
                    gap: 12px;
                `}
            >
                <Text type={"p3"} bold={true}>
                    사진 첨부
                </Text>
                <PhotoUploadBox
                    id={"EditorInspectorGallery-imgList"}
                    value={gallery.imgList}
                    weddingUrl={url}
                    onChange={images =>
                        update(draft => {
                            draft.gallery.imgList = images;
                        })
                    }
                />
            </View>
            <View
                ui={css`
                    gap: 12px;
                `}
            >
                <Text type={"p3"} bold={true}>
                    디자인
                </Text>
                <SegmentedButton
                    items={GalleryDesignList.map(i => galleryDesignMap[i].korean)}
                    selectedTab={GalleryDesignList.indexOf(gallery.galleryDesign)}
                    onChange={tab =>
                        update(draft => {
                            draft.gallery.galleryDesign = GalleryDesignList[tab];
                        })
                    }
                />
            </View>
            <View
                ui={css`
                    gap: 12px;
                `}
            >
                <Text type={"p3"} bold={true}>
                    설정
                </Text>
                <FormToggleSet>
                    <FormToggle
                        checked={gallery.galleryZoom}
                        OnChange={checked =>
                            update(draft => {
                                draft.gallery.galleryZoom = checked;
                            })
                        }
                        label={"사진 확대 방지"}
                    />
                    <FormToggle
                        checked={gallery.galleryFullScreen}
                        OnChange={checked =>
                            update(draft => {
                                draft.gallery.galleryFullScreen = checked;
                            })
                        }
                        label={"이미지 클릭 시 전체 화면"}
                    />
                </FormToggleSet>
            </View>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorGallery;
