import styled from "styled-components";

const S = {
    container: styled.div`
        display: flex;
        flex: 1;
        background: white;
        overflow-y: scroll;
    `,
    items: styled.ul`
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3열 구성 */
        gap: 28px;
        justify-items: start;
    `,
    createDesignButton: styled.button`
        display: flex;
        width: 300px;
        height: 420px;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--p-800);
        outline: none;
        border-radius: 12px;
        background: white;
        cursor: pointer;
    `
};

export default S;