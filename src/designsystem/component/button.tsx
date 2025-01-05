import styled, {css} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/icon";
import makeText, {TextType} from "@designsystem/foundation/text/textType";
import colors from "@designsystem/foundation/colors";
import {ButtonHTMLAttributes, CSSProperties} from "react";

export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonRole = 'primary' | 'secondary' | 'assistive';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    size?: ButtonSize;
    role?: ButtonRole;
    leadingIcon?: IconType;
    trailingIcon?: IconType;
    enabled?: boolean;
}

export default function Button(
    {
        text,
        size = 'large',
        role = 'primary',
        leadingIcon,
        trailingIcon,
        enabled = true,
        ...props
    }: ButtonProps
) {
    let background: string, foreground: string;
    switch (role) {
        case 'primary':
            background = colors.p700;
            foreground = colors.p100;
            break;
        case 'secondary':
            background = colors.p100;
            foreground = colors.p800;
            break;
        case 'assistive':
            background = colors.g100;
            foreground = colors.g600;
            break;
    }

    let borderRadius: number,
        contentPadding: CSSProperties['padding'],
        iconSize: number,
        height: number,
        textType: TextType,
        gap: number;

    switch (size) {
        case 'large':
            borderRadius = 12;
            contentPadding = '10px 20px';
            iconSize = 20;
            height = 46;
            textType = TextType.p4;
            gap = 6;
            break;
        case 'medium':
            borderRadius = 10;
            contentPadding = '8px 16px';
            iconSize = 18;
            height = 37;
            textType = TextType.btn1;
            gap = 5;
            break;
        case 'small':
            borderRadius = 8;
            contentPadding = '6px 12px';
            iconSize = 16;
            height = 29;
            textType = TextType.caption2;
            gap = 4;
            break;
    }

    return (
        <S.container
            opacity={enabled ? 1 : 0.5}
            background={background}
            color={foreground}
            $borderRadius={borderRadius}
            padding={contentPadding}
            height={height}
            gap={gap}
            disabled={!enabled}
            $textType={textType}
            {...props}
        >
            {leadingIcon ? (
                <Icon type={leadingIcon} tint={foreground} size={iconSize}/>
            ) : trailingIcon ? <div style={{width: iconSize}}></div> : <></>}
            {text}
            {trailingIcon ? (
                <Icon type={trailingIcon} tint={foreground} size={iconSize}/>
            ) : leadingIcon ? <div style={{width: iconSize}}></div> : <></>}
        </S.container>
    )
}

const S = {
    container: styled.button<{
        $textType: TextType,
        opacity: CSSProperties['opacity'],
        background: CSSProperties['background'],
        color: CSSProperties['color'],
        $borderRadius: number,
        padding: CSSProperties['padding'],
        height: number,
        gap: number,
    }>`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
        word-break: keep-all;
        white-space: nowrap;
        ${({$textType, opacity, background, color, $borderRadius, padding, height, gap}) => css`
            ${makeText($textType)};
            opacity: ${opacity};
            background: ${background};
            color: ${color};
            border-radius: ${$borderRadius}px;
            padding: ${padding};
            height: ${height}px;
            gap: ${gap}px;
        `};

        &:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        &:enabled {
            cursor: pointer;
            
            &:active {
                scale: 0.96;
            }

            &:hover {
                opacity: 0.5;
            }
        }


        transition: 0.1s scale ease-in-out;
    `
}