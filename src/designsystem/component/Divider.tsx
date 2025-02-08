import React, {ComponentPropsWithoutRef, CSSProperties, HTMLAttributes} from 'react';
import styled, {css, RuleSet} from "styled-components";
import customStyle from "@designsystem/component/CustomStyle";

export type DividerSize = 'large' | 'medium' | 'small';
const dividerSizeToNumber: Record<DividerSize, number> = {
    large: 12,
    medium: 8,
    small: 1
}

interface Props extends ComponentPropsWithoutRef<'div'> {
    size?: DividerSize;
    customStyle?: RuleSet;
}

function Divider(
    {
        size = 'small',
        customStyle,
        ...props
    }: Props
) {
    return (
        <DividerStyle size={size} $customStyle={customStyle} {...props}/>
    );
}

const DividerStyle = styled.div<{
    size: DividerSize;
    $customStyle?: RuleSet;
}>`
    width: 100%;
    ${({size, $customStyle}) => css`
        height: ${dividerSizeToNumber[size]}px;
        ${customStyle};
    `};
`;

export default Divider;