import React, {
    ComponentPropsWithRef,
    ForwardedRef,
    forwardRef
} from 'react';
import {css, RuleSet} from "styled-components";
import {Row} from "@designsystem/core/FlexLayout";
import View from "@designsystem/core/View";

interface Props extends ComponentPropsWithRef<'div'> {
    checked: boolean;
    OnChange: (checked: boolean) => void;
    ui?: RuleSet;
}


function Toggle(
    {
        checked = false,
        OnChange,
        ui,
        ...props
    }: Props,
    ref?: ForwardedRef<HTMLInputElement>
) {
    return (
        <Row ui={css`
            position: relative;
            width: fit-content;
            ${ui};
        `} {...props}>
            <Row
                as={'input'}
                ref={ref}
                type={'checkbox'}
                checked={checked}
                onChange={(e) => {
                    OnChange(e.target.checked);
                }}
                ui={css`
                    display: flex;
                    width: 60px;
                    height: 32px;
                    appearance: none;
                    cursor: pointer;
                    ${checked ? css`
                        background: var(--g-900);
                    ` : css`
                        background: var(--g-200);
                    `};
                    border-radius: 100px;
                    outline: none;
                    transition: 0.2s background ease-out;
                `}
            />
            <View as={'span'} ui={css`
                position: absolute;
                width: 26px;
                height: 26px;
                background-color: white;
                border-radius: 100px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
                top: 3px;
                ${checked ? css`
                    left: 30px;
                ` : css`
                    left: 3px;
                `};
                transition: 0.2s left ease-out;
                pointer-events: none;
            `}/>
        </Row>
    );
}

export default forwardRef(Toggle);
