import {Text, BasePopover, View} from "~/components";
import {type ComponentPropsWithoutRef} from "react";
import {Icon, type IconType} from "~/components/core/icon";

import {fadeInAnimationStyle} from "~/style/animation";

import {css, cx, type LinariaClassName} from "@linaria/core";

import {interactionEffectStyles} from "~/style/common.ts";

type ItemType = "normal" | "destructive";

export interface PopoverItem {
    icon: IconType;
    text: string;
    type?: ItemType;
    onClick: () => void;
    ui?: LinariaClassName;
}

const itemTypeStyle: Record<
    ItemType,
    {
        icon: LinariaClassName;
        text: LinariaClassName;
    }
> = {
    normal: {
        icon: css`
            fill: var(--g-800);
        `,
        text: css`
            color: var(--g-800);
        `,
    },
    destructive: {
        icon: css`
            fill: #f33c2f;
        `,
        text: css`
            color: #f33c2f;
        `,
    },
};

interface Props extends ComponentPropsWithoutRef<"div"> {
    items: PopoverItem[];
    dismiss: () => void;
    ui?: LinariaClassName;
}

export const Popover = ({items, dismiss, ui, ...props}: Props) => {
    return (
        <BasePopover dismiss={dismiss}>
            <View
                ui={cx(
                    css`
                        gap: 4px;
                        width: 160px;
                        padding: 8px;
                        position: absolute;
                        border-radius: 10px;
                        background: white;
                        box-shadow: 0 10px 32px -4px rgba(24, 39, 75, 0.1);
                        z-index: 100;
                        ${fadeInAnimationStyle};
                    `,
                    ui,
                )}
                {...props}
            >
                {items.map((item, index) => (
                    <View
                        key={index}
                        flexDirection={"row"}
                        ui={cx(
                            css`
                                gap: 8px;
                                align-items: center;
                                padding: 8px 12px;
                                border-radius: 6px;
                            `,
                            interactionEffectStyles.strong,
                            item.ui,
                        )}
                        onClick={() => {
                            item.onClick();
                            dismiss();
                        }}
                    >
                        <Icon
                            iconType={item.icon}
                            width={20}
                            height={20}
                            ui={itemTypeStyle[item.type ?? "normal"].icon}
                        />
                        <Text type={"caption1"} bold={true} ui={itemTypeStyle[item.type ?? "normal"].text}>
                            {item.text}
                        </Text>
                    </View>
                ))}
            </View>
        </BasePopover>
    );
};
