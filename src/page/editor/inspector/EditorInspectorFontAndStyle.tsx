import React, {ComponentPropsWithoutRef} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import {
    WeddingDesignColor,
    weddingDesignColorList,
    weddingDesignFontSizeList,
    weddingDesignFontSizeMap
} from "@remote/value/WeddingDesign";
import View from "@designsystem/core/View";
import {css} from "styled-components";
import Spacer from "@designsystem/component/Spacer";
import {FontFamily, fontFamilyList} from "@designsystem/foundation/text/TextType";
import Icon, {IconType} from "@designsystem/foundation/Icon";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorFontAndStyle = (
    {
        value: {weddingDesign},
        update
    }: Props
) => {
    return (
        <EditorInspectorWrapper type={'fontAndStyle'} hasDivider={false}>
            <View $ui={css`
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 16px;
            `}>
                {fontFamilyList.map((item, index) => (
                    <FontItem fontFamily={item}/>
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
                            {weddingDesignColorList.map((color, index) => (
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
                    <Column $gap={4} $alignItems={'stretch'}>
                        <Text type={'caption1'} ui={css`
                            color: var(--g-500);
                        `}>페이퍼</Text>
                    </Column>
                </Column>
            </Column>
        </EditorInspectorWrapper>
    );
};

interface FontItemProps {
    fontFamily: FontFamily;
}

const FontItem = ({fontFamily}: FontItemProps) => {
    return (
        <Column $alignItems={'stretch'}>
            <Row $ui={css`
                border-bottom: 1px solid var(--g-100);
            `}>
                <Text type={'caption2'} font={fontFamily} bold={true}>{fontFamily}</Text>
                <Spacer/>
            </Row>
            <Text type={'p3'} font={fontFamily} ui={css`
                padding-top: 6px;
            `}>
                특별한 결혼을 위해<br/>링크메리
            </Text>
        </Column>
    )
}

interface ColorItemProps extends ComponentPropsWithoutRef<'div'> {
    color: WeddingDesignColor;
    selected: boolean;
}

const ColorItem = ({color, selected, ...props}: ColorItemProps) => {
    return (
        <View $ui={css`
            background: ${color};
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
