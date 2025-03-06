import styled, {RuleSet} from "styled-components";

const CustomStyle = styled.div<{
    css: RuleSet;
}>`
    ${({css}) => css};
`;

export default CustomStyle;
