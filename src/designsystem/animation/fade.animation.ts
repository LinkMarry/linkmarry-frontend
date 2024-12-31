import {css, keyframes} from "styled-components";

export const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const fadeInAnimationStyle = css`
    animation: ${fadeInAnimation} 0.2s;
`;

export const fadeOutAnimation = keyframes`
    from {
        opacity: 1;

    }
    to {
        opacity: 0;
    }
`;

export const fadeOutAnimationStyle = css`
    animation: ${fadeOutAnimation} 0.2s;
`;