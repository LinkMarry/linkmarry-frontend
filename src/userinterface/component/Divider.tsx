import React, {ComponentPropsWithoutRef} from 'react';
import {css, RuleSet} from "styled-components";
import View from "@src/userinterface/core/View";

export type DividerSize = 'large' | 'medium' | 'small';
export type DividerDirection = 'horizontal' | 'vertical';

const dividerSizeMap: Record<DividerSize, number> = {
    large: 12,
    medium: 8,
    small: 1
}

interface Props extends ComponentPropsWithoutRef<'div'> {
    size?: DividerSize;
    direction?: DividerDirection;
    ui?: RuleSet;
}

function Divider(
    {
        size = 'small',
        direction = 'horizontal',
        ui,
        ...props
    }: Props
) {
    const style = (() => {
        switch (direction) {
            case 'vertical':
                return css`
                    min-width: ${dividerSizeMap[size]}px;
                    min-height: 100%;
                `;
            case 'horizontal':
                return css`
                    min-width: 100%;
                    min-height: ${dividerSizeMap[size]}px;
                `;
        }
    })();

    return (
        <View $ui={css`
            background: var(--g-100);
            ${style};
            ${ui};
        `} {...props}/>
    );
}

export default Divider;
