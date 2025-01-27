import React, {HTMLAttributes, useState} from 'react';
import styled, {CSSProperties} from "styled-components";
import Comment from "@remote/value/Comment";
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import Spacer from "@designsystem/component/spacer";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Design from "@remote/enumeration/Design";
import {trimArray} from "@util/array.util";
import {trimString} from "@util/string.util";
import Button from "@designsystem/component/button";
import GuestComment from "@remote/value/GuestComment";
import RemoveGuestCommentDialog from "@src/component/template/dialog/guestcomment/RemoveGuestCommentDialog";
import GuestCommentsDetailDialog from "@src/component/template/dialog/guestcomment/GuestCommentsDetailDialog";
import CreateGuestCommentDialog from "@src/component/template/dialog/guestcomment/CreateGuestCommentDialog";

interface GuestCommentsTemplateProps {
    templateColor: string;
    url: string;
    guestComments: Comment[];
    guestComment: GuestComment;
    onRefresh: () => void;
}

function GuestCommentsTemplate(
    {
        templateColor,
        url,
        guestComments,
        guestComment,
        onRefresh
    }: GuestCommentsTemplateProps
) {
    const [selectedRemoveGuestComment, setSelectedRemoveGuestComment] = useState<Comment>();
    const [showCreateGuestCommentDialog, setShowCreateGuestCommentDialog] = useState(false);
    const [showRemoveGuestCommentDialog, setShowRemoveGuestCommentDialog] = useState(false);
    const [showGuestCommentsDetailDialog, setShowGuestCommentsDetailDialog] = useState(false);

    return (
        <S.root background={templateColor}>
            <Column gap={40} $alignItems={'stretch'}>
                <Column gap={12} $alignItems={'center'}>
                    <Text
                        size={20} weight={300} color={colors.g600}
                        style={{wordBreak: 'break-all', textAlign: 'center'}}
                    >
                        {guestComment.title}
                    </Text>
                    <Text
                        size={16} weight={300} color={colors.g600}
                        style={{wordBreak: 'break-all', textAlign: 'center'}}
                    >
                        {guestComment.content}
                    </Text>
                </Column>
                {guestComment.privateContent && (
                    <Column gap={12} $alignItems={'stretch'}>
                        <GuestComments
                            comments={guestComments}
                            design={guestComment.design}
                            privateDate={guestComment.privateDate}
                            background={colors.white}
                            onRemove={comment => {
                                setSelectedRemoveGuestComment(comment);
                                setShowRemoveGuestCommentDialog(true);
                            }}
                        />
                        <Text
                            style={{alignSelf: 'flex-end', paddingRight: 4, cursor: 'pointer'}}
                            size={14} weight={300} color={colors.g600}
                            onClick={() => {
                                setShowGuestCommentsDetailDialog(true);
                            }}
                        >전체보기</Text>
                    </Column>
                )}
            </Column>
            <Button
                text={'방명록 작성하기'}
                style={{
                    alignSelf: 'center'
                }}
                onClick={() => {
                    setShowCreateGuestCommentDialog(true);
                }}
            />
            {showRemoveGuestCommentDialog && selectedRemoveGuestComment && (
                <RemoveGuestCommentDialog
                    selectedGuestComment={selectedRemoveGuestComment}
                    url={url}
                    dismiss={() => setShowRemoveGuestCommentDialog(false)}
                    onRefresh={onRefresh}
                />
            )}
            {showGuestCommentsDetailDialog && (
                <GuestCommentsDetailDialog
                    comments={guestComments}
                    guestComment={guestComment}
                    onRemove={comment => {
                        setSelectedRemoveGuestComment(comment);
                        setShowRemoveGuestCommentDialog(true);
                    }}
                    dismiss={() => setShowGuestCommentsDetailDialog(false)}
                />
            )}
            {showCreateGuestCommentDialog && (
                <CreateGuestCommentDialog
                    url={url}
                    dismiss={() => setShowCreateGuestCommentDialog(false)}
                    onRefresh={onRefresh}
                />
            )}
        </S.root>
    );
}

interface GuestCommentsProps {
    comments: Comment[];
    design: Design;
    privateDate: boolean;
    background: CSSProperties['background'];
    onRemove: (comment: Comment) => void;
}

function GuestComments(
    {
        comments,
        design,
        privateDate,
        background,
        onRemove,
    }: GuestCommentsProps
) {
    switch (design) {
        case Design.BASIC:
            return (
                <Column gap={12} $alignItems={'stretch'}>
                    {trimArray(comments, 3).map((comment, index) => (
                        <BasicGuestComment
                            key={index}
                            comment={comment}
                            background={background}
                            privateContent={privateDate}
                            onRemove={() => onRemove(comment)}
                        />
                    ))}
                </Column>
            );
        case Design.STICKER:
            return (
                <Row gap={20} $alignItems={'stretch'}>
                    {trimArray(comments, 2).map((comment, index) => (
                        <StickerGuestComment
                            key={index}
                            comment={comment}
                            background={background}
                            privateContent={privateDate}
                            onRemove={() => onRemove(comment)}
                        />
                    ))}
                </Row>
            );
    }
}


const S = {
    root: styled.div<{ background: string }>`
        display: flex;
        flex-direction: column;
        padding: 92px 30px;
        gap: 40px;
        background: ${({background}) => background};
        align-items: stretch;
    `,
    basicContainer: styled.div<{ background: CSSProperties['background'] }>`
        display: flex;
        flex-direction: column;
        padding: 24px;
        gap: 16px;
        background: ${({background}) => background};
        border-radius: 12px;
    `,
    stickerContainer: styled.div<{ background: CSSProperties['background'] }>`
        display: flex;
        flex-direction: column;
        gap: 8px;
        height: 228px;
        flex: 1;
        padding: 12px;
        background: ${({background}) => background};
    `
}

interface GuestCommentProps extends HTMLAttributes<HTMLDivElement> {
    comment: Comment;
    privateContent: boolean;
    background: CSSProperties['background'];
    onRemove: () => void;
}

export function BasicGuestComment(
    {
        comment,
        privateContent,
        background,
        onRemove,
        ...props
    }: GuestCommentProps
) {
    return (
        <S.basicContainer background={background} {...props}>
            <Row gap={8} $alignItems={'center'}>
                <Text size={18} color={colors.g600} weight={300}>
                    From. {comment.name}
                </Text>
                {!privateContent && (
                    <Text size={12} color={colors.g300} weight={300}>
                        {trimString(comment.createdDate, 10)}
                    </Text>
                )}
                <Spacer/>
                <Icon
                    type={IconType.CrossLine} size={20} tint={colors.g300} style={{cursor: 'pointer'}}
                    onClick={onRemove}
                />
            </Row>
            <Text size={16} color={colors.g600} weight={300}>
                {comment.comment}
            </Text>
        </S.basicContainer>
    );
}

export function StickerGuestComment(
    {
        comment,
        privateContent,
        background,
        onRemove
    }: GuestCommentProps
) {
    return (
        <S.stickerContainer background={background}>
            <Icon
                type={IconType.CrossLine} tint={colors.g300} size={20}
                style={{alignSelf: 'flex-end', cursor: 'pointer'}}
                onClick={onRemove}
            />
            <Column flex={1}>
                <Text size={16} weight={300} color={colors.g600}>
                    {comment.comment}
                </Text>
                <Spacer/>
                <Column gap={4}>
                    <Text size={16} weight={300} color={colors.g600}>
                        from. {comment.name}
                    </Text>
                    {!privateContent && (
                        <Text
                            size={12}
                            weight={300}
                            color={colors.g300}
                        >{trimString(comment.createdDate, 10)}</Text>
                    )}
                </Column>
            </Column>
        </S.stickerContainer>
    );
}

export default GuestCommentsTemplate;