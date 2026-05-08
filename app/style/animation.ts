import {css} from "@linaria/core";

export const fadeInAnimationStyle = css`
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

export const popupAnimationStyle = css`
    @keyframes popupAnimation {
        from {
            transform: translate(0, -20px);
            scale: 1.05;
        }
        to {
            transform: translate(0, 0px);
            scale: 1;
        }
    }
    animation: popupAnimation 0.2s;
`;
