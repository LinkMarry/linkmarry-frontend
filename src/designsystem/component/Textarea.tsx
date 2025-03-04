import React, {ComponentPropsWithRef} from 'react';
import CustomStyle from "@designsystem/core/CustomStyle";
import {css, RuleSet} from "styled-components";
import makeText from "@designsystem/foundation/text/TextType";

interface Props extends ComponentPropsWithRef<'textarea'> {
    placeholder?: string;
    hasLabel?: boolean;
    customStyle?: RuleSet;
}

const Textarea = ({placeholder, hasLabel = true, customStyle, ...props}: Props) => {
    return (
        <CustomStyle $customStyle={css`
            display: flex;
            position: relative;
            ${customStyle};
        `}>
            <CustomStyle
                as={'textarea'}
                $customStyle={css`
                    display: flex;
                    min-height: 52px;
                    border: none;
                    flex: 1;
                    width: 100%;
                    outline: 1px solid var(--g-300);
                    border-radius: 8px;
                    padding: 12px 16px;
                    resize: vertical;
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
                `}
                {...props}
                placeholder={hasLabel ? '' : placeholder}
            />
            <CustomStyle as={'label'} $customStyle={css`
                position: absolute;
                left: 16px;
                top: 12px;
                transition: 0.1s top ease-out, 0.1s left ease-out, 0.1s padding ease-out;
                pointer-events: none;
                background: white; // It has problem that hide another object
            `}>
                <CustomStyle as={'legend'} $customStyle={css`
                    color: var(--g-400);
                    transition: 0.1s font-size ease-out;
                    ${makeText('p2')};
                `}>
                    {placeholder}
                </CustomStyle>
            </CustomStyle>
        </CustomStyle>
    );
};

export default Textarea;
