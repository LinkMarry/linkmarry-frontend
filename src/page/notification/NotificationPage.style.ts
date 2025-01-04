import styled, {css} from "styled-components";
import colors from "@designsystem/foundation/colors";
import makeText, {TextType} from "@designsystem/foundation/text/textType";

const BaseRow = styled.div`
    display: flex;
    padding: 0 8px;
    height: 64px;
    align-items: stretch;
`;

const BaseCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 146px;
    ${makeText(TextType.p4)};
`

const S = {
    container: styled.div`
        display: flex;
        flex: 1;
        align-self: stretch;
        padding: 64px 124px;
        align-items: stretch;
        overflow-y: scroll;
    `,
    header: {
        row: styled(BaseRow)`
            border-bottom: 1px solid ${colors.black};
        `,
        titleCell: styled(BaseCell)`
            flex: 1;
        `,
        cell: BaseCell
    },
    body: {
        row: styled(BaseRow)`
            cursor: pointer;
        `,
        titleCell: styled(BaseCell)`
            flex: 1;
            justify-content: flex-start;
        `,
        tagCell: styled(BaseCell)`
            justify-content: flex-start;
            padding-left: 30px;
        `,
        nameCell: BaseCell,
        dateCell: styled(BaseCell)`
            color: ${colors.g400};
        `
    },
}

export default S;