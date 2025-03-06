import styled, {RuleSet} from "styled-components";

const Style = styled.div<{
    css: RuleSet;
}>`
    ${({css}) => css};
`;

export default Style;
