import React, {InputHTMLAttributes, ReactNode} from 'react';
import styled, {css} from "styled-components";
import colors from "../../../../designsystem/foundation/colors";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";

interface OptionTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    width?: number;
    leadingContent?: ReactNode;
}

function OptionTextField(
    {
        width = 98,
        leadingContent,
        ...props
    }: OptionTextFieldProps
) {
    return (
        <S.container width={width}>
            {leadingContent}
            <S.textField {...props}/>
        </S.container>
    );
}

const S = {
    container: styled.div<{ width: number }>`
        display: flex;
        height: 44px;
        align-items: center;
        border: 1px solid ${colors.g200};
        background: ${colors.white};
        border-radius: 8px;
        padding-left: 16px;
        padding-right: 16px;
        gap: 12px;
        ${({width}) => css`
            width: ${width}px;
        `};
        overflow: hidden;
    `,
    textField: styled.input`
        display: flex;
        flex: 1;
        border: none;
        outline: none;
        ${makeText(TextType.p5)};
        align-self: stretch;
    `
}

export default OptionTextField;