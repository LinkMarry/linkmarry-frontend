import styled from "styled-components";
import colors from "../../../designsystem/foundation/colors";
import makeText, {TextType} from "../../../designsystem/foundation/text/textType";

const S = {
    container: styled.div`
        display: flex;
        flex: 1;
        background: ${colors.white};
        overflow-y: scroll;
    `,
    title: styled.span`
        ${makeText(TextType.h5)};
        color: ${colors.black};
    `,
    titleDescription: styled.span`
        ${makeText(TextType.p3)};
        color: ${colors.g500};
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
        border: 1px solid ${colors.p800};
        outline: none;
        border-radius: 12px;
        background: ${colors.white};
        cursor: pointer;
    `,
    createDesignButtonLabel: styled.span`
        ${makeText(TextType.p4)};
        color: ${colors.g500};
    `
};

export default S;