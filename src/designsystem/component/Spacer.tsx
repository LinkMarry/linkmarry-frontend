import {ComponentPropsWithoutRef} from "react";
import View from "@designsystem/core/View";
import {css} from "styled-components";

interface Props extends ComponentPropsWithoutRef<'div'> {
    w?: number;
    h?: number;
}

function Spacer({w, h, ...props}: Props) {
    return (
        <View $ui={css`
            ${w && css`
                min-width: ${w}px;
            `};
            ${h && css`
                min-height: ${h}px;
            `};
            ${!w && !h && css`
                flex: 1;
            `};
        `} {...props}/>
    );
}

export default Spacer;
