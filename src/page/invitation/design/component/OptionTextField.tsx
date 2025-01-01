import React, {ForwardedRef, forwardRef, HTMLAttributes, InputHTMLAttributes, ReactNode} from 'react';
import styled, {css} from "styled-components";
import colors from "../../../../designsystem/foundation/colors";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";

interface OptionTextFieldProps extends HTMLAttributes<HTMLDivElement> {
    fieldProps?: InputHTMLAttributes<HTMLInputElement>;
    placeholder?: string;
    width?: number;
    leadingContent?: ReactNode;
}

function OptionTextField(
    {
        fieldProps,
        placeholder,
        width = 98,
        leadingContent,
        ...props
    }: OptionTextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
) {
    return (
        <S.container width={width} {...props}>
            {leadingContent}
            <S.textField ref={ref} {...fieldProps} placeholder={placeholder}/>
        </S.container>
    );
}

const S = {
    container: styled.div<{ width: number }>`
        display: flex;
        ${({width}) => css`
            width: ${width}px;
        `};
        height: 44px;
        align-items: center;
        border: 1px solid ${colors.g200};
        background: ${colors.white};
        border-radius: 8px;
        padding-left: 16px;
        padding-right: 16px;
        gap: 12px;
    `,
    textField: styled.input`
        display: flex;
        flex: 1;
        min-width: 0;
        border: none;
        outline: none;
        ${makeText(TextType.p5)};
        align-self: stretch;
    `
}

export default forwardRef(OptionTextField);