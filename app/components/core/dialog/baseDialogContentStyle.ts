import {css, cx} from "@linaria/core";
import popupAnimationStyle from "~/components/core/animation/popupAnimationStyle.ts";
import {hideScrollBarStyle} from "~/components/css.util.ts";

export const baseDialogContentStyle = cx(
    css`
        display: flex;
        position: fixed;
        z-index: 3;
        overflow: auto;
    `,
    popupAnimationStyle,
    hideScrollBarStyle
);
