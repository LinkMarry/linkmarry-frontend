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
import Style from "@designsystem/core/Style";

interface Props extends PropsWithChildren<ComponentPropsWithRef<'span'>> {
    type?: TextType;
    font?: FontFamily;
    weight?: CSSProperties['fontWeight'];
    size?: number;
    lineHeight?: CSSProperties['lineHeight'];
    bold?: boolean;
    ui?: RuleSet;
}

function Text(
    {
        type,
        font,
        weight,
        size,
        ui,
        lineHeight,
        bold = false,
        children,
        ...props
    }: Props,
    ref: ForwardedRef<HTMLSpanElement>
) {
    const properties = type && textTypeMap[type];
    return (
        <Style
            ref={ref}
            as={'span'}
            css={css`
                ${implementText({
                    fontFamily: font ?? properties?.fontFamily,
                    fontWeight: weight ?? (bold ? properties?.boldFontWeight : properties?.fontWeight),
                    fontSize: size ?? properties?.fontSize,
                    lineHeight: lineHeight ?? properties?.lineHeight,
                })};
                ${ui};
            `}
            {...props}
        >{children}</Style>
    );
}


export default forwardRef(Text);
