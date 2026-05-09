import {css, cx} from "@linaria/core";
import {popupAnimationStyle} from "~/style/animation";

import {hideScrollBarStyle} from "~/style/common.ts";

export const baseDialogContentStyle = cx(
    css`
        display: flex;
        position: fixed;
        z-index: 3;
        overflow: auto;
    `,
    popupAnimationStyle,
    hideScrollBarStyle,
);
