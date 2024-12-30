import styled from "styled-components";
import colors from "../../../designsystem/foundation/colors";
import makeText, {TextType} from "../../../designsystem/foundation/text/textType";

const S = {
    container: styled.div`
        display: flex;
        flex: 1;
        background: ${colors.white};
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
        display: flex;
        column-count: 3;
        break-inside: avoid-column; // column 잘림 방지
    `
};

export default S;