import styled, {css} from "styled-components";

const SegmentedButton = styled.button<{ selected: boolean; }>`
    height: 44px;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    flex: 1;
    ${({selected}) => selected ? css`
        border: 2px solid var(--p-800);
        color: var(--p-800);
    ` : css`
        border: 2px solid var(--g-200);
        color: var(--g-400);
    `};
`;

export default SegmentedButton;
