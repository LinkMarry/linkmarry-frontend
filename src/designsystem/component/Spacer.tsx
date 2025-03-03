import {ComponentPropsWithoutRef} from "react";
import CustomStyle from "@designsystem/core/CustomStyle";
import {css} from "styled-components";

interface Props extends ComponentPropsWithoutRef<'div'> {
    w?: number;
    h?: number;
}

function Spacer(
    {
        w,
        h,
        ...props
    }: Props
) {
    return (
        <CustomStyle $customStyle={css`
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
