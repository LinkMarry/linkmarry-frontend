import {ReactElement} from "react";
import {css} from "styled-components";
import Header from "@designsystem/pattern/header/Header";
import {Column} from "@designsystem/core/FlexLayout";
import Footer from "@src/component/Footer";

interface Props {
    hasHeader?: boolean;
    hasFooter?: boolean;
    children: ReactElement;
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
            height: 100vh;
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
