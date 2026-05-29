import {
    Text,
    Button,
    RemoveGuestCommentDialog,
    GuestCommentsDetailDialog,
    CreateGuestCommentDialog,
    FadeIn,
    View,
} from "~/components";
import {useRef, useState} from "react";
import {css} from "@linaria/core";
import {
    type Comment,
    type GuestComment,
    backgroundStyle,
    type WeddingDesignColor,
    type GuestCommentDesign,
} from "~/domain";

import useScrollOnUpdate from "~/hook/useScrollOnUpdate.ts";

import type {WeddingMode} from "~/components/WeddingComponent/WeddingMode.ts";
import {api} from "~/api/index.ts";
import {
    BasicGuestComment,
    StickerGuestComment,
} from "~/components/WeddingComponent/component/template/BasicGuestComment.tsx";

interface GuestCommentsTemplateProps {
    weddingDesignColor: string;
    url: string;
    guestComments: Comment[];
    guestComment: GuestComment;
    mode: WeddingMode;
    onRefresh: () => void;
}

export const GuestCommentsTemplate = ({
    weddingDesignColor,
    url,
    guestComments,
    guestComment,
    mode,
    onRefresh,
}: GuestCommentsTemplateProps) => {
    const [selectedRemoveGuestComment, setSelectedRemoveGuestComment] = useState<Comment>();
    const [showCreateGuestCommentDialog, setShowCreateGuestCommentDialog] = useState(false);
    const [showRemoveGuestCommentDialog, setShowRemoveGuestCommentDialog] = useState(false);
    const [showGuestCommentsDetailDialog, setShowGuestCommentsDetailDialog] = useState(false);

    const guestCommentRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(guestCommentRef, [guestComment], mode === "preview");

    const handleRemove = async (comment: Comment) => {
        if (mode === "preview" || mode === "sample") {
            // 에디터(preview) 또는 샘플 모드일 때
            if (window.confirm("방명록을 삭제하시겠습니까?")) {
                try {
                    await api.wedding.removeComment({
                        url: url,
                        id: comment.id,
                        password: undefined,
                    });
                    onRefresh();
                } catch (error) {
                    console.error("방명록 삭제 실패", error);
                    alert("방명록 삭제에 실패했습니다.");
                }
            }
        } else {
            setSelectedRemoveGuestComment(comment);
            setShowRemoveGuestCommentDialog(true);
        }
    };

    return (
        <FadeIn>
            <View
                ref={guestCommentRef}
                ui={css`
                    gap: 40px;
                    padding: 92px 30px;
                    align-items: stretch;
                    min-height: 500px;
                    justify-content: center;
                `}
                style={{
                    background: backgroundStyle(weddingDesignColor),
                }}
            >
                <View
                    ui={css`
                        gap: 40px;
                    `}
                >
                    <View
                        ui={css`
                            gap: 12px;
                            align-items: center;
                        `}
                    >
                        <FadeIn>
                            <Text
                                size={20}
                                weight={300}
                                ui={css`
                                    color: var(--g-600);
                                    word-break: break-all;
                                    text-align: center;
                                `}
                            >
                                {guestComment.title}
                            </Text>
                        </FadeIn>
                        <FadeIn delay={160}>
                            <Text
                                size={16}
                                weight={300}
                                ui={css`
                                    color: var(--g-600);
                                    word-break: break-all;
                                    text-align: center;
                                    white-space: pre-line;
                                `}
                            >
                                {guestComment.content}
                            </Text>
                        </FadeIn>
                    </View>
                    {!guestComment.privateContent && (
                        <FadeIn delay={320}>
                            <View
                                ui={css`
                                    gap: 12px;
                                `}
                            >
                                <GuestComments
                                    comments={guestComments}
                                    background={"white"}
                                    design={guestComment.guestCommentDesign}
                                    onRemove={handleRemove}
                                />
                                <Text
                                    size={14}
                                    weight={300}
                                    ui={css`
                                        color: var(--g-600);
                                        align-self: flex-end;
                                        padding-right: 4px;
                                        cursor: pointer;
                                    `}
                                    onClick={() => {
                                        setShowGuestCommentsDetailDialog(true);
                                    }}
                                >
                                    전체보기
                                </Text>
                            </View>
                        </FadeIn>
                    )}
                </View>
                <View
                    ui={css`
                        align-self: center;
                    `}
                >
                    <FadeIn delay={480}>
                        <Button
                            text={"방명록 작성하기"}
                            onClick={() => {
                                setShowCreateGuestCommentDialog(true);
                            }}
                        />
                    </FadeIn>
                </View>
                <RemoveGuestCommentDialog
                    show={showRemoveGuestCommentDialog && !!selectedRemoveGuestComment}
                    selectedGuestComment={selectedRemoveGuestComment!}
                    url={url}
                    dismiss={() => setShowRemoveGuestCommentDialog(false)}
                    onRefresh={onRefresh}
                />
                <GuestCommentsDetailDialog
                    show={showGuestCommentsDetailDialog}
                    comments={guestComments}
                    guestComment={guestComment}
                    onRemove={handleRemove}
                    dismiss={() => setShowGuestCommentsDetailDialog(false)}
                />
                <CreateGuestCommentDialog
                    show={showCreateGuestCommentDialog}
                    url={url}
                    dismiss={() => setShowCreateGuestCommentDialog(false)}
                    onRefresh={onRefresh}
                />
            </View>
        </FadeIn>
    );
};

interface GuestCommentsProps {
    comments: Comment[];
    design: GuestCommentDesign;
    background: WeddingDesignColor;
    onRemove: (comment: Comment) => void;
}

const GuestComments = ({comments, design, background, onRemove}: GuestCommentsProps) => {
    switch (design) {
        case "BASIC":
            return (
                <View
                    ui={css`
                        gap: 12px;
                    `}
                >
                    {comments.slice(3).map((comment, index) => (
                        <BasicGuestComment
                            key={index}
                            comment={comment}
                            background={background}
                            onRemove={() => onRemove(comment)}
                        />
                    ))}
                </View>
            );
        case "STICKER":
            return (
                <View
                    flexDirection={"row"}
                    ui={css`
                        gap: 20px;
                    `}
                >
                    {comments.slice(2).map((comment, index) => (
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
};
