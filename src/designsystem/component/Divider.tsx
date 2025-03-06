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
        <CustomStyle css={css`
            background: var(--g-100);
            ${style};
            ${customStyle};
        `} {...props}/>
    );
}

export default Divider;
