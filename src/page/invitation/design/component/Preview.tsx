import React from 'react';
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";

function Preview() {
    return (
        <S.container>
            <S.preview>
                wow
            </S.preview>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        width: 604px;
        background: ${colors.g200};
        overflow-y: scroll;
    `,
    preview: styled.div`
        display: flex;
        width: 436px;
        border-radius: 12px;
        margin: 52px 84px 0 84px;
        background: ${colors.white};
    `
}

export default Preview;