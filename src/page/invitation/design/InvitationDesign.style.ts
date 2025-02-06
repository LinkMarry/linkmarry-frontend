import styled from "styled-components";
import makeText from "@designsystem/foundation/text/TextType";

const S = {
    container: styled.div`
        display: flex;
        flex: 1;
        overflow: scroll;
    `,
    optionContainer: styled.div`
        display: flex;
        flex: 1;
        min-width: 618px;
        flex-direction: column;
        background: var(--g-100);
        padding: 48px 44px 109px 44px;
        overflow-y: scroll;
    `,
    title: styled.span`
        display: flex;
        ${makeText('h5')};
        color: black;
    `,
    titleDescription: styled.span`
        display: flex;
        ${makeText('p3')};
        color: var(--g-500);
    `,
    options: styled.ul`
        display: flex;
        flex-direction: column;
        justify-self: stretch;
        margin-top: 20px;
    `,
    preview: styled.div`
        display: flex;
        width: 604px;
        justify-content: center;
        background: var(--g-200);
    `,
    previewScrollableContent: styled.div`
        overflow-y: scroll;
    `,
    previewContent: styled.div`
        display: flex;
        margin: 52px 84px;
        border-radius: 12px;
        overflow-y: hidden;
    `
}

export default S;