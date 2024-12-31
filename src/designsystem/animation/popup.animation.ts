import {css, keyframes} from "styled-components";

export const popupAnimation = keyframes`
    from {
        transform: translate(0, -20px);
        scale: 1.05;
    }
    to {
        transform: translate(0, 0px);
        scale: 1;
    }
`;

export const popupAnimationStyle = css`
    animation: ${popupAnimation} 0.2s;
`;
