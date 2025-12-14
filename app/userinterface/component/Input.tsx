import {type ComponentPropsWithRef, type ForwardedRef, forwardRef} from 'react';
import View from "~/userinterface/core/View.tsx";
import {css, cx, type LinariaClassName} from "@linaria/core";
import {textStyles} from "~/userinterface/foundation/text/TextType.ts";

interface Props extends ComponentPropsWithRef<'input'> {
    placeholder?: string;
    hasLabel?: boolean;
    ui?: LinariaClassName;
}

const Input = forwardRef(({placeholder, hasLabel = true, ui, ...props}: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <View ui={cx(
            css`
                display: flex;
                position: relative;
                flex-direction: row !important;
            `,
            ui
        )}>
            <View
                as={'input'}
                ref={ref}
                ui={cx(
                    textStyles.p2.normal,
                    css`
                        flex-direction: row !important;
                        height: 52px;
                        border: none;
                        flex: 1;
                        width: 100%;
                        outline: 1px solid var(--g-300);
                        border-radius: 8px;
                        padding: 0 16px;
                        color: var(--g-800);

                        &::placeholder {
                            color: var(--g-400);
                        }

                        &:hover {
                            outline: 1px solid var(--g-400);

                            & + label legend {
                                color: var(--g-500);
                            }
                        }

                        &:focus {
                            outline: 1.5px solid var(--g-800);
                        }

                        &::-webkit-calendar-picker-indicator {
                            color: var(--g-600);
                            position: absolute;
                            right: 16px;
                        }
                    `,
                    hasLabel ? css`
                        &:focus + label, &:not(:placeholder-shown) + label {
                            top: -7px;
                            left: 12px;
                            padding: 0 4px;
                        }

                        &:focus + label legend {
                            color: var(--g-800);
                        }

                        &:focus + label legend, &:not(:placeholder-shown) + label legend {
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 150%;
                        }
                    ` : css`
                        & + label {
                            display: none;
                        }
                    `
                )}
                {...props}
                placeholder={hasLabel ? '' : placeholder}
            />
            <View as={'label'} ui={css`
                position: absolute;
                left: 16px;
                top: 12px;
                transition: 0.1s top ease-out, 0.1s left ease-out, 0.1s padding ease-out;
                pointer-events: none;
                background: white;
            `}>
                <View as={'legend'} ui={cx(
                    css`
                        color: var(--g-400);
                        transition: 0.1s font-size ease-out;
                    `,
                    textStyles.p2.normal
                )}>
                    {placeholder}
                </View>
            </View>
        </View>
    );
});

export default Input;
