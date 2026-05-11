import {
    type ComponentPropsWithRef,
    type CSSProperties,
    type ForwardedRef,
    forwardRef,
    type PropsWithChildren,
} from "react";
import {type FontFamily, type TextType, textStyles} from "~/components/core/text/TextType";
import {css, cx, type LinariaClassName} from "@linaria/core";

interface Props extends PropsWithChildren<ComponentPropsWithRef<"div">> {
    type?: TextType;
    font?: FontFamily;
    weight?: CSSProperties["fontWeight"];
    size?: number;
    lineHeight?: CSSProperties["lineHeight"];
    bold?: boolean;
    flexDirection?: "row" | "column";
    ui?: LinariaClassName | string;
}

const rowStyle = css`
    flex-direction: row;
`;

const columnStyle = css`
    flex-direction: column;
`;

const TextInner = (
    {type, font, weight, size, lineHeight, bold = false, flexDirection, ui, children, ...props}: Props,
    ref: ForwardedRef<HTMLDivElement>,
) => {
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
                flexDirection === "row" ? rowStyle : flexDirection === "column" ? columnStyle : undefined,
                ui,
            )}
            style={{
                fontFamily: font,
                fontSize: size,
                fontWeight: weight,
                lineHeight,
            }}
            {...props}
        >
            {children}
        </span>
    );
};

export const Text = forwardRef(TextInner);
