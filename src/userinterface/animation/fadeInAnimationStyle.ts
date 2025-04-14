import {css, keyframes} from "styled-components";

export const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeInAnimationStyle = css`
    animation: ${fadeInAnimation} 0.2s;
`;

export default fadeInAnimationStyle;
