import {css} from "@linaria/core";

const fadeInAnimationStyle = css`
    @keyframes fadeInAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    animation: fadeInAnimation 0.2s;
`;

export default fadeInAnimationStyle;
