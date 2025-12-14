import {css, cx} from "@linaria/core";
import popupAnimationStyle from "~/userinterface/animation/popupAnimationStyle.ts";
import {hideScrollBarStyle} from "~/userinterface/css.util.ts";

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
