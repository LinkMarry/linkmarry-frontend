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
        <Column alignment={'stretch'} ui={css`
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        `}>
            {hasHeader && <Header/>}
            <Column alignment={'stretch'} flex={1} ui={css`
                overflow: scroll;
            `}>
                <Column as={'main'} alignment={'stretch'} flex={1}>
                    {children}
                </Column>
                {hasFooter && <Footer/>}
            </Column>
        </Column>
    );
}

export default MainWrapper;
