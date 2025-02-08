import React, {ComponentPropsWithRef, CSSProperties, ForwardedRef, forwardRef} from 'react';
import styled, {css, RuleSet} from "styled-components";
import {LinkMarryFont, TextType, textTypeMap} from "@designsystem/foundation/text/TextType";
import TextProperties, {implementText} from "@designsystem/foundation/text/TextProperties";
import CustomStyle from "@designsystem/component/CustomStyle";

interface Props extends ComponentPropsWithRef<'span'> {
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
        <CustomStyle
            ref={ref}
            as={'span'}
            $customStyle={css`
                ${implementText({
                    fontFamily: font ?? properties?.fontFamily,
                    fontWeight: weight ?? properties?.fontWeight,
                    fontSize: size ?? properties?.fontSize,
                    lineHeight: lineHeight ?? properties?.lineHeight,
                })};
                ${customStyle};
            `}
            {...props}
        >{children}</CustomStyle>
    );
}


export default forwardRef(Text);