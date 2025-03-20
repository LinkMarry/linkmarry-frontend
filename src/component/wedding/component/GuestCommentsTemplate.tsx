import React, {ComponentPropsWithoutRef, useRef, useState} from 'react';
import styled, {css, CSSProperties} from "styled-components";
import Comment from "@remote/value/Comment";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Spacer from "@designsystem/component/Spacer";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import GuestCommentDesign from "@remote/enumeration/GuestCommentDesign";
import {trimArray} from "@util/array.util";
import {trimString} from "@util/string.util";
import Button from "@designsystem/component/Button";
import GuestComment from "@remote/value/GuestComment";
import RemoveGuestCommentDialog from "@src/component/wedding/dialog/guestcomment/RemoveGuestCommentDialog";
import GuestCommentsDetailDialog from "@src/component/wedding/dialog/guestcomment/GuestCommentsDetailDialog";
import CreateGuestCommentDialog from "@src/component/wedding/dialog/guestcomment/CreateGuestCommentDialog";
import useScrollOnUpdate from "@hook/useScrollOnUpdate";
import FadeIn from "@src/component/fadein/FadeIn";
import View from "@designsystem/core/View";
import {backgroundStyle, WeddingDesignColor} from "@remote/value/WeddingDesign";

interface GuestCommentsTemplateProps {
    weddingDesignColor: string;
    url: string;
    guestComments: Comment[];
    guestComment: GuestComment;
    onRefresh: () => void;
}

function GuestCommentsTemplate(
    {
        weddingDesignColor,
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

    const guestCommentRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(guestCommentRef, [guestComment])

    return (
        <FadeIn>
            <Column $gap={40} ref={guestCommentRef} $ui={css`
                padding: 92px 30px;
                background: ${backgroundStyle(weddingDesignColor)};
                align-items: stretch;
            `}>
                <Column $gap={40} $alignItems={'stretch'}>
                    <Column $gap={12} $alignItems={'center'}>
                        <FadeIn>
                            <Text size={20} weight={300} ui={css`
                                color: var(--g-600);
                                word-break: break-all;
                                text-align: center;
                            `}>{guestComment.title}</Text>
                        </FadeIn>
                        <FadeIn delay={160}>
                            <Text size={16} weight={300} ui={css`
                                color: var(--g-600);
                                word-break: break-all;
                                text-align: center;
                            `}>{guestComment.content}</Text>
                        </FadeIn>
                    </Column>
                    <FadeIn delay={320}>
                        <Column $gap={12} $alignItems={'stretch'}>
                            <GuestComments
                                comments={guestComments}
                                background={'white'}
                                design={guestComment.guestCommentDesign}
                                onRemove={comment => {
                                    setSelectedRemoveGuestComment(comment);
                                    setShowRemoveGuestCommentDialog(true);
                                }}
                            />
                            <Text size={14} weight={300} ui={css`
                                color: var(--g-600);
                                align-self: flex-end;
                                padding-right: 4px;
                                cursor: pointer;
                            `} onClick={() => {
                                setShowGuestCommentsDetailDialog(true);
                            }}>전체보기</Text>
                        </Column>
                    </FadeIn>
                </Column>
                <View $ui={css`
                    align-self: center;
                `}>
                    <FadeIn delay={480}>
                        <Button
                            text={'방명록 작성하기'}
                            onClick={() => {
                                setShowCreateGuestCommentDialog(true);
                            }}
                        />
                    </FadeIn>
                </View>
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
            </Column>
        </FadeIn>
    );
}

interface GuestCommentsProps {
    comments: Comment[];
    design: GuestCommentDesign;
    background: WeddingDesignColor;
    onRemove: (comment: Comment) => void;
}

function GuestComments(
    {
        comments,
        design,
        background,
        onRemove,
    }: GuestCommentsProps
) {
    switch (design) {
        case GuestCommentDesign.BASIC:
            return (
                <Column $gap={12} $alignItems={'stretch'}>
                    {trimArray(comments, 3).map((comment, index) => (
                        <BasicGuestComment
                            key={index}
                            comment={comment}
                            background={background}
                            onRemove={() => onRemove(comment)}
                        />
                    ))}
                </Column>
            );
        case GuestCommentDesign.STICKER:
            return (
                <Row $gap={20} $alignItems={'stretch'}>
                    {trimArray(comments, 2).map((comment, index) => (
                        <StickerGuestComment
                            key={index}
                            comment={comment}
                            background={background}
                            onRemove={() => onRemove(comment)}
                        />
                    ))}
                </Row>
            );
    }
}

interface GuestCommentProps extends ComponentPropsWithoutRef<'div'> {
    comment: Comment;
    background: WeddingDesignColor;
    onRemove: () => void;
}

export function BasicGuestComment(
    {
        comment,
        background,
        onRemove,
        ...props
    }: GuestCommentProps
) {
    return (
        <Column $gap={16} $ui={css`
            padding: 24px;
            background: ${backgroundStyle(background)};
            border-radius: 12px;
            align-items: stretch;
        `} {...props}>
            <Row $gap={8} $alignItems={'center'}>
                <Text size={18} weight={300} ui={css`
                    color: var(--g-600);
                `}>
                    From. {comment.name}
                </Text>
                <Text size={12} weight={300} ui={css`
                    color: var(--g-300);
                `}>
                    {trimString(comment.createdDate, 10)}
                </Text>
                <Spacer/>
                <Icon iconType={IconType.CrossLine} size={20} ui={css`
                    cursor: pointer;
                    fill: var(--g-300);
                `} onClick={onRemove}/>
            </Row>
            <Text size={16} weight={300} ui={css`
                color: var(--g-600);
            `}>
                {comment.comment}
            </Text>
        </Column>
    );
}

export function StickerGuestComment(
    {
        comment,
        background,
        onRemove
    }: GuestCommentProps
) {
    return (
        <Column $gap={8} $ui={css`
            height: 228px;
            flex: 1;
            padding: 12px;
            background: ${backgroundStyle(background)};
        `}>
            <Icon
                iconType={IconType.CrossLine} size={20}
                ui={css`
                    align-self: flex-end;
                    cursor: pointer;
                    fill: var(--g-300);
                `}
                onClick={onRemove}
            />
            <Column $flex={1}>
                <Text size={16} weight={300} ui={css`
                    color: var(--g-600);
                `}>{comment.comment}</Text>
                <Spacer/>
                <Column $gap={4}>
                    <Text size={16} weight={300} ui={css`
                        color: var(--g-600);
                    `}>from. {comment.name}</Text>
                    <Text size={12} weight={300} ui={css`
                        color: var(--g-300);
                    `}>{trimString(comment.createdDate, 10)}</Text>
                </Column>
            </Column>
        </Column>
    );
}

export default GuestCommentsTemplate;
