import React from 'react';
import styled, {css} from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import Comment from "@remote/value/Comment";
import {Column, Row} from "@designsystem/component/FlexLayout";
import {BasicGuestComment} from "@src/component/template/component/GuestCommentsTemplate";
import Text from "@designsystem/component/Text";
import Spacer from "@designsystem/component/Spacer";
import Divider from "@designsystem/component/Divider";
import Icon, {IconType} from "@designsystem/foundation/icon";
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
            <S.container>
                <Row
                    style={{
                        height: 81,
                        position: 'relative',
                    }}
                    $alignItems={'center'}
                >
                    <Spacer/>
                    <Text type={'p2'}>글 전체 보기</Text>
                    <Spacer/>
                    <Icon
                        iconType={IconType.CrossLine}
                        size={20}
                        customStyle={css`
                            cursor: pointer;
                            right: 32px;
                            position: absolute;
                            fill: var(--g-600);
                        `}
                        onClick={dismiss}
                    />
                </Row>
                <Divider/>
                <Column
                    gap={12}
                    style={{
                        padding: '32px 30px',
                        overflowY: 'scroll'
                    }}
                    $alignItems={'stretch'}
                >
                    {comments.map((comment, index) => (
                        <BasicGuestComment
                            key={index}
                            comment={comment}
                            privateContent={guestComment.privateContent}
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
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        max-width: 436px;
        width: 100vw;
        max-height: 100vh;
        overflow-y: hidden;
        align-items: stretch;
        background: white;
        ${applyBaseDialogContent()};
    `
}

export default GuestCommentsDetailDialog;