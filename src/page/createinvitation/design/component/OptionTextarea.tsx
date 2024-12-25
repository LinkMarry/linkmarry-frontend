import React, {TextareaHTMLAttributes} from 'react';
import styled, {css} from "styled-components";
import colors from "../../../../designsystem/foundation/colors";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";

interface OptionTextFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    width?: number;
}

function OptionTextarea(
    {
        width = 98,
        ...props
    }: OptionTextFieldProps
) {
    return (
        <S.textarea width={width} {...props}/>
    );
}

const S = {
    textarea: styled.textarea<{ width: number }>`
        display: flex;
        min-height: 100px;
        border: 1px solid ${colors.g200};
        background: ${colors.white};
        border-radius: 8px;
        ${({width}) => css`
            width: ${width}px;
        `}
        outline: none;
        ${makeText(TextType.p5)};
        resize: vertical;
        padding: 12px 16px;
    `
}

export default OptionTextarea;