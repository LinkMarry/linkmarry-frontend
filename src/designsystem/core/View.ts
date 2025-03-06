import styled, {RuleSet} from "styled-components";

const View = styled.div<{
    ui: RuleSet;
}>`
    ${({ui}) => ui};
`;

export default View;
