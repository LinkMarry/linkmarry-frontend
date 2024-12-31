import React, {ForwardedRef, forwardRef, TextareaHTMLAttributes} from 'react';
import styled, {css} from "styled-components";
import colors from "../../../../designsystem/foundation/colors";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";

interface OptionTextFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    width?: number;
}

function OptionTextArea(
    {
        width = 98,
        ...props
    }: OptionTextFieldProps,
    ref: ForwardedRef<HTMLTextAreaElement>
) {
    return (
        <S.textArea ref={ref} width={width} {...props}/>
    );
}

const S = {
    textArea: styled.textarea<{ width: number }>`
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

export default forwardRef(OptionTextArea);