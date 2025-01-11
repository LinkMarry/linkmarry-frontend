import React, {
    ForwardedRef,
    forwardRef,
    HTMLAttributes,
    HTMLInputTypeAttribute,
    InputHTMLAttributes,
    RefObject, useEffect, useRef, useState,
} from 'react';
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import makeText from "@designsystem/foundation/text/textType";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Text from "@designsystem/component/text";

interface OptionFieldProps extends HTMLAttributes<HTMLDivElement> {
    fieldProps?: InputHTMLAttributes<HTMLInputElement>;
    leadingIcon: IconType;
    type?: HTMLInputTypeAttribute | undefined;
}

function OptionField(
    {
        fieldProps,
        leadingIcon,
        type,
        ...props
    }: OptionFieldProps
) {
    const fieldRef = useRef<HTMLInputElement>(null);

    return (
        <S.field onClick={() => {
            fieldRef.current?.showPicker();
        }} {...props}>
            <S.fakeInput
                {...fieldProps}
                ref={fieldRef}
                type={type}
            />
            <Icon tint={colors.g600} size={20} type={leadingIcon}/>
            <Text type={'p5'}>{fieldProps?.value?.toString() ?? ''}</Text>
        </S.field>
    );
}

const S = {
    field: styled.div`
        display: flex;
        position: relative;
        height: 44px;
        border-radius: 8px;
        width: 264px;
        padding-left: 16px;
        padding-right: 16px;
        align-items: center;
        gap: 8px;
        ${makeText('p5')};
        outline: none;
        border: 1px solid ${colors.g200};
        background: ${colors.white};
        cursor: pointer;
    `,
    fakeInput: styled.input`
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        visibility: hidden;
    `
}

export default OptionField;