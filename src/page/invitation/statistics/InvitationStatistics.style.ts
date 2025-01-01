import styled from "styled-components";
import colors from "../../../designsystem/foundation/colors";

const S = {
    container: styled.div`
        display: flex;
        flex: 1;
        background: ${colors.white};
        overflow-y: scroll;
    `,
    items: styled.ul`
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3열 구성 */
        gap: 28px;
        justify-items: start;
    `,
}

export default S;