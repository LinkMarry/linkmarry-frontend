import {ReactNode} from "react";
import {css} from "styled-components";
import Header from "@src/userinterface/pattern/header/Header";
import {Column} from "@src/userinterface/core/FlexLayout";
import Footer from "@src/userinterface/specific/Footer";

interface Props {
    hasHeader?: boolean;
    hasFooter?: boolean;
    children?: ReactNode;
}

function MainWrapper(
    {
        hasHeader = true,
        hasFooter = true,
        children
    }: Props
) {
    return (
        <Column $alignItems={'stretch'} $ui={css`
            width: 100vw;
            height: 100dvh;
            overflow: hidden;
        `}>
            {hasHeader && <Header/>}
            <Column $alignItems={'stretch'} $flex={1} $ui={css`
                overflow: scroll;
            `}>
                <Column as={'main'} $alignItems={'stretch'} $flex={1}>
                    {children}
                </Column>
                {hasFooter && <Footer/>}
            </Column>
        </Column>
    );
}

export default MainWrapper;
