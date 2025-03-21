import React from 'react';
import styled, {css} from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/pattern/dialog/BaseDialog";
import Comment from "@remote/value/Comment";
import {Column, Row} from "@designsystem/core/FlexLayout";
import {BasicGuestComment} from "@src/component/wedding/component/GuestCommentsTemplate";
import Text from "@designsystem/component/Text";
import Spacer from "@designsystem/component/Spacer";
import Divider from "@designsystem/component/Divider";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import GuestComment from "@remote/value/GuestComment";

interface GuestCommentsDetailDialogProps {
    comments: Comment[];
    guestComment: GuestComment;
    onRemove: (comment: Comment) => void;
    dismiss: () => void;
}

function GuestCommentsDetailDialog(
    {
        comments,
        guestComment,
        onRemove,
        dismiss
    }: GuestCommentsDetailDialogProps
) {
    return (
        <BaseDialog dismiss={dismiss}>
            <Column $alignItems={'stretch'} $ui={css`
                max-width: 436px;
                width: 100vw;
                height: 100dvh;
                overflow-y: hidden;
                background: white;
                ${applyBaseDialogContent()};
                animation: none;
            `}>
                <Row $alignItems={'center'} $ui={css`
                    height: 81px;
                    position: relative;
                `}>
                    <Spacer/>
                    <Text type={'p2'}>글 전체 보기</Text>
                    <Spacer/>
                    <Icon iconType={IconType.CrossLine} size={20} onClick={dismiss} ui={css`
                        cursor: pointer;
                        right: 32px;
                        position: absolute;
                        fill: var(--g-600);
                    `}/>
                </Row>
                <Divider/>
                <Column $alignItems={'stretch'} $gap={12} $ui={css`
                    padding: 32px 20px;
                    overflow-y: scroll;
                `}>
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
                </Column>
            </Column>
        </BaseDialog>
    );
}

export default GuestCommentsDetailDialog;
