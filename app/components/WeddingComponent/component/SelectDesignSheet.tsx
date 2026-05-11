import {TabBar, View, Text, BaseDialog} from "~/components";
import {type Dispatch, type SetStateAction} from "react";
import useWeddingDesigns from "~/hook/useWeddingDesigns.ts";

import type {WeddingDesignName, WeddingDesignPreset} from "~/domain";
import {fadeInAnimationStyle} from "~/style/animation";
import {mobileStyle, notMobileStyle} from "~/style/responsive";

import {css, cx, type LinariaClassName} from "@linaria/core";
import useResponsive from "~/hook/useResponsive.ts";
import {hideScrollBarStyle} from "~/style/common.ts";

interface SelectDesignSheetProps {
    show: boolean;
    designName: WeddingDesignName;
    onChangeDesignName: (designName: WeddingDesignName) => void;
    dismiss: () => void;
    weddingDesigns: WeddingDesignPreset[];
    ui?: LinariaClassName;
}

export const SelectDesignSheet = (props: SelectDesignSheetProps) => {
    const {deviceSize} = useResponsive();

    if (!props.show && deviceSize === "mobile") {
        return null;
    }

    if (deviceSize === "mobile") {
        return <MobileSelectDesignSheet {...props} />;
    }

    if (!props.show) {
        return null;
    }

    return <NotMobileSelectDesignSheet {...props} />;
};

const MobileSelectDesignSheet = ({show, onChangeDesignName, dismiss, weddingDesigns, ui}: SelectDesignSheetProps) => {
    const {selectedCategory, setSelectedCategory, categories, selectedWeddingDesigns} =
        useWeddingDesigns(weddingDesigns);
    return (
        <BaseDialog show={show} dismiss={dismiss} ui={mobileStyle}>
            <View
                ui={cx(
                    css`
                        justify-content: flex-end;
                        position: fixed;
                        bottom: 0;
                        z-index: 100;
                        background: rgba(0, 0, 0, 0.04);
                    `,
                    ui,
                )}
            >
                <View
                    ui={cx(
                        css`
                            height: 80dvh;
                            box-shadow: 0 10px 32px -4px rgba(24, 39, 75, 0.1);
                        `,
                        fadeInAnimationStyle,
                    )}
                >
                    <View
                        ui={css`
                            flex: 1;
                            gap: 16px;
                            padding: 8px 16px 0 16px;
                            background: white;
                            border-radius: 12px 12px 0 0;
                            min-height: 0;
                        `}
                    >
                        <DesignTabBar
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                        <View
                            ui={css`
                                flex: 1;
                                overflow-y: scroll;
                                min-height: 0;
                            `}
                        >
                            <View
                                ui={css`
                                    display: grid !important;
                                    grid-template-columns: repeat(2, 1fr);
                                    grid-column-gap: 14px;
                                    grid-row-gap: 32px;
                                `}
                            >
                                {selectedWeddingDesigns.map(design => (
                                    <View
                                        key={design.id}
                                        ui={css`
                                            gap: 8px;
                                        `}
                                    >
                                        <View
                                            onClick={() => {
                                                onChangeDesignName(design.name);
                                            }}
                                            ui={css`
                                                border-radius: 8px;
                                                object-fit: cover;
                                                aspect-ratio: 9 / 16;
                                                background-size: cover;
                                                cursor: pointer;
                                            `}
                                            style={{
                                                backgroundImage: `url("${design.img}")`,
                                            }}
                                        />
                                        <Text type={"p3"} bold={true}>
                                            {design.name}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </BaseDialog>
    );
};

const NotMobileSelectDesignSheet = ({onChangeDesignName, weddingDesigns}: SelectDesignSheetProps) => {
    const {selectedCategory, setSelectedCategory, categories, selectedWeddingDesigns} =
        useWeddingDesigns(weddingDesigns);
    return (
        <View
            ui={cx(
                css`
                    gap: 12px;
                    padding: 8px;
                    position: fixed;
                    bottom: 104px;
                    max-width: 316px;
                    overflow: hidden;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 10px 32px -4px rgba(24, 39, 75, 0.1);
                `,
                notMobileStyle,
            )}
        >
            <DesignTabBar
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <View
                flexDirection={"row"}
                ui={cx(
                    css`
                        gap: 14px;
                        overflow-x: scroll;
                    `,
                    hideScrollBarStyle,
                )}
            >
                {selectedWeddingDesigns.map(design => (
                    <View
                        key={design.id}
                        ui={cx(
                            css`
                                min-width: 80px;
                                gap: 8px;
                                overflow: hidden !important;
                            `,
                            hideScrollBarStyle,
                        )}
                    >
                        <View
                            onClick={() => {
                                onChangeDesignName(design.name);
                            }}
                            ui={css`
                                border-radius: 8px;
                                object-fit: cover;
                                aspect-ratio: 9 / 16;
                                background-size: cover;
                                background-position: center;
                                cursor: pointer;
                            `}
                            style={{
                                backgroundImage: `url("${design.img}")`,
                            }}
                        />
                        <Text type={"caption2"} bold={true}>
                            {design.name}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const DesignTabBar = ({
    categories,
    selectedCategory,
    setSelectedCategory,
}: {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
}) => {
    return (
        <TabBar
            items={categories}
            selectedTab={categories.indexOf(selectedCategory!)}
            onChange={tab => {
                setSelectedCategory(categories[tab]);
            }}
            ui={css`
                flex-shrink: 0;
            `}
        />
    );
};
