import styled from "styled-components";

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        padding: 64px 124px;
        gap: 52px;
        flex: 1;
        overflow-y: scroll;
    `,
    templates: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3열 구성 */
        grid-column-gap: 44px;
        grid-row-gap: 68px;
    `
};

export default S;