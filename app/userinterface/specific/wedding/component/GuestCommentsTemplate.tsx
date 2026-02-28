import {type ComponentPropsWithoutRef, useRef, useState} from 'react';
import {css} from "@linaria/core";
import type Comment from "~/infrastructure/network/value/Comment";
import Text from "~/userinterface/component/Text";
import Spacer from "~/userinterface/component/Spacer";
import Icon from "~/userinterface/foundation/Icon";
import {type GuestCommentDesign} from "~/infrastructure/network/enumeration/GuestCommentDesign";
import {trimArray} from "~/shared/array-util";
import {trimString} from "~/shared/string-util";
import Button from "~/userinterface/component/Button";
import type GuestComment from "~/infrastructure/network/value/GuestComment";
import RemoveGuestCommentDialog from "~/userinterface/specific/wedding/dialog/guestcomment/RemoveGuestCommentDialog";
import GuestCommentsDetailDialog from "~/userinterface/specific/wedding/dialog/guestcomment/GuestCommentsDetailDialog";
import CreateGuestCommentDialog from "~/userinterface/specific/wedding/dialog/guestcomment/CreateGuestCommentDialog";
import useScrollOnUpdate from "~/hook/useScrollOnUpdate";
import FadeIn from "~/userinterface/specific/fadein/FadeIn";
import View from "~/userinterface/core/View.tsx";
import {backgroundStyle, type WeddingDesignColor} from "~/infrastructure/network/value/WeddingDesign";
import type {WeddingMode} from "~/userinterface/specific/wedding/WeddingMode.ts";

interface GuestCommentsTemplateProps {
    weddingDesignColor: string;
    url: string;
    guestComments: Comment[];
    guestComment: GuestComment;
    mode: WeddingMode;
    onRefresh: () => void;
}

function GuestCommentsTemplate(
    {
        weddingDesignColor,
        url,
        guestComments,
        guestComment,
        mode,
        onRefresh
    }: GuestCommentsTemplateProps
) {
    const [selectedRemoveGuestComment, setSelectedRemoveGuestComment] = useState<Comment>();
    const [showCreateGuestCommentDialog, setShowCreateGuestCommentDialog] = useState(false);
    const [showRemoveGuestCommentDialog, setShowRemoveGuestCommentDialog] = useState(false);
    const [showGuestCommentsDetailDialog, setShowGuestCommentsDetailDialog] = useState(false);

    const guestCommentRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(guestCommentRef, [guestComment], mode === 'preview');

    return (
        <FadeIn>
            <View ref={guestCommentRef} ui={css`
                gap: 40px;
                padding: 92px 30px;
                align-items: stretch;
                min-height: 500px;
                justify-content: center;
            `} style={{
                background: backgroundStyle(weddingDesignColor)
            }}>
                <View ui={css`
                    gap: 40px;
                `}>
                    <View ui={css`
                        gap: 12px;
                        align-items: center;
                    `}>
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
                                white-space: pre-line;
                            `}>{guestComment.content}</Text>
                        </FadeIn>
                    </View>
                    {!guestComment.privateContent && (
                        <FadeIn delay={320}>
                            <View ui={css`
                                gap: 12px;
                            `}>
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
                            </View>
                        </FadeIn>
                    )}
                </View>
                <View ui={css`
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
            </View>
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
        case 'BASIC':
            return (
                <View ui={css`
                    gap: 12px;
                `}>
                    {trimArray(comments, 3).map((comment, index) => (
                        <BasicGuestComment
                            key={index}
                            comment={comment}
                            background={background}
                            onRemove={() => onRemove(comment)}
                        />
                    ))}
                </View>
            );
        case 'STICKER':
            return (
                <View ui={css`
                    flex-direction: row !important;
                    gap: 20px;
                `}>
                    {trimArray(comments, 2).map((comment, index) => (
                        <StickerGuestComment
                            key={index}
                            comment={comment}
                            background={background}
                            onRemove={() => onRemove(comment)}
                        />
                    ))}
                </View>
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
        <View ui={css`
            gap: 16px;
            padding: 24px;
            border-radius: 12px;
        `} style={{
            background: backgroundStyle(background)
        }} {...props}>
            <View ui={css`
                flex-direction: row !important;
                gap: 8px;
                align-items: center;
            `}>
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
                <Icon iconType={'CrossLine'} size={20} ui={css`
                    cursor: pointer;
                    fill: var(--g-300);
                `} onClick={onRemove}/>
            </View>
            <Text size={16} weight={300} ui={css`
                color: var(--g-600);
            `}>
                {comment.comment}
            </Text>
        </View>
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
        <View ui={css`
            gap: 8px;
            align-items: flex-start;
            height: 228px;
            flex: 1;
            padding: 12px;
        `} style={{
            background: backgroundStyle(background)
        }}>
            <Icon
                iconType={'CrossLine'} size={20}
                ui={css`
                    align-self: flex-end;
                    cursor: pointer;
                    fill: var(--g-300);
                `}
                onClick={onRemove}
            />
            <View ui={css`
                flex: 1;
                align-items: flex-start;
            `}>
                <Text size={16} weight={300} ui={css`
                    color: var(--g-600);
                `}>{comment.comment}</Text>
                <Spacer/>
                <View ui={css`
                    gap: 4px;
                    align-items: flex-start;
                `}>
                    <Text size={16} weight={300} ui={css`
                        color: var(--g-600);
                    `}>from. {comment.name}</Text>
                    <Text size={12} weight={300} ui={css`
                        color: var(--g-300);
                    `}>{trimString(comment.createdDate, 10)}</Text>
                </View>
            </View>
        </View>
    );
}

export default GuestCommentsTemplate;
