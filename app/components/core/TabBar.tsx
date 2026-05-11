import {Text, View} from "~/components";
import {type ComponentPropsWithoutRef} from "react";

import {css, cx, type LinariaClassName} from "@linaria/core";
import {hideScrollBarStyle, interactionEffectStyles} from "~/style/common.ts";

export const TabBar = ({
    items,
    selectedTab,
    onChange,
    ui,
}: {
    items: string[];
    selectedTab: number;
    onChange: (tab: number) => void;
    ui?: LinariaClassName;
}) => {
    return (
        <View
            flexDirection={"row"}
            ui={cx(
                hideScrollBarStyle,
                css`
                    gap: 8px;
                    overflow-x: scroll;
                `,
                ui,
            )}
        >
            {items.map((item, index) => (
                <Item
                    key={index}
                    selected={index === selectedTab}
                    text={item}
                    onClick={() => {
                        onChange(index);
                    }}
                />
            ))}
        </View>
    );
};

const Item = ({
    selected,
    text,
    ...props
}: {
    selected: boolean;
    text: string;
} & ComponentPropsWithoutRef<"div">) => {
    return (
        <View
            ui={cx(
                css`
                    align-items: center;
                    min-width: 68px;
                    padding: 10px 0;
                    border-radius: 6px;
                    position: relative;
                `,
                interactionEffectStyles.strong,
            )}
            {...props}
        >
            <Text
                type={"p3"}
                bold={true}
                ui={
                    selected
                        ? css`
                              color: var(--g-800);
                          `
                        : css`
                              color: var(--g-500);
                          `
                }
            >
                {text}
            </Text>
            {selected && (
                <View
                    ui={css`
                        position: absolute;
                        width: 29px;
                        height: 2px;
                        border-radius: 10px;
                        background: var(--g-800);
                        bottom: 0;
                    `}
                />
            )}
        </View>
    );
};
