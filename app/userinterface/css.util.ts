import {css, type LinariaClassName} from "@linaria/core";

export const hideScrollBarStyle = css`
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
`;


type InteractionEffect = 'normal' | 'strong';
export const interactionEffectStyles: Record<InteractionEffect, LinariaClassName> = {
    normal: css`
        &:hover {
            background: var(--g-50);
        }

        &:active {
            background: var(--g-100);
        }

        cursor: pointer;
        transition: 0.1s background;
    `,
    strong: css`
        &:hover {
            background: var(--g-100);
        }

        &:active {
            background: var(--g-200);
        }

        cursor: pointer;
        transition: 0.1s background;
    `
}