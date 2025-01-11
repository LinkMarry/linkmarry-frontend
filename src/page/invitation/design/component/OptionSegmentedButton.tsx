import React, {HTMLAttributes} from 'react';
import styled, {css} from "styled-components";
import colors from "@designsystem/foundation/colors";
import makeText, {TextType} from "@designsystem/foundation/text/textType";
import {Row} from "@designsystem/component/flexLayout";

interface OptionSegmentedButtonProps extends HTMLAttributes<HTMLDivElement> {
    selectedIndex?: number;
    items: string[];
    onClickItem: (index: number) => void;
}

function OptionSegmentedButton(
    {
        selectedIndex,
        items,
        onClickItem,
        ...props
    }: OptionSegmentedButtonProps
) {
    return (
        <Row gap={8} {...props}>
            {items.map((item, index) => (
                <S.segmentedButton key={index} onClick={() => {
                    onClickItem(index);
                }} selected={index === selectedIndex}>{item}</S.segmentedButton>
            ))}
        </Row>
    );
}

const S = {
    segmentedButton: styled.button<{ selected: boolean; }>`
        height: 44px;
        border-radius: 8px;
        background: ${colors.white};
        cursor: pointer;
        flex: 1;
        ${({selected}) => selected ? css`
            border: 2px solid ${colors.p800};
            color: ${colors.p800};
            ${makeText(TextType.p4)};
        ` : css`
            border: 2px solid ${colors.g200};
            color: ${colors.g400};
            ${makeText(TextType.p5)};
        `}
    `,
}

export default OptionSegmentedButton;