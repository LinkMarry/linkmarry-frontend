import React, {CSSProperties, ForwardedRef, forwardRef, HTMLAttributes} from 'react';
import styled, {css, RuleSet} from "styled-components";
import {LinkMarryFont, TextType, textTypeMap} from "@designsystem/foundation/text/TextType";
import TextProperties, {implementText} from "@designsystem/foundation/text/TextProperties";

interface Props extends HTMLAttributes<HTMLSpanElement> {
    type?: TextType;
    font?: LinkMarryFont;
    weight?: CSSProperties['fontWeight'];
    size?: number;
    lineHeight?: CSSProperties['lineHeight'];
    customStyle?: RuleSet;
    children?: React.ReactNode;
}

function Text(
    {
        type,
        font,
        weight,
        size,
        customStyle,
        lineHeight,
        children,
        ...props
    }: Props,
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
            $customStyle={customStyle}
            {...props}
        >{children}</TextStyle>
    );
}

const TextStyle = styled.span<{
    properties: TextProperties;
    $customStyle?: RuleSet;
}>`
    ${({properties, $customStyle}) => css`
        ${implementText(properties)};
        ${$customStyle};
    `}
`

export default forwardRef(Text);