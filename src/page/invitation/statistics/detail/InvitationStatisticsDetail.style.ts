import styled from "styled-components";
import makeText from "@designsystem/foundation/text/TextType";

const BaseRow = styled.div`
    display: flex;
    padding: 0 8px;
    height: 60px;
    align-items: stretch;
`;

const BaseCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 146px;
    ${makeText('p4')};
`

const S = {
    container: styled.div`
        display: flex;
        flex: 1;
        overflow-y: scroll;
        background: white;
    `,
    rsvp: {
        headerRow: styled(BaseRow)`
            border-bottom: 1px solid black;
        `,
        bodyRow: styled(BaseRow)`
            border-bottom: 1px solid var(--g-100);
        `,
        contentCell: styled(BaseCell)`
            flex: 1;
        `,
        cell: styled(BaseCell)<{ width: number }>`
            width: ${({width}) => width}px;
        `,
    },
};

export default S;