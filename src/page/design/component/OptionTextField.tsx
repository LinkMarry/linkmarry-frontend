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
import {Row} from "@designsystem/component/core/FlexLayout";
import CustomStyle from "@designsystem/component/core/CustomStyle";

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
        <Row $customStyle={css`
            width: ${adjustedWidth}px;
            height: 44px;
            align-items: center;
            border: 1px solid var(--g-200);
            background: white;
            border-radius: 8px;
            padding-left: 16px;
            padding-right: 16px;
            gap: 12px;
        `} {...props}>
            {leadingContent}
            <CustomStyle as={'input'} ref={ref} {...fieldProps} $customStyle={css`
                display: flex;
                flex: 1;
                min-width: 0;
                border: none;
                outline: none;
                align-self: stretch;

                &:disabled {
                    background: none;
                    color: black;
                }
            `} placeholder={placeholder}/>
        </Row>
    );
}

export default forwardRef(OptionTextField);
