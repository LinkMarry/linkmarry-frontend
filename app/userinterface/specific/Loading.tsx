import {type ComponentPropsWithoutRef} from 'react';
import View from "~/userinterface/core/View.tsx";
import {css, cx, type LinariaClassName} from "@linaria/core";

interface Props extends ComponentPropsWithoutRef<'div'> {
    ui?: LinariaClassName;
}

function Loading(
    {
        ui,
        ...props
    }: Props
) {
    return (
        <View ui={cx(
            css`
                flex-direction: row;
                justify-content: center;
                gap: 8px;
            `,
            ui
        )} {...props}>
            <LoadingItem/>
            <LoadingItem/>
            <LoadingItem/>
        </View>
    );
}

function LoadingItem() {
    return (
        <View ui={css`
            @keyframes loadingAnimation {
                0% {
                    opacity: 1;
                }
                33% {
                    opacity: 0.1;
                }
                66% {
                    opacity: 0.1;
                }
                100% {
                    opacity: 1;
                }
            }

            width: 8px;
            height: 8px;
            background: var(--g-600);
            border-radius: 50%;
            opacity: 0.1;
            animation: loadingAnimation 1.5s infinite;

            &:nth-child(1) {
                animation-delay: 0s;
            }

            &:nth-child(2) {
                animation-delay: 0.3s;
            }

            &:nth-child(3) {
                animation-delay: 0.6s;
            }
        `}/>
    );
}

export default Loading;
