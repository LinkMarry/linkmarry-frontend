import React, {ComponentPropsWithoutRef, useState} from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import EditorInspectorWrapper from "@src/feature/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/shared/Binding";
import WeddingDto from "@src/infrastructure/network/value/WeddingDto";
import SegmentedButton from "@src/userinterface/component/SegmentedButton";
import {
    backgroundStyle,
    WeddingDesignColor,
    weddingDesignDefaultColorList,
    weddingDesignFontSizeList,
    weddingDesignFontSizeMap, weddingDesignPaperColorList
} from "@src/infrastructure/network/value/WeddingDesign";
import View from "@src/userinterface/core/View";
import {css} from "styled-components";
import Spacer from "@src/userinterface/component/Spacer";
import {FontFamily, fontFamilyList} from "@src/userinterface/foundation/text/TextType";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";
import BasePopover from "@src/userinterface/component/BasePopover";
import {HexColorPicker} from "react-colorful";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorFontAndStyle = (
    {
        value: {weddingDesign},
        update
    }: Props
) => {
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleColorChanged = (color: WeddingDesignColor) => {
        update(draft => {
            draft.weddingDesign.weddingDesignColor = color;
        })
    };

    return (
        <EditorInspectorWrapper type={'fontAndStyle'} hasDivider={false}>
            <View $ui={css`
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 16px;
            `}>
                {fontFamilyList.map((item, index) => (
                    <FontItem
                        key={index}
                        fontFamily={item}
                        selected={item === weddingDesign.weddingDesignFont}
                        onClick={() => update(draft => {
                            draft.weddingDesign.weddingDesignFont = item;
                        })}
                    />
                ))}
            </View>
            <Column $gap={12} $alignItems={'stretch'}>
                <Text type={'p3'} bold={true}>폰트 크기</Text>
                <SegmentedButton
                    items={weddingDesignFontSizeList.map(i => weddingDesignFontSizeMap[i].korean)}
                    selectedTab={weddingDesignFontSizeList.indexOf(weddingDesign.weddingDesignFontSize)}
                    onChange={tab => update(draft => {
                        draft.weddingDesign.weddingDesignFontSize = weddingDesignFontSizeList[tab];
                    })}
                />
            </Column>
            <Column $gap={12} $alignItems={'stretch'}>
                <Text type={'p3'} bold={true}>배경 색상</Text>
                <Column $gap={20} $alignItems={'stretch'}>
                    <Column $gap={4} $alignItems={'stretch'}>
                        <Text type={'caption1'} ui={css`
                            color: var(--g-500);
                        `}>단색</Text>
                        <View $ui={css`
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            gap: 8px;
                        `}>
                            {weddingDesignDefaultColorList.map((color, index) => (
                                <ColorItem
                                    key={index}
                                    color={color}
                                    selected={color === weddingDesign.weddingDesignColor}
                                    onClick={() => update(draft => {
                                        draft.weddingDesign.weddingDesignColor = color;
                                    })}
                                />
                            ))}
                            <Column $alignItems={'center'} $justifyContent={'center'} $ui={css`
                                aspect-ratio: 1;
                                border-radius: 8px;
                                cursor: pointer;
                                outline: 1px solid var(--g-200);
                                position: relative;
                            `} onClick={() => {
                                setShowColorPicker(true);
                            }}>
                                <Text type={'caption1'} ui={css`
                                    color: var(--g-500);
                                `}>직접 선택</Text>
                                {showColorPicker && (
                                    <BasePopover ui={css`
                                        position: absolute;
                                        top: 60px;
                                        right: -12px;
                                        z-index: 2;
                                    `} dismiss={() => setShowColorPicker(false)}>
                                        <HexColorPicker
                                            color={weddingDesign.weddingDesignColor}
                                            onChange={handleColorChanged}
                                        />
                                    </BasePopover>
                                )}
                            </Column>
                        </View>
                    </Column>
                    <Column $gap={4} $alignItems={'stretch'}>
                        <Text type={'caption1'} ui={css`
                            color: var(--g-500);
                        `}>페이퍼</Text>
                        <View $ui={css`
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            gap: 8px;
                        `}>
                            {weddingDesignPaperColorList.map((color, index) => (
                                <ColorItem
                                    key={index}
                                    color={color}
                                    selected={color === weddingDesign.weddingDesignColor}
                                    onClick={() => update(draft => {
                                        draft.weddingDesign.weddingDesignColor = color;
                                    })}
                                />
                            ))}
                        </View>
                    </Column>
                </Column>
            </Column>
        </EditorInspectorWrapper>
    );
};

interface FontItemProps extends ComponentPropsWithoutRef<'div'> {
    fontFamily: FontFamily;
    selected: boolean;
}

const FontItem = ({fontFamily, selected, ...props}: FontItemProps) => {
    return (
        <Column $alignItems={'stretch'} $ui={css`
            border-radius: 6px;
            cursor: pointer;
            ${selected && css`
                outline: 1px solid black;
            `};
        `} {...props}>
            <Row $ui={css`
                padding: 2px 0 4px 6px;
                border-bottom: 1px solid var(--g-100);
            `}>
                <Text type={'caption2'} font={fontFamily} bold={true}>{fontFamily}</Text>
                <Spacer/>
            </Row>
            <Text type={'p3'} font={fontFamily} ui={css`
                padding: 6px 6px 2px 6px;
            `}>
                특별한 결혼을 위해<br/>링크메리
            </Text>
        </Column>
    );
}

interface ColorItemProps extends ComponentPropsWithoutRef<'div'> {
    color: WeddingDesignColor;
    selected: boolean;
}

const ColorItem = ({color, selected, ...props}: ColorItemProps) => {
    return (
        <View $ui={css`
            ${backgroundStyle(color)};
            aspect-ratio: 1;
            border-radius: 8px;
            cursor: pointer;
            ${selected ? css`
                outline: 1.5px solid var(--g-800);
            ` : css`
                outline: 1px solid var(--g-200);
            `};
            position: relative;
        `} {...props}>
            {selected && (
                <Icon iconType={IconType.CheckLine} width={20} height={20} ui={css`
                    position: absolute;
                    top: 8px;
                    right: 8px;
                `}/>
            )}
        </View>
    )
};

export default EditorInspectorFontAndStyle;
