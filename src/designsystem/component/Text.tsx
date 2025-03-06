import React, {
    ComponentPropsWithRef,
    CSSProperties,
    ForwardedRef,
    forwardRef,
    PropsWithChildren
} from 'react';
import {css, RuleSet} from "styled-components";
import {FontFamily, TextType, textTypeMap} from "@designsystem/foundation/text/TextType";
import {implementText} from "@designsystem/foundation/text/TextProperties";
import CustomStyle from "@designsystem/core/CustomStyle";

interface Props extends PropsWithChildren<ComponentPropsWithRef<'span'>> {
    type?: TextType;
    font?: FontFamily;
    weight?: CSSProperties['fontWeight'];
    size?: number;
    lineHeight?: CSSProperties['lineHeight'];
    bold?: boolean;
    customStyle?: RuleSet;
}

function Text(
    {
        type,
        font,
        weight,
        size,
        customStyle,
        lineHeight,
        bold = false,
        children,
        ...props
    }: Props,
    ref: ForwardedRef<HTMLSpanElement>
) {
    const properties = type && textTypeMap[type];
    return (
        <CustomStyle
            ref={ref}
            as={'span'}
            css={css`
                ${implementText({
                    fontFamily: font ?? properties?.fontFamily,
                    fontWeight: weight ?? (bold ? properties?.boldFontWeight : properties?.fontWeight),
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
