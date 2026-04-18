import {css, cx} from "@linaria/core";
import BaseDialog from "~/components/core/dialog/BaseDialog.tsx";
import type Comment from "~/api/value/Comment.ts";
import {BasicGuestComment} from "~/components/WeddingComponent/component/template/GuestCommentsTemplate.tsx";
import Text from "~/components/core/Text.tsx";
import Spacer from "~/components/core/Spacer.tsx";
import Divider from "~/components/core/Divider.tsx";
import Icon from "~/components/core/icon";
import type GuestComment from "~/api/value/GuestComment.ts";
import {baseDialogContentStyle} from "~/components/core/dialog/baseDialogContentStyle.ts";
import View from "~/components/core/View.tsx";
import {hideScrollBarStyle} from "~/components/css.util.ts";

interface GuestCommentsDetailDialogProps {
    comments: Comment[];
    guestComment: GuestComment;
    onRemove: (comment: Comment) => void;
    dismiss: () => void;
}

function GuestCommentsDetailDialog(
    {
        comments,
        onRemove,
        dismiss
    }: GuestCommentsDetailDialogProps
) {
    return (
        <BaseDialog dismiss={dismiss}>
            <View ui={cx(
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
                `
            )}>
                <View ui={css`
                    flex-direction: row !important;
                    align-items: center;
                    height: 81px;
                    position: relative;
                `}>
                    <Spacer/>
                    <Text type={'p2'}>글 전체 보기</Text>
                    <Spacer/>
                    <Icon iconType={'CrossLine'} size={20} onClick={dismiss} ui={css`
                        cursor: pointer;
                        right: 32px;
                        position: absolute;
                        fill: var(--g-600);
                    `}/>
                </View>
                <Divider/>
                <View ui={cx(
                    css`
                        gap: 12px;
                        padding: 32px 20px;
                        overflow-y: scroll;
                        flex: 1;
                        overscroll-behavior: contain;
                        touch-action: pan-y;
                    `,
                    hideScrollBarStyle
                )}>
                    {comments.map((comment, index) => (
                        <BasicGuestComment
                            key={index}
                            comment={comment}
                            background={'white'}
                            onRemove={() => {
                                onRemove(comment);
                            }}
                            style={{
                                boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.12)'
                            }}
                        />
                    ))}
                </View>
            </View>
        </BaseDialog>
    );
}

export default GuestCommentsDetailDialog;
