import styled from "styled-components";
import {LinkMarryFont} from "@designsystem/foundation/text/textType";
import {implementText} from "@designsystem/foundation/text/textProperties";

export const container = styled.div<{ $templateFont: LinkMarryFont }>`
    display: flex;
    flex-direction: column;
    max-width: 436px;
    width: 100vw;
    align-items: stretch;

    *:not(.override-font) {
        ${({$templateFont}) => implementText({
            fontFamily: $templateFont
        })};
    }
`;