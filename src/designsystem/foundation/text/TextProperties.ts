
import {CSSProperties} from "react";
import {FontFamily} from "@designsystem/foundation/text/TextType";
import {css, RuleSet} from "styled-components";

export default interface TextProperties {
    fontFamily?: FontFamily;
    fontWeight?: CSSProperties['fontWeight'];
    fontSize?: number;
    lineHeight?: CSSProperties['lineHeight'];
}

export function implementText(properties: TextProperties): RuleSet {
    return css`
        ${properties.fontWeight !== undefined && css`font-weight: ${properties.fontWeight};`}
        ${properties.fontSize !== undefined && css`font-size: ${properties.fontSize}px;`}
        ${properties.lineHeight !== undefined && css`line-height: ${properties.lineHeight};`}
        ${properties.fontFamily !== undefined && css`font-family: "${properties.fontFamily}", serif !important;`}
    `;
}
