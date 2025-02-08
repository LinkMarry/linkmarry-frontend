import React, {ComponentPropsWithoutRef} from 'react';
import {css, RuleSet} from "styled-components";
import CustomStyle from "@designsystem/component/CustomStyle";

export type DividerSize = 'large' | 'medium' | 'small';
export type DividerDirection = 'horizontal' | 'vertical';

const dividerSizeToNumber: Record<DividerSize, number> = {
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
    return (
        <CustomStyle $customStyle={css`
            ${direction === 'horizontal' ? css`
                width: 100%;
                height: ${dividerSizeToNumber[size]}px;
            `: css`
                width: ${dividerSizeToNumber[size]}px;
                height: 100%;
            `}
            background: var(--g-100);
            ${customStyle};
        `} {...props}/>
    );
}

export default Divider;