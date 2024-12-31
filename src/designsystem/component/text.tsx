import React, {CSSProperties} from 'react';
import makeText, {TextType} from "../foundation/text/textType";
import colors from "../foundation/colors";
import styled, {css} from "styled-components";

interface TextProps {
    text: string;
    type: TextType;
    color?: CSSProperties['color'];
}

function Text(
    {
        text,
        type,
        color = colors.black,
    }: TextProps
) {
    return (
        <TextStyle type={type} color={color}>{text}</TextStyle>
    );
}

const TextStyle = styled.span<{
    type: TextType,
    color: CSSProperties['color']
}>`
    ${({type, color}) => css`
        ${makeText(type)};
        color: ${color};
    `}
`

export default Text;