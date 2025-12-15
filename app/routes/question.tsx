import React from 'react';
import MainWrapper from "~/userinterface/pattern/header/MainWrapper.tsx";
import {css} from "@linaria/core";
import {responsive} from "~/hook/ResponsiveSwitch.tsx";
import Text from "~/userinterface/component/Text.tsx";
import View from "~/userinterface/core/View.tsx";
import type {Route} from "./+types/question";

export async function loader() {
    return {};
}

function Question(
    {
        loaderData: {}
    }: Route.ComponentProps
) {
    return (
        <MainWrapper>
            <View ui={css`
                align-items: center;
                padding: 72px 16px 40px 16px;

                ${responsive.notDesktop} {
                    padding-top: 24px;
                }
            `}>
                <View ui={css`
                    max-width: 720px;
                    width: 100%;
                    flex: 1;
                    gap: 24px;
                `}>
                    <Text type={'h5'} bold={true}>자주 묻는 질문</Text>
                </View>
            </View>
        </MainWrapper>
    );
}

export default Question;