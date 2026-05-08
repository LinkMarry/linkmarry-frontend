import {css, cx, type LinariaClassName} from "@linaria/core";
import type {ComponentProps, ElementType} from "react";

type ViewProps<T extends ElementType> = {
    as?: T;
    ui?: LinariaClassName | string;
    flexDirection?: "row" | "column";
} & ComponentProps<T>;

const baseStyle = css`
    display: flex;
`;

const columnStyle = css`
    flex-direction: column;
`;

const rowStyle = css`
    flex-direction: row;
`;

function View<T extends ElementType = "div">({as, ui, flexDirection = "column", ...props}: ViewProps<T>) {
    const Component = as || "div";
    return <Component className={cx(baseStyle, flexDirection === "row" ? rowStyle : columnStyle, ui)} {...props} />;
}

export default View;
