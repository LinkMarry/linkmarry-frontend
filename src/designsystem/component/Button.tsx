import styled, {css, RuleSet} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/icon";
import makeText, {TextType} from "@designsystem/foundation/text/TextType";
import {ComponentPropsWithRef, CSSProperties, ForwardedRef, forwardRef} from "react";

export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonRole = 'primary' | 'secondary' | 'assistive';

export interface Props extends ComponentPropsWithRef<'button'> {
    text: string;
    size?: ButtonSize;
    role?: ButtonRole;
    leadingIcon?: IconType;
    trailingIcon?: IconType;
    enabled?: boolean;
    customStyle?: RuleSet;
}

function Button(
    {
        text,
        size = 'large',
        role = 'primary',
        leadingIcon,
        trailingIcon,
        enabled = true,
        customStyle,
        ...props
    }: Props,
    ref: ForwardedRef<HTMLButtonElement>
) {
    let background: string, foreground: string;
    switch (role) {
        case 'primary':
            background = 'var(--p-800)';
            foreground = 'var(--p-100)';
            break;
        case 'secondary':
            background = 'var(--p-100)';
            foreground = 'var(--p-800)';
            break;
        case 'assistive':
            background = 'var(--g-100)';
            foreground = 'var(--g-600)';
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
            textType = 'p4';
            gap = 6;
            break;
        case 'medium':
            borderRadius = 10;
            contentPadding = '8px 16px';
            iconSize = 18;
            height = 37;
            textType = 'btn1';
            gap = 5;
            break;
        case 'small':
            borderRadius = 8;
            contentPadding = '6px 12px';
            iconSize = 16;
            height = 29;
            textType = 'caption2';
            gap = 4;
            break;
    }

    return (
        <ButtonStyle
            ref={ref}
            opacity={enabled ? 1 : 0.5}
            background={background}
            color={foreground}
            $borderRadius={borderRadius}
            padding={contentPadding}
            height={height}
            gap={gap}
            disabled={!enabled}
            $textType={textType}
            $customStyle={customStyle}
            {...props}
        >
            {leadingIcon ? (
                <Icon iconType={leadingIcon} size={iconSize} customStyle={css`
                    fill: ${foreground};
                `}/>
            ) : trailingIcon ? <div style={{width: iconSize}}></div> : <></>}
            {text}
            {trailingIcon ? (
                <Icon iconType={trailingIcon} size={iconSize} customStyle={css`
                    fill: ${foreground};
                `}/>
            ) : leadingIcon ? <div style={{width: iconSize}}></div> : <></>}
        </ButtonStyle>
    )
}

const ButtonStyle = styled.button<{
    $textType: TextType;
    opacity: CSSProperties['opacity'];
    background: CSSProperties['background'];
    color: CSSProperties['color'];
    $borderRadius: number;
    padding: CSSProperties['padding'];
    height: number;
    gap: number;
    $customStyle?: RuleSet;
}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    word-break: keep-all;
    white-space: nowrap;
    ${({$textType, opacity, background, color, $borderRadius, padding, height, gap, $customStyle}) => css`
        ${makeText($textType)};
        opacity: ${opacity};
        background: ${background};
        color: ${color};
        border-radius: ${$borderRadius}px;
        padding: ${padding};
        height: ${height}px;
        gap: ${gap}px;
    ${$customStyle};
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
`;

export default forwardRef(Button);