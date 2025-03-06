import {ComponentPropsWithoutRef} from "react";
import Style from "@designsystem/core/Style";
import {css} from "styled-components";

interface Props extends ComponentPropsWithoutRef<'div'> {
    w?: number;
    h?: number;
}

function Spacer({w, h, ...props}: Props) {
    return (
        <Style css={css`
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
