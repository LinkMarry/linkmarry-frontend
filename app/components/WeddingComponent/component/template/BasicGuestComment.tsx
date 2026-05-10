import {type ComponentPropsWithoutRef} from "react";
import {css} from "@linaria/core";
import {type Comment, backgroundStyle, type WeddingDesignColor} from "~/domain";
import Text from "~/components/core/Text.tsx";
import Spacer from "~/components/core/Spacer.tsx";
import Icon from "~/components/core/icon";
import {trimString} from "~/lib/string-util.ts";
import View from "~/components/core/View.tsx";

interface GuestCommentProps extends ComponentPropsWithoutRef<"div"> {
    comment: Comment;
    background: WeddingDesignColor;
    onRemove: () => void;
}

export const BasicGuestComment = ({comment, background, onRemove, ...props}: GuestCommentProps) => {
    return (
        <View
            ui={css`
                gap: 16px;
                padding: 24px;
                border-radius: 12px;
            `}
            style={{
                background: backgroundStyle(background),
            }}
            {...props}
        >
            <View
                flexDirection={"row"}
                ui={css`
                    gap: 8px;
                    align-items: center;
                `}
            >
                <Text
                    size={18}
                    weight={300}
                    ui={css`
                        color: var(--g-600);
                    `}
                >
                    From. {comment.name}
                </Text>
                <Text
                    size={12}
                    weight={300}
                    ui={css`
                        color: var(--g-300);
                    `}
                >
                    {trimString(comment.createdDate, 10)}
                </Text>
                <Spacer />
                <Icon
                    iconType={"CrossLine"}
                    size={20}
                    ui={css`
                        cursor: pointer;
                        fill: var(--g-300);
                    `}
                    onClick={onRemove}
                />
            </View>
            <Text
                size={16}
                weight={300}
                ui={css`
                    color: var(--g-600);
                `}
            >
                {comment.comment}
            </Text>
        </View>
    );
};

export const StickerGuestComment = ({comment, background, onRemove}: GuestCommentProps) => {
    return (
        <View
            ui={css`
                gap: 8px;
                align-items: flex-start;
                height: 228px;
                flex: 1;
                padding: 12px;
            `}
            style={{
                background: backgroundStyle(background),
            }}
        >
            <Icon
                iconType={"CrossLine"}
                size={20}
                ui={css`
                    align-self: flex-end;
                    cursor: pointer;
                    fill: var(--g-300);
                `}
                onClick={onRemove}
            />
            <View
                ui={css`
                    flex: 1;
                    align-items: flex-start;
                `}
            >
                <Text
                    size={16}
                    weight={300}
                    ui={css`
                        color: var(--g-600);
                    `}
                >
                    {comment.comment}
                </Text>
                <Spacer />
                <View
                    ui={css`
                        gap: 4px;
                        align-items: flex-start;
                    `}
                >
                    <Text
                        size={16}
                        weight={300}
                        ui={css`
                            color: var(--g-600);
                        `}
                    >
                        from. {comment.name}
                    </Text>
                    <Text
                        size={12}
                        weight={300}
                        ui={css`
                            color: var(--g-300);
                        `}
                    >
                        {trimString(comment.createdDate, 10)}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default BasicGuestComment;
