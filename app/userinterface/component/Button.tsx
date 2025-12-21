import Icon, {type IconType, isIconType} from "~/userinterface/foundation/Icon";
import {type ComponentPropsWithRef, type ForwardedRef, forwardRef, isValidElement, type ReactNode} from "react";
import {css, cx, type LinariaClassName} from "@linaria/core";
import {styled} from "@linaria/react";
import {textStyles} from "~/userinterface/foundation/text/TextType.ts";
import View from "~/userinterface/core/View.tsx";

export type ButtonSize = 'large' | 'medium' | 'small';

const buttonSizeStyles: Record<ButtonSize, LinariaClassName> = {
    large: cx(
        css`
            border-radius: 10px;
            padding: 10px 24px;
            gap: 6px;
            height: 44px;
        `,
        textStyles.p3.normal
    ),
    medium: cx(
        css`
            border-radius: 8px;
            padding: 8px 20px;
            gap: 5px;
            height: 37px;
        `,
        textStyles.caption1.normal
    ),
    small: cx(
        css`
            border-radius: 6px;
            padding: 6px 16px;
            gap: 4px;
            height: 30px;
        `,
        textStyles.caption2.normal
    ),
}
export type ButtonType = 'filled' | 'outlined' | 'tonal';

const buttonTypeStyles: Record<ButtonType, LinariaClassName> = {
    filled: css`
        background: #171717;
        color: white;
    `,
    outlined: css`
        background: transparent;
        color: var(--g-500);
        outline: 1px solid var(--g-200) !important;
    `,
    tonal: css`
        background: var(--g-100);
        color: var(--g-500);
    `
};

const buttonTypeIconStyles: Record<ButtonType, LinariaClassName> = {
    filled: css`
        fill: white;
    `,
    outlined: css`
        fill: var(--g-500);
    `,
    tonal: css`
        fill: var(--g-500);
    `
}


const iconSizeMap: Record<ButtonSize, number> = {
    large: 18,
    medium: 16,
    small: 14
};

interface Props extends ComponentPropsWithRef<'button'> {
    text: string;
    size?: ButtonSize;
    buttonType?: ButtonType;
    leadingIcon?: IconType | ReactNode;
    trailingIcon?: IconType | ReactNode;
    enabled?: boolean;
    ui?: LinariaClassName;
}

function Button(
    {
        text,
        size = 'large',
        buttonType = 'filled',
        leadingIcon,
        trailingIcon,
        enabled = true,
        ui,
        ...props
    }: Props,
    ref: ForwardedRef<HTMLButtonElement>
) {
    const iconColor = buttonTypeIconStyles[buttonType];
    const iconSize = iconSizeMap[size];

    return (
        <View
            as={'button'}
            className={cx(
                css`
                    display: flex;
                    flex-direction: row !important;
                    align-items: center;
                    justify-content: center;
                    outline: none;
                    border: none;
                    word-break: keep-all;
                    white-space: nowrap;
                    transition: 0.1s scale ease-in-out, 0.1s opacity;

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
                `,
                'override-font',
                buttonSizeStyles[size],
                buttonTypeStyles[buttonType],
                ui
            )}
            ref={ref}
            disabled={!enabled}
            {...props}
        >
            {leadingIcon && (
                isIconType(leadingIcon) ? (
                    <Icon iconType={leadingIcon} size={iconSize} ui={iconColor}/>
                ) : (
                    leadingIcon
                )
            )}
            {text}
            {trailingIcon && (
                isIconType(trailingIcon) ? (
                    <Icon iconType={trailingIcon} size={iconSize} ui={iconColor}/>
                ) : (
                    trailingIcon
                )
            )}
        </View>
    )
}


export default forwardRef(Button);