import {type ComponentPropsWithoutRef, useState} from 'react';
import Text from "~/userinterface/component/Text.tsx";
import EditorInspectorWrapper from "~/editor/component/inspector/EditorInspectorWrapper.tsx";
import type Binding from "~/shared/Binding.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import SegmentedButton from "~/userinterface/component/SegmentedButton.tsx";
import {
    type WeddingDesignColor,
    isPaperColor,
    weddingDesignDefaultColorList,
    weddingDesignFontSizeList,
    weddingDesignFontSizeMap, weddingDesignPaperColorList
} from "~/infrastructure/network/value/WeddingDesign.ts";
import View from "~/userinterface/core/View.tsx";
import {css, cx} from "@linaria/core";
import Spacer from "~/userinterface/component/Spacer.tsx";
import {type FontFamily, fontFamilyList} from "~/userinterface/foundation/text/TextType.ts";
import Icon from "~/userinterface/foundation/Icon.tsx";
import BasePopover from "~/userinterface/component/BasePopover.tsx";
import {HexColorPicker} from "react-colorful";


const EditorInspectorFontAndStyle = (
    {
        value: {weddingDesign},
        update
    }: Binding<WeddingDto>
) => {
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleColorChanged = (color: WeddingDesignColor) => {
        update(draft => {
            draft.weddingDesign.weddingDesignColor = color;
        })
    };

    return (
        <EditorInspectorWrapper type={'fontAndStyle'} hasDivider={false}>
            <View ui={css`
                display: grid !important;
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
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>폰트 크기</Text>
                <SegmentedButton
                    items={weddingDesignFontSizeList.map(i => weddingDesignFontSizeMap[i].korean)}
                    selectedTab={weddingDesignFontSizeList.indexOf(weddingDesign.weddingDesignFontSize)}
                    onChange={tab => update(draft => {
                        draft.weddingDesign.weddingDesignFontSize = weddingDesignFontSizeList[tab];
                    })}
                />
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>배경 색상</Text>
                <View ui={css`
                    gap: 20px;
                `}>
                    <View ui={css`
                        gap: 4px;
                    `}>
                        <Text type={'caption1'} ui={css`
                            color: var(--g-500);
                        `}>단색</Text>
                        <View ui={css`
                            display: grid !important;
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
                            <View ui={css`
                                align-items: center;
                                justify-content: center;
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
                            </View>
                        </View>
                    </View>
                    <View ui={css`
                        gap: 4px;
                    `}>
                        <Text type={'caption1'} ui={css`
                            color: var(--g-500);
                        `}>페이퍼</Text>
                        <View ui={css`
                            display: grid !important;
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
                    </View>
                </View>
            </View>
        </EditorInspectorWrapper>
    );
};

interface FontItemProps extends ComponentPropsWithoutRef<'div'> {
    fontFamily: FontFamily;
    selected: boolean;
}

const FontItem = ({fontFamily, selected, ...props}: FontItemProps) => {
    return (
        <View ui={cx(
            css`
                border-radius: 6px;
                cursor: pointer;
            `,
            selected ? css`
                outline: 1px solid black;
            ` : undefined
        )} {...props}>
            <View ui={css`
                flex-direction: row !important;
                padding: 2px 0 4px 6px;
                border-bottom: 1px solid var(--g-100);
            `}>
                <Text type={'caption2'} font={fontFamily} bold={true}>{fontFamily}</Text>
                <Spacer/>
            </View>
            <Text type={'p3'} font={fontFamily} ui={css`
                padding: 6px 6px 2px 6px;
            `}>
                특별한 결혼을 위해<br/>링크메리
            </Text>
        </View>
    );
}

interface ColorItemProps extends ComponentPropsWithoutRef<'div'> {
    color: WeddingDesignColor;
    selected: boolean;
}

const ColorItem = ({color, selected, ...props}: ColorItemProps) => {
    const backgroundValue = isPaperColor(color) ? `url("/paper/${color}.png")` : color;
    return (
        <View
            ui={cx(colorItemStyle, selected ? colorItemSelectedStyle : colorItemUnselectedStyle)}
            style={{background: backgroundValue}}
            {...props}
        >
            {selected && (
                <Icon iconType={'CheckLine'} width={20} height={20} ui={css`
                    position: absolute;
                    top: 8px;
                    right: 8px;
                `}/>
            )}
        </View>
    )
};

export default EditorInspectorFontAndStyle;

const colorItemStyle = css`
    aspect-ratio: 1;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
`;

const colorItemSelectedStyle = css`
    outline: 1.5px solid var(--g-800);
`;

const colorItemUnselectedStyle = css`
    outline: 1px solid var(--g-200);
`;
