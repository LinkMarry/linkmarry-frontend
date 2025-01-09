import React, {CSSProperties, HTMLAttributes} from 'react';
import styled, {css} from "styled-components";
import makeText, {TextType} from "@designsystem/foundation/text/textType";
import colors from "@designsystem/foundation/colors";

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
    text: string;
    type: TextType;
    color?: CSSProperties['color'];
    weight?: CSSProperties['fontWeight'];
}

function Text(
    {
        text,
        type,
        color = colors.black,
        weight,
        ...props
    }: TextProps
) {
    return (
        <TextStyle type={type} color={color} weight={weight} {...props}>{text}</TextStyle>
    );
}

const TextStyle = styled.span<{
    type: TextType,
    color: CSSProperties['color'],
    weight?: CSSProperties['fontWeight'],
}>`
    ${({type, color, weight}) => css`
        ${makeText(type)};
        color: ${color};
        font-weight: ${weight};
    `}
`

export default Text;