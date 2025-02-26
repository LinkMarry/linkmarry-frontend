import React from "react";
import {css} from "styled-components";
import Header from "@designsystem/pattern/header/Header";
import {Column} from "@designsystem/component/FlexLayout";

interface HasHeaderProps {
    children?: React.ReactNode;
}

function HasHeader(
    {
        children
    }: HasHeaderProps
) {
    return (
        <Column $alignItems={'stretch'} $customStyle={css`
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        `}>
            <Header/>
            {children}
        </Column>
    );
}

export default HasHeader;