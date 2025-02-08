import React, {
    ComponentPropsWithRef,
    HTMLAttributes,
    HTMLInputTypeAttribute,
    InputHTMLAttributes,
    useRef,
} from 'react';
import styled, {css} from "styled-components";
import makeText from "@designsystem/foundation/text/TextType";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Text from "@designsystem/component/Text";

interface OptionFieldProps extends ComponentPropsWithRef<'div'> {
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
            <Icon size={20} iconType={leadingIcon} customStyle={css`
                fill: var(--g-600);
            `}/>
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
        border: 1px solid var(--g-200);
        background: white;
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