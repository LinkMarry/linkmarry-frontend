import {Text, Input, Textarea, View} from "~/components";
import {css} from "@linaria/core";
import PhotoUploadBox from "~/routes/editor/components/PhotoUploadBox.tsx";
import SharingLink from "~/routes/editor/components/SharingLink.tsx";
import EditorInspectorWrapper from "~/routes/editor/invitation/[url]/components/EditorInspectorWrapper.tsx";
import type Binding from "~/lib/Binding.ts";

import type {Wedding} from "~/domain";

const EditorInspectorUrlShare = ({value: {url, linkShare}, update}: Binding<Wedding>) => {
    return (
        <EditorInspectorWrapper type={"urlShare"}>
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
                    value={linkShare.urlTitle}
                    onChange={event =>
                        update(draft => {
                            draft.linkShare.urlTitle = event.target.value;
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
                    내용
                </Text>
                <Textarea
                    hasLabel={false}
                    value={linkShare.urlContent}
                    onChange={event =>
                        update(draft => {
                            draft.linkShare.urlContent = event.target.value;
                        })
                    }
                    ui={css`
                        height: 194px;
                    `}
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
                    id={"EditorInspectorUrlShare-urlImgUrl"}
                    value={linkShare.urlImgUrl}
                    weddingUrl={url}
                    onChange={images =>
                        update(draft => {
                            draft.linkShare.urlImgUrl = images;
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
                    미리보기
                </Text>
                <SharingLink title={linkShare.urlTitle} background={linkShare.urlImgUrl} Style={true} />
            </View>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorUrlShare;
