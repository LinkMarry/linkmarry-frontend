import {type ComponentPropsWithoutRef} from "react";
import {css, cx, type LinariaClassName} from "@linaria/core";
import {styled} from "@linaria/react";
import View from "~/userinterface/core/View.tsx";

interface Props extends ComponentPropsWithoutRef<'div'> {
    w?: number;
    h?: number;
    ui?: LinariaClassName;
}

function Spacer({w, h, ui, ...props}: Props) {
    return (
        <View ui={cx(
            (w === undefined && h === undefined) ? css`
                flex: 1;
            ` : undefined,
        )} style={{
            minWidth: w,
            minHeight: h,
        }} {...props}/>
    );
}

export default Spacer;
