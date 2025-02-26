import styled, {css, RuleSet} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import makeText, {TextType} from "@designsystem/foundation/text/TextType";
import {ComponentPropsWithRef, CSSProperties, ForwardedRef, forwardRef} from "react";

export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonType = 'filled' | 'outlined' | 'tonal';

export interface Props extends ComponentPropsWithRef<'button'> {
    text: string;
    size?: ButtonSize;
    buttonType?: ButtonType;
    leadingIcon?: IconType;
    trailingIcon?: IconType;
    enabled?: boolean;
    customStyle?: RuleSet;
}

function Button(
    {
        text,
        size = 'large',
        buttonType = 'filled',
        leadingIcon,
        trailingIcon,
        enabled = true,
        customStyle,
        ...props
    }: Props,
    ref: ForwardedRef<HTMLButtonElement>
) {
    const iconColor = buttonTypeToStyleRecord[buttonType].color;

    const iconSizeRecord: Record<ButtonSize, number> = {
        large: 18,
        medium: 16,
        small: 14
    };
    const iconSize = iconSizeRecord[size];

    return (
        <ButtonStyle
            size={size}
            $buttonType={buttonType}
            ref={ref}
            disabled={!enabled}
            $customStyle={css`
                ${buttonType === 'outlined' && css`
                    outline: 1px solid var(--g-200);
                `};
                ${customStyle};
            `}
            {...props}
        >
            {leadingIcon && (
                <Icon iconType={leadingIcon} size={iconSize} customStyle={css`
                    fill: ${iconColor};
                `}/>
            )}
            {text}
            {trailingIcon && (
                <Icon iconType={trailingIcon} size={iconSize} customStyle={css`
                    fill: ${iconColor};
                `}/>
            )}
        </ButtonStyle>
    )
}

const buttonSizeToStyleRecord: Record<ButtonSize, {
    $borderRadius: number;
    padding: CSSProperties['padding'];
    gap: number;
    $textType: TextType;
    height: number;
}> = {
    large: {
        $borderRadius: 10,
        padding: '10px 24px',
        gap: 6,
        $textType: 'p3',
        height: 44
    },
    medium: {
        $borderRadius: 8,
        padding: '8px 20px',
        gap: 5,
        $textType: 'caption1',
        height: 37
    },
    small: {
        $borderRadius: 6,
        padding: '6px 16px',
        gap: 4,
        $textType: 'caption2',
        height: 30
    }
}

const buttonTypeToStyleRecord: Record<ButtonType, {
    background: CSSProperties['background'];
    color: CSSProperties['color'];
}> = {
    filled: {
        background: '#171717',
        color: 'white'
    },
    outlined: {
        background: 'transparent',
        color: 'var(--g-500)'
    },
    tonal: {
        background: 'var(--g-100)',
        color: 'var(--g-500)'
    }
}

const ButtonStyle = styled.button<{
    size: ButtonSize;
    $buttonType: ButtonType;
    $customStyle?: RuleSet;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    word-break: keep-all;
    white-space: nowrap;
    transition: 0.1s scale ease-in-out;
    
    ${({size}) => {
        const style = buttonSizeToStyleRecord[size];
        return css`
            ${makeText(style.$textType)};
            border-radius: ${style.$borderRadius}px;
            padding: ${style.padding};
            gap: ${style.gap}px;
            height: ${style.height}px;
        `;
    }};
    ${({$buttonType}) => {
        const style = buttonTypeToStyleRecord[$buttonType];
        return css`
            color: ${style.color};
            background: ${style.background};
        `;
    }}
    
    ${({$customStyle}) => $customStyle};

    &:disabled {
        opacity: 0.65;
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

`;

export default forwardRef(Button);