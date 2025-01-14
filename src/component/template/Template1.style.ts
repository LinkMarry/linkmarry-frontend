import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import {LinkMarryFont} from "@designsystem/foundation/text/textType";
import {implementText} from "@designsystem/foundation/text/textProperties";

export const container = styled.div<{ $templateFont: LinkMarryFont }>`
    display: flex;
    flex-direction: column;
    width: 436px;
    align-items: stretch;

    * {
        ${({$templateFont}) => implementText({
            fontFamily: $templateFont
        })};
    }
`;

