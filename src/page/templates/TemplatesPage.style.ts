import styled from "styled-components";
import GuideLine from "@util/GuideLine";

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        padding: 64px 124px;
        gap: 52px;
        flex: 1;
        overflow-y: scroll;
        
        @media screen and (max-width: ${GuideLine.Tablet}px) {
            padding: 48px 64px;
        }
        
        @media screen and (max-width: ${GuideLine.Mobile}px) {
            padding: 32px;
        }
    `,
    templates: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3열 구성 */
        grid-column-gap: 44px;
        grid-row-gap: 68px;
        
        @media screen and (max-width: ${GuideLine.Desktop}px) {
            grid-template-columns: repeat(2, 1fr); /* 2열 구성 */
        }
        
        @media screen and (max-width: ${GuideLine.Mobile}px) {
            grid-template-columns: repeat(1, 1fr); /* 1열 구성 */
        }
    `
};

export default S;