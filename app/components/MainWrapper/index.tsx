import {type ReactNode, type RefObject} from "react";
import Header from "~/components/MainWrapper/Header.tsx";
import Footer from "~/components/MainWrapper/Footer.tsx";
import {css, cx, type LinariaClassName} from "@linaria/core";
import View from "~/components/core/View.tsx";
import {hideScrollBarStyle} from "~/components/css.util.ts";

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
