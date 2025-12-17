import {type ReactNode} from "react";
import Header from "~/userinterface/pattern/header/Header";
import Footer from "~/userinterface/specific/Footer";
import {css, cx, type LinariaClassName} from "@linaria/core";
import View from "~/userinterface/core/View.tsx";

interface Props {
    hasHeader?: boolean;
    hasFooter?: boolean;
    ui?: LinariaClassName;
    children?: ReactNode;
}

function MainWrapper(
    {
        hasHeader = true,
        hasFooter = true,
        ui,
        children
    }: Props
) {
    return (
        <View ui={cx(
            css`
                width: 100vw;
                height: 100dvh;
                overflow: hidden;
            `,
            ui
        )}>
            {hasHeader && <Header/>}
            <View ui={css`
                overflow-y: scroll;
                flex: 1;
            `}>
                <View as={'main'} ui={css`
                    flex: 1;
                `}>
                    {children}
                </View>
                {hasFooter && <Footer/>}
            </View>
        </View>
    );
}

export default MainWrapper;
