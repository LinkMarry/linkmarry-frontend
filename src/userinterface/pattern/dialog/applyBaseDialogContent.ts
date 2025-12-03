import {css} from "styled-components";
import popupAnimationStyle from "@src/userinterface/animation/popupAnimationStyle.ts";
import {hideScrollBar} from "@src/userinterface/css.util.ts";

export const applyBaseDialogContent = css`
    display: flex;
    position: fixed;
    z-index: 3;
    ${popupAnimationStyle};
    overflow: auto;
    ${hideScrollBar};
`;
