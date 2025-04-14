import React, {ComponentPropsWithRef, ForwardedRef, forwardRef} from 'react';
import View from "@src/userinterface/core/View";
import {css, RuleSet} from "styled-components";
import makeText from "@src/userinterface/foundation/text/TextType";

interface Props extends ComponentPropsWithRef<'input'> {
    placeholder?: string;
    hasLabel?: boolean;
    ui?: RuleSet;
}

const Input = forwardRef(({placeholder, hasLabel = true, ui, ...props}: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <View $ui={css`
            display: flex;
            position: relative;
            ${ui};
        `}>
            <View
                as={'input'}
                ref={ref}
                $ui={css`
                    display: flex;
                    height: 52px;
                    border: none;
                    flex: 1;
                    width: 100%;
                    outline: 1px solid var(--g-300);
                    border-radius: 8px;
                    padding: 0 16px;
                    color: var(--g-800);
                    ${makeText('p2')};

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

                    ${hasLabel ? css`
                        &:focus + label, &:not(:placeholder-shown) + label {
                            top: -8px;
                            left: 12px;
                            padding: 0 4px;
                        }

                        &:focus + label legend {
                            color: var(--g-800);
                        }

                        &:focus + label legend, &:not(:placeholder-shown) + label legend {
                            ${makeText('caption2')};
                        }
                    ` : css`
                        & + label {
                            display: none;
                        }
                    `};

                    &::-webkit-calendar-picker-indicator {
                        color: var(--g-600);
                        position: absolute;
                        right: 16px;
                    }
                `}
                {...props}
                placeholder={hasLabel ? '' : placeholder}
            />
            <View as={'label'} $ui={css`
                position: absolute;
                left: 16px;
                top: 12px;
                transition: 0.1s top ease-out, 0.1s left ease-out, 0.1s padding ease-out;
                pointer-events: none;
                background: white;
            `}>
                <View as={'legend'} $ui={css`
                    color: var(--g-400);
                    transition: 0.1s font-size ease-out;
                    ${makeText('p2')};
                `}>
                    {placeholder}
                </View>
            </View>
        </View>
    );
});

export default Input;
