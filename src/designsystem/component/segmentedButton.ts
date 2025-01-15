import styled, {css} from "styled-components";
import colors from "@designsystem/foundation/colors";
import makeText from "@designsystem/foundation/text/textType";


const SegmentedButton = styled.button<{ selected: boolean; }>`
    height: 44px;
    border-radius: 8px;
    background: ${colors.white};
    cursor: pointer;
    flex: 1;
    ${({selected}) => selected ? css`
        border: 2px solid ${colors.p800};
        color: ${colors.p800};
        ${makeText('p4')};
    ` : css`
        border: 2px solid ${colors.g200};
        color: ${colors.g400};
        ${makeText('p5')};
    `}
`;

export default SegmentedButton;