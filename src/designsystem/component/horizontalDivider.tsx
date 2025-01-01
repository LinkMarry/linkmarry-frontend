import React, {CSSProperties, HTMLAttributes} from 'react';
import styled, {css} from "styled-components";
import colors from "../foundation/colors";

export type HorizontalDividerSize = 'large' | 'medium' | 'small';

interface HorizontalDividerProps extends HTMLAttributes<HTMLDivElement> {
    size?: HorizontalDividerSize;
    color?: CSSProperties['color'];
}

function HorizontalDivider(
    {
        size = 'small',
        color = colors.g100,
        ...props
    }: HorizontalDividerProps
) {
    let height: number;
    switch (size) {
        case 'large':
            height = 12;
            break;
        case 'medium':
            height = 8;
            break;
        case 'small':
            height = 1;
            break;
    }

    return (
        <S.Divider height={height} background={color} {...props}/>
    );
}

const S = {
    Divider: styled.div<{ height: number, background: CSSProperties['background'] }>`
        width: 100%;
        ${({height, background}) => css`
            height: ${height}px;
            background: ${background};
        `}
    `
}

export default HorizontalDivider;