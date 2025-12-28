import {css, cx} from "@linaria/core";
import BaseDialog from "~/userinterface/pattern/dialog/BaseDialog";
import type Comment from "~/infrastructure/network/value/Comment";
import {BasicGuestComment} from "~/userinterface/specific/wedding/component/GuestCommentsTemplate";
import Text from "~/userinterface/component/Text";
import Spacer from "~/userinterface/component/Spacer";
import Divider from "~/userinterface/component/Divider";
import Icon from "~/userinterface/foundation/Icon";
import type GuestComment from "~/infrastructure/network/value/GuestComment";
import {baseDialogContentStyle} from "~/userinterface/pattern/dialog/baseDialogContentStyle.ts";
import View from "~/userinterface/core/View.tsx";
import {hideScrollBarStyle} from "~/userinterface/css.util.ts";

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
