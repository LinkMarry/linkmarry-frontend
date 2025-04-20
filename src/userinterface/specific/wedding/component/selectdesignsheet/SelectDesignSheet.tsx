import React, {Dispatch, SetStateAction} from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import useWeddingDesigns from "@src/hook/useWeddingDesigns";
import {css, RuleSet} from "styled-components";
import TabBar from "@src/userinterface/component/TabBar";
import {WeddingDesignName} from "@src/infrastructure/network/value/WeddingDesign";
import fadeInAnimationStyle from "@src/userinterface/animation/fadeInAnimationStyle";
import useResponsive from "@src/hook/useResponsive";
import View from "@src/userinterface/core/View";
import Text from "@src/userinterface/component/Text";
import BaseDialog from "@src/userinterface/pattern/dialog/BaseDialog";
import {hideScrollBar} from "@src/userinterface/css.util";

interface SelectDesignSheetProps {
    designName: WeddingDesignName;
    onChangeDesignName: (designName: WeddingDesignName) => void;
    ui?: RuleSet;
    dismiss: () => void;
}

const SelectDesignSheet = (props: SelectDesignSheetProps) => {
    const {deviceSize} = useResponsive();

    if (deviceSize === 'mobile') {
        return <MobileSelectDesignSheet {...props}/>;
    }

    return <DesktopSelectDesignSheet {...props}/>;
};

const MobileSelectDesignSheet = ({designName, onChangeDesignName, ui, dismiss}: SelectDesignSheetProps) => {
    const {selectedCategory, setSelectedCategory, categories, selectedWeddingDesigns} = useWeddingDesigns();
    return (
        <BaseDialog dismiss={dismiss}>
            <Column $alignItems={'stretch'} $justifyContent={'flex-end'} $ui={css`
                position: fixed;
                bottom: 0;
                z-index: 100;
                ${ui};
                background: rgba(0, 0, 0, 0.04);
            `}>
                <Column $alignItems={'stretch'} $ui={css`
                    ${fadeInAnimationStyle};
                    height: 80dvh;
                    box-shadow: 0 10px 32px -4px rgba(24, 39, 75, 0.10);
                `}>
                    <Column $alignItems={'stretch'} $flex={1} $gap={16} $ui={css`
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
                        <Column $alignItems={'stretch'} $flex={1} $ui={css`
                            overflow-y: scroll;
                            min-height: 0;
                        `}>
                            <View $ui={css`
                                display: grid;
                                grid-template-columns: repeat(2, 1fr);
                                grid-column-gap: 14px;
                                grid-row-gap: 32px;
                            `}>
                                {selectedWeddingDesigns.map(design => (
                                    <Column key={design.id} $alignItems={'stretch'} $gap={8}>
                                        <View onClick={() => {
                                            onChangeDesignName(design.name);
                                        }} $ui={css`
                                            border-radius: 8px;
                                            object-fit: cover;
                                            aspect-ratio: 9 / 16;
                                            background-image: url("${design.img}");
                                            background-size: cover;
                                            cursor: pointer;
                                        `}/>
                                        <Text type={'p3'} bold={true}>{design.name}</Text>
                                    </Column>
                                ))}
                            </View>
                        </Column>
                    </Column>
                </Column>
            </Column>
        </BaseDialog>
    );
};

const DesktopSelectDesignSheet = ({designName, onChangeDesignName, ui, dismiss}: SelectDesignSheetProps) => {
    const {selectedCategory, setSelectedCategory, categories, selectedWeddingDesigns} = useWeddingDesigns();
    return (
        <Column $alignItems={'stretch'} $gap={12} $ui={css`
            padding: 8px;
            position: fixed;
            bottom: 104px;
            max-width: 316px;
            overflow: hidden;
            background: white;
            border-radius: 10px;
            box-shadow: 0 10px 32px -4px rgba(24, 39, 75, 0.10);
        `}>
            <DesignTabBar
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <Row $gap={14} $alignItems={'stretch'} $ui={css`
                max-height: 152px;
                overflow-x: scroll;
            `}>
                {selectedWeddingDesigns.map(design => (
                    <Column key={design.id} $alignItems={'stretch'} $gap={8} $ui={css`
                        min-width: 64px;
                        ${hideScrollBar};
                    `}>
                        <View onClick={() => {
                            onChangeDesignName(design.name);
                        }} $ui={css`
                            border-radius: 8px;
                            object-fit: cover;
                            aspect-ratio: 9 / 16;
                            background-image: url("${design.img}");
                            background-size: cover;
                            cursor: pointer;
                        `}/>
                        <Text type={'caption2'} bold={true}>{design.name}</Text>
                    </Column>
                ))}
            </Row>
        </Column>
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
