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
import View from "@designsystem/core/View";

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
        <View
            ref={ref}
            as={'span'}
            ui={css`
                ${implementText({
                    fontFamily: font ?? properties?.fontFamily,
                    fontWeight: weight ?? (bold ? properties?.boldFontWeight : properties?.fontWeight),
                    fontSize: size ?? properties?.fontSize,
                    lineHeight: lineHeight ?? properties?.lineHeight,
                })};
                ${ui};
            `}
            {...props}
        >{children}</View>
    );
}


export default forwardRef(Text);
