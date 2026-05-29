import {Text, Input, SegmentedButton, FormToggle, View, Textarea} from "~/components";
import EditorInspectorWrapper from "~/routes/editor/invitation/[url]/components/EditorInspectorWrapper.tsx";
import type Binding from "~/lib/Binding.ts";
import {css} from "@linaria/core";

import {type Wedding, GuestCommentDesignList} from "~/domain";
import {guestCommentDesignMap} from "~/i18n/domain.ts";

const EditorInspectorGuestComment = ({value: {guestComment}, update}: Binding<Wedding>) => {
    return (
        <EditorInspectorWrapper type={"guestComment"}>
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
                    value={guestComment.title}
                    onChange={event =>
                        update(draft => {
                            draft.guestComment.title = event.target.value;
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
                    value={guestComment.content}
                    onChange={event =>
                        update(draft => {
                            draft.guestComment.content = event.target.value;
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
                    디자인
                </Text>
                <SegmentedButton
                    items={GuestCommentDesignList.map(i => guestCommentDesignMap[i].korean)}
                    selectedTab={GuestCommentDesignList.indexOf(guestComment.guestCommentDesign)}
                    onChange={tab =>
                        update(draft => {
                            draft.guestComment.guestCommentDesign = GuestCommentDesignList[tab];
                        })
                    }
                />
            </View>
            <FormToggle
                checked={guestComment.privateContent}
                OnChange={checked =>
                    update(draft => {
                        draft.guestComment.privateContent = checked;
                    })
                }
                label={"내용 비공개"}
            />
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorGuestComment;
