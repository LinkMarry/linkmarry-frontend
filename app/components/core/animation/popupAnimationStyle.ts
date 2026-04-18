import {css} from "@linaria/core";

const popupAnimationStyle = css`
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

export default popupAnimationStyle;
