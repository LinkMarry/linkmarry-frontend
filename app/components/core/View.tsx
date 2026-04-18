import {css, cx, type LinariaClassName} from "@linaria/core";
import type {ComponentProps, ElementType} from "react";

type ViewProps<T extends ElementType> = {
    as?: T;
    ui?: LinariaClassName | string;
} & ComponentProps<T>;

const defaultStyle = css`
    display: flex;
    flex-direction: column;
`;

function View<T extends ElementType = 'div'>(
    {
        as,
        ui,
        ...props
    }: ViewProps<T>
) {
    const Component = as || 'div';
    return <Component className={cx(defaultStyle, ui)} {...props} />;
}

export default View;
