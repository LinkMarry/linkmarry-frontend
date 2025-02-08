import React, {
    ComponentPropsWithRef,
    ForwardedRef,
    forwardRef,
    HTMLAttributes,
    InputHTMLAttributes,
    ReactNode
} from 'react';
import styled, {css} from "styled-components";
import makeText from "@designsystem/foundation/text/TextType";

interface OptionTextFieldProps extends ComponentPropsWithRef<'div'> {
    fieldProps?: InputHTMLAttributes<HTMLInputElement>;
    placeholder?: string;
    width?: number;
    autoWidth?: boolean;
    leadingContent?: ReactNode;
}

function OptionTextField(
    {
        fieldProps,
        placeholder,
        width,
        autoWidth = true,
        leadingContent,
        ...props
    }: OptionTextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
) {
    const adjustedWidth = autoWidth ? (width ?? 98) : width;
    return (
        <S.container width={adjustedWidth} {...props}>
            {leadingContent}
            <S.textField ref={ref} {...fieldProps} placeholder={placeholder}/>
        </S.container>
    );
}

const S = {
    container: styled.div<{ width?: number }>`
        display: flex;
        ${({width}) => width && css`
            width: ${width}px;
        `};
        height: 44px;
        align-items: center;
        border: 1px solid var(--g-200);
        background: white;
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
        ${makeText('p5')};
        align-self: stretch;
    `
}

export default forwardRef(OptionTextField);