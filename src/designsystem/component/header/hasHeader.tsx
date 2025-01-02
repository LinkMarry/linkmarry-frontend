import React from "react";
import styled from "styled-components";
import Header from "@designsystem/component/header/header";

interface HasHeader {
    children?: React.ReactNode;
}

function HasHeader(
    {
        children
    }: HasHeader
) {
    return (
        <S.container>
            <Header/>
            {children}
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    `
}

export default HasHeader;