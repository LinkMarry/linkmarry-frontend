import React, {CSSProperties} from 'react';
import styled from "styled-components";
import Icon, {IconType} from "../foundation/icon";
import colors from "../foundation/colors";
import makeText, {TextType} from "../foundation/text/textType";

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    rounded?: boolean;
    style?: CSSProperties;
}

function Checkbox(
    {
        checked,
        onChange,
        label,
        rounded = false,
        style
    }: CheckboxProps,
) {
    return (
        <S.container style={style}>
            <S.checkbox
                style={{
                    borderRadius: rounded ? 10 : 4,
                    border: checked ? undefined : `1px solid ${colors.g300}`,
                    background: checked ? colors.g600 : colors.transparent,
                }}
                onClick={() => onChange(!checked)}
            >
                {checked && <Icon type={IconType.CheckLine} tint={colors.white} size={18}/>}
            </S.checkbox>
            {label && <S.title>{label}</S.title>}
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: inline-flex;
        align-items: center;
        width: fit-content;
        gap: 8px;
    `,
    checkbox: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;

        cursor: pointer;
    `,
    title: styled.span`
        display: inline-flex;

        ${makeText(TextType.p4)};
        color: ${colors.black};
    `
}

export default Checkbox;