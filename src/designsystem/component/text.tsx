import React, {CSSProperties, HTMLAttributes} from 'react';
import styled, {css} from "styled-components";
import {LinkMarryFont, TextType, textTypeMap} from "@designsystem/foundation/text/textType";
import colors from "@designsystem/foundation/colors";
import TextProperties, {implementText} from "@designsystem/foundation/text/textProperties";

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
    text: string;
    type?: TextType;
    font?: LinkMarryFont;
    weight?: CSSProperties['fontWeight'];
    size?: CSSProperties['fontSize'];
    color?: CSSProperties['color'];
    lineHeight?: CSSProperties['lineHeight'];
}

function Text(
    {
        text,
        type,
        font,
        weight,
        size,
        color = colors.black,
        lineHeight,
        ...props
    }: TextProps
) {
    const properties = type ? textTypeMap[type] : undefined;
    return (
        <TextStyle
            properties={{
                fontFamily: font ?? properties?.fontFamily,
                fontWeight: weight ?? properties?.fontWeight,
                fontSize: size ?? properties?.fontSize,
                lineHeight: lineHeight ?? properties?.lineHeight,
            }}
            color={color}
            {...props}
        >{text}</TextStyle>
    );
}

const TextStyle = styled.span<{
    properties: TextProperties,
    color: CSSProperties['color'];
}>`
    ${({properties, color}) => css`
        ${implementText(properties)};
        color: ${color};
    `}
`

export default Text;