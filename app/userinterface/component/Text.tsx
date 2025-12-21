import {
    type ComponentPropsWithRef,
    type CSSProperties,
    type ForwardedRef,
    forwardRef,
    type PropsWithChildren
} from 'react';
import {type FontFamily, type TextType, textStyles} from "~/userinterface/foundation/text/TextType";
import {cx, type LinariaClassName} from "@linaria/core";
import View from "~/userinterface/core/View";


interface Props extends PropsWithChildren<ComponentPropsWithRef<'div'>> {
    type?: TextType;
    font?: FontFamily;
    weight?: CSSProperties['fontWeight'];
    size?: number;
    lineHeight?: CSSProperties['lineHeight'];
    bold?: boolean;
    ui?: LinariaClassName | string;
}

function Text(
    {
        type,
        font,
        weight,
        size,
        lineHeight,
        bold = false,
        ui,
        children,
        ...props
    }: Props,
    ref: ForwardedRef<HTMLDivElement>
) {
    let textStyle: LinariaClassName | undefined;
    if (type) {
        if (bold) {
            textStyle = textStyles[type].bold;
        } else {
            textStyle = textStyles[type].normal;
        }
    }

    return (
        <span
            ref={ref}
            className={cx(
                textStyle,
                ui
            )}
            style={{
                fontFamily: font,
                fontSize: size,
                fontWeight: weight,
                lineHeight
            }}
            {...props}
        >
            {children}
        </span>
    );
}

export default forwardRef(Text);
