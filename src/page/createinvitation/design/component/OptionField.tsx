import React, {ForwardedRef, forwardRef, HTMLAttributes, HTMLInputTypeAttribute, RefObject, useState} from 'react';
import styled from "styled-components";
import colors from "../../../../designsystem/foundation/colors";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";
import Icon, {IconType} from "../../../../designsystem/foundation/icon";

interface OptionFieldProps extends HTMLAttributes<HTMLDivElement> {
    leadingIcon: IconType;
    type?: HTMLInputTypeAttribute | undefined;
}

function OptionField(
    {
        leadingIcon,
        type,
        ...props
    }: OptionFieldProps,
    ref: ForwardedRef<HTMLInputElement>
) {
    const [formattedValue, setFormattedValue] = useState<string>();
    const handleInputChange = () => {
        const current = (ref as RefObject<HTMLInputElement>).current;
        if (!ref || !current?.value) return;

        const value = current.value!;
        let formatted = value;

        if (type === 'date') {
            const date = new Date(value);
            formatted = new Intl.DateTimeFormat('ko-KR', {
                dateStyle: 'full',
            }).format(date); // e.g., "2024년 12월 8일 수요일"
        } else if (type === 'time') {
            const [hour, minute] = value.split(':');
            const date = new Date();
            date.setHours(Number(hour), Number(minute));
            formatted = new Intl.DateTimeFormat('ko-KR', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            }).format(date); // e.g., "오후 1시 30분"
        }

        setFormattedValue(formatted);
    };
    return (
        <S.field onClick={() => {
            (ref as RefObject<HTMLInputElement>).current?.showPicker();
        }} {...props}>
            <S.fakeInput
                type={type}
                ref={ref}
                onChange={handleInputChange}
            />
            <Icon tint={colors.g600} size={20} type={leadingIcon}/>
            <S.label>{formattedValue}</S.label>
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
        ${makeText(TextType.p5)};
        outline: none;
        border: 1px solid ${colors.g200};
        background: ${colors.white};
        cursor: pointer;
    `,
    label: styled.span`
        display: flex;
        ${makeText(TextType.p5)};
        color: ${colors.black};
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

export default forwardRef(OptionField);