import React, {CSSProperties, ForwardedRef, forwardRef, HTMLAttributes} from 'react';
import styled, {css} from "styled-components";
import {LinkMarryFont, TextType, textTypeMap} from "@designsystem/foundation/text/textType";
import colors from "@designsystem/foundation/colors";
import TextProperties, {implementText} from "@designsystem/foundation/text/textProperties";

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
    type?: TextType;
    font?: LinkMarryFont;
    weight?: CSSProperties['fontWeight'];
    size?: number;
    color?: CSSProperties['color'];
    lineHeight?: CSSProperties['lineHeight'];
    children?: React.ReactNode;
}

function Text(
    {
        type,
        font,
        weight,
        size,
        color = colors.black,
        lineHeight,
        children,
        ...props
    }: TextProps,
    ref: ForwardedRef<HTMLSpanElement>
) {
    const properties = type ? textTypeMap[type] : undefined;
    return (
        <TextStyle
            ref={ref}
            properties={{
                fontFamily: font ?? properties?.fontFamily,
                fontWeight: weight ?? properties?.fontWeight,
                fontSize: size ?? properties?.fontSize,
                lineHeight: lineHeight ?? properties?.lineHeight,
            }}
            color={color}
            {...props}
        >{children}</TextStyle>
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

export default forwardRef(Text);