import {BaseDialog, Text, Spacer, Divider, Icon, View} from "~/components";
import {css, cx} from "@linaria/core";

import type {Comment, GuestComment} from "~/domain";
import {BasicGuestComment} from "~/components/WeddingComponent/component/template/BasicGuestComment.tsx";

import {baseDialogContentStyle} from "~/components/core/dialog/baseDialogContentStyle.ts";

import {hideScrollBarStyle} from "~/style/common.ts";

interface GuestCommentsDetailDialogProps {
    show: boolean;
    comments: Comment[];
    guestComment: GuestComment;
    onRemove: (comment: Comment) => void;
    dismiss: () => void;
}

export const GuestCommentsDetailDialog = ({show, comments, onRemove, dismiss}: GuestCommentsDetailDialogProps) => {
    return (
        <BaseDialog show={show} dismiss={dismiss}>
            <View
                ui={cx(
                    css`
                        max-width: 436px;
                        width: 100vw;
                        height: 100dvh;
                        overflow-y: hidden;
                        background: white;
                    `,
                    baseDialogContentStyle,
                    css`
                        animation: none;
                    `,
                )}
            >
                <View
                    flexDirection={"row"}
                    ui={css`
                        align-items: center;
                        height: 81px;
                        position: relative;
                    `}
                >
                    <Spacer />
                    <Text type={"p2"}>글 전체 보기</Text>
                    <Spacer />
                    <Icon
                        iconType={"CrossLine"}
                        size={20}
                        onClick={dismiss}
                        ui={css`
                            cursor: pointer;
                            right: 32px;
                            position: absolute;
                            fill: var(--g-600);
                        `}
                    />
                </View>
                <Divider />
                <View
                    ui={cx(
                        css`
                            gap: 12px;
                            padding: 32px 20px;
                            overflow-y: scroll;
                            flex: 1;
                            overscroll-behavior: contain;
                            touch-action: pan-y;
                        `,
                        hideScrollBarStyle,
                    )}
                >
                    {comments.map((comment, index) => (
                        <BasicGuestComment
                            key={index}
                            comment={comment}
                            background={"white"}
                            onRemove={() => {
                                onRemove(comment);
                            }}
                            style={{
                                boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.12)",
                            }}
                        />
                    ))}
                </View>
            </View>
        </BaseDialog>
    );
};
