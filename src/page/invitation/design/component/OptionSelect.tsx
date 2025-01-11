import React, {ForwardedRef, forwardRef, SelectHTMLAttributes} from 'react';
import styled, {css} from "styled-components";
import colors from "@designsystem/foundation/colors";
import makeText from "@designsystem/foundation/text/textType";
import Icon, {IconType} from "@designsystem/foundation/icon";

interface OptionTextFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    items: string[],
    width?: number;
}

function OptionSelect(
    {
        items,
        width = 98,
        ...props
    }: OptionTextFieldProps,
    ref: ForwardedRef<HTMLSelectElement>
) {
    return (
        <S.wrapper width={width}>
            <S.select ref={ref} {...props}>
                {items.map((item, index) => (
                    <S.option key={index} value={item}>{item}</S.option>
                ))}
            </S.select>
            <Icon type={IconType.ExpandArrow} size={20} tint={colors.g400} style={{rotate: '-90deg'}}/>
        </S.wrapper>
    );
}

const S = {
    wrapper: styled.div<{ width: number }>`
        display: flex;
        position: relative;
        ${({width}) => css`
            width: ${width}px;
        `}
        align-items: center;
        padding-right: 16px;
        gap: 4px;
        border: 1px solid ${colors.g200};
        border-radius: 8px;
        background: ${colors.white};
        overflow: hidden;
    `,
    select: styled.select`
        display: flex;
        min-width: 0;
        height: 44px;
        padding: 12px 16px;
        align-items: center;
        flex: 1;
        text-overflow: ellipsis;
        border: none;
        outline: none;
        ${makeText('p5')};
        line-height: calc(44px / 2);
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    `,
    option: styled.option`
    `
}

export default forwardRef(OptionSelect);