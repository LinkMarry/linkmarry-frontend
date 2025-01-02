import React, {CSSProperties, HTMLAttributes} from 'react';
import styled, {css} from "styled-components";
import makeText, {TextType} from "@designsystem/foundation/text/textType";
import colors from "@designsystem/foundation/colors";

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
    text: string;
    type: TextType;
    color?: CSSProperties['color'];
}

function Text(
    {
        text,
        type,
        color = colors.black,
        ...props
    }: TextProps
) {
    return (
        <TextStyle type={type} color={color} {...props}>{text}</TextStyle>
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