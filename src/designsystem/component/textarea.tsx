import React, {ForwardedRef, forwardRef, TextareaHTMLAttributes} from 'react';
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import makeText, {TextType} from "@designsystem/foundation/text/textType";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function TextArea(
    {
        ...props
    }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
) {
    return (
        <S.textArea ref={ref} {...props}/>
    );
}

const S = {
    textArea: styled.textarea`
        display: flex;
        min-height: 100px;
        border: 1px solid ${colors.g200};
        background: ${colors.white};
        border-radius: 8px;
        outline: none;
        ${makeText(TextType.p5)};
        resize: vertical;
        padding: 12px 16px;
    `
}

export default forwardRef(TextArea);