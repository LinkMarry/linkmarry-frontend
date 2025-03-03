import {css} from "styled-components";

export const hideScrollBar = css`
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
`;


type InteractionEffectType = 'normal' | 'strong';
export function makeInteractionEffect(type: InteractionEffectType) {
    switch (type) {
        case 'normal':
            return css`
                &:hover {
                    background: var(--g-50);
                }
                &:active {
                    background: var(--g-100);
                }
                cursor: pointer;
                transition: 0.1s background;
            `;
        case 'strong':
            return css`
                &:hover {
                    background: var(--g-100);
                }

                &:active {
                    background: var(--g-200);
                }
                cursor: pointer;
                transition: 0.1s background;
            `;
    }
}
