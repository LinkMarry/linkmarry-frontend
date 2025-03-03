import React, {ComponentPropsWithoutRef} from 'react';
import {css, RuleSet} from "styled-components";
import CustomStyle from "@designsystem/core/CustomStyle";

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
    customStyle?: RuleSet;
}

function Divider(
    {
        size = 'small',
        direction = 'horizontal',
        customStyle,
        ...props
    }: Props
) {
    const style = (() => {
        switch (direction) {
            case 'vertical':
                return css`
                    width: ${dividerSizeMap[size]}px;
                    height: 100%;
                `;
            case 'horizontal':
                return css`
                    width: 100%;
                    height: ${dividerSizeMap[size]}px;
                `;
        }
    })();

    return (
        <CustomStyle $customStyle={css`
            background: var(--g-100);
            ${style};
            ${customStyle};
        `} {...props}/>
    );
}

export default Divider;
