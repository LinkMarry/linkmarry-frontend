import styled, {RuleSet} from "styled-components";

const CustomStyle = styled.div<{
    $customStyle: RuleSet;
}>`
    ${({$customStyle}) => $customStyle};
`;

export default CustomStyle;