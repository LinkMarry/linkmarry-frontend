import React, {ComponentPropsWithoutRef} from 'react';
import {css, RuleSet} from "styled-components";
import {Row} from "@designsystem/core/FlexLayout";
import View from "@designsystem/core/View";

interface Props extends ComponentPropsWithoutRef<'div'> {
    ui?: RuleSet;
}

function Loading(
    {
        ui,
        ...props
    }: Props
) {
    return (
        <Row $justifyContent={'center'} $gap={8} $ui={ui} {...props}>
            <LoadingItem/>
            <LoadingItem/>
            <LoadingItem/>
        </Row>
    );
}

function LoadingItem() {
    return (
        <View $ui={css`
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
