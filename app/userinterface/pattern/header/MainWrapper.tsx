import {type ReactNode, type RefObject} from "react";
import Header from "~/userinterface/pattern/header/Header";
import Footer from "~/userinterface/specific/Footer";
import {css, cx, type LinariaClassName} from "@linaria/core";
import View from "~/userinterface/core/View.tsx";
import {hideScrollBarStyle} from "~/userinterface/css.util.ts";

interface Props {
    hasHeader?: boolean;
    hasFooter?: boolean;
    ui?: LinariaClassName;
    scrollRef?: RefObject<HTMLDivElement | null>;
    children?: ReactNode;
}

function MainWrapper(
    {
        hasHeader = true,
        hasFooter = true,
        ui,
        scrollRef,
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
            <View ref={scrollRef} ui={cx(
                css`
                    overflow-y: scroll;
                    flex: 1;
                `,
                hideScrollBarStyle
            )}>
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
