import {type Dispatch, type SetStateAction} from 'react';
import useWeddingDesigns from "~/hook/useWeddingDesigns.ts";
import TabBar from "~/userinterface/component/TabBar";
import {type WeddingDesignName} from "~/infrastructure/network/value/WeddingDesign";
import fadeInAnimationStyle from "~/userinterface/animation/fadeInAnimationStyle";
import {mobileStyle, notMobileStyle} from "~/hook/ResponsiveSwitch.tsx";
import View from "~/userinterface/core/View.tsx";
import Text from "~/userinterface/component/Text";
import BaseDialog from "~/userinterface/pattern/dialog/BaseDialog";
import {hideScrollBarStyle} from "~/userinterface/css.util";
import {css, cx, type LinariaClassName} from "@linaria/core";
import type WeddingDesignPreset from "~/infrastructure/network/value/WeddingDesignPreset.ts";
import useResponsive from "~/hook/useResponsive.ts";

interface SelectDesignSheetProps {
    designName: WeddingDesignName;
    onChangeDesignName: (designName: WeddingDesignName) => void;
    dismiss: () => void;
    weddingDesigns: WeddingDesignPreset[];
    ui?: LinariaClassName;
}

const SelectDesignSheet = (props: SelectDesignSheetProps) => {
    const {deviceSize} = useResponsive();

    if (deviceSize === 'mobile') {
        return <MobileSelectDesignSheet {...props}/>;
    }

    return <NotMobileSelectDesignSheet {...props}/>;
};

const MobileSelectDesignSheet = ({onChangeDesignName, dismiss, weddingDesigns, ui}: SelectDesignSheetProps) => {
    const {
        selectedCategory,
        setSelectedCategory,
        categories,
        selectedWeddingDesigns
    } = useWeddingDesigns(weddingDesigns);
    return (
        <BaseDialog dismiss={dismiss} ui={mobileStyle}>
            <View ui={cx(
                css`
                    justify-content: flex-end;
                    position: fixed;
                    bottom: 0;
                    z-index: 100;
                    background: rgba(0, 0, 0, 0.04);
                `,
                ui
            )}>
                <View ui={cx(
                    css`
                        height: 80dvh;
                        box-shadow: 0 10px 32px -4px rgba(24, 39, 75, 0.10);
                    `,
                    fadeInAnimationStyle
                )}>
                    <View ui={css`
                        flex: 1;
                        gap: 16px;
                        padding: 8px 16px 0 16px;
                        background: white;
                        border-radius: 12px 12px 0 0;
                        min-height: 0;
                    `}>
                        <DesignTabBar
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                        <View ui={css`
                            flex: 1;
                            overflow-y: scroll;
                            min-height: 0;
                        `}>
                            <View ui={css`
                                display: grid !important;
                                grid-template-columns: repeat(2, 1fr);
                                grid-column-gap: 14px;
                                grid-row-gap: 32px;
                            `}>
                                {selectedWeddingDesigns.map(design => (
                                    <View key={design.id} ui={css`
                                        gap: 8px;
                                    `}>
                                        <View onClick={() => {
                                            onChangeDesignName(design.name);
                                        }} ui={css`
                                            border-radius: 8px;
                                            object-fit: cover;
                                            aspect-ratio: 9 / 16;
                                            background-size: cover;
                                            cursor: pointer;
                                        `} style={{
                                            backgroundImage: `url("${design.img}")`
                                        }}/>
                                        <Text type={'p3'} bold={true}>{design.name}</Text>
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
    const {
        selectedCategory,
        setSelectedCategory,
        categories,
        selectedWeddingDesigns
    } = useWeddingDesigns(weddingDesigns);
    return (
        <View ui={cx(
            css`
                gap: 12px;
                padding: 8px;
                position: fixed;
                bottom: 104px;
                max-width: 316px;
                overflow: hidden;
                background: white;
                border-radius: 10px;
                box-shadow: 0 10px 32px -4px rgba(24, 39, 75, 0.10);
            `,
            notMobileStyle
        )}>
            <DesignTabBar
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <View ui={cx(
                css`
                    flex-direction: row !important;
                    gap: 14px;
                    overflow-x: scroll;
                `,
                hideScrollBarStyle
            )}>
                {selectedWeddingDesigns.map(design => (
                    <View key={design.id} ui={cx(
                        css`
                            min-width: 80px;
                            gap: 8px;
                            overflow: hidden !important;
                        `,
                        hideScrollBarStyle
                    )}>
                        <View onClick={() => {
                            onChangeDesignName(design.name);
                        }} ui={css`
                            border-radius: 8px;
                            object-fit: cover;
                            aspect-ratio: 9 / 16;
                            background-size: cover;
                            cursor: pointer;
                        `} style={{
                            backgroundImage: `url("${design.img}")`
                        }}/>
                        <Text type={'caption2'} bold={true}>{design.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const DesignTabBar = ({categories, selectedCategory, setSelectedCategory}: {
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

export default SelectDesignSheet;
