import {type ComponentPropsWithoutRef} from "react";
import {css, cx, type LinariaClassName} from "@linaria/core";

export type DividerSize = "large" | "medium" | "small";
export type DividerDirection = "horizontal" | "vertical";

const dividerSizeMap: Record<DividerSize, number> = {
    large: 12,
    medium: 8,
    small: 1,
};

interface Props extends ComponentPropsWithoutRef<"div"> {
    size?: DividerSize;
    direction?: DividerDirection;
    ui?: LinariaClassName;
}

function Divider(
    {
        size = "small",
        direction = "horizontal",
        ui,
        ...props
    }: Props
) {
    return <div className={cx(
        css`
            background: var(--g-100);
        `,
        direction === 'horizontal' ? css`
            min-width: 100%;
        ` : css`
            min-height: 100%;
        `,
        ui
    )} style={direction === 'horizontal' ? {
        minHeight: dividerSizeMap[size]
    } : {
        minWidth: dividerSizeMap[size]
    }} {...props} />;
}

export default Divider;
