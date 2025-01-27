import React from 'react';
import styled from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import Comment from "@remote/value/Comment";
import {Column, Row} from "@designsystem/component/flexLayout";
import {BasicGuestComment} from "@src/component/template/component/GuestCommentsTemplate";
import colors from "@designsystem/foundation/colors";
import Text from "@designsystem/component/text";
import Spacer from "@designsystem/component/spacer";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
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
                        type={IconType.CrossLine}
                        tint={colors.g600}
                        size={20}
                        style={{
                            cursor: 'pointer',
                            right: 32,
                            position: 'absolute'
                        }}
                        onClick={dismiss}
                    />
                </Row>
                <HorizontalDivider/>
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
                            background={colors.white}
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
        background: ${colors.white};
        ${applyBaseDialogContent()};
    `
}

export default GuestCommentsDetailDialog;