import styled, {CSSProperties, css, RuleSet} from "styled-components";

export interface BaseFlexProps {
    $gap?: number;
    $alignItems?: CSSProperties['alignItems'];
    $alignSelf?: CSSProperties['alignSelf'];
    $justifyContent?: CSSProperties['justifyContent'];
    $flex?: CSSProperties['flex'];
    $fill?: string;
    $wrap?: boolean;
    $ui?: RuleSet;
}

export const BaseFlex = styled.div<BaseFlexProps>`
    display: flex;
    ${({$gap, $alignItems, $alignSelf, $justifyContent, $flex, $fill, $wrap, $ui}) => css`
        ${$gap !== undefined ? css`gap: ${$gap}px;` : undefined}
        align-items: ${$alignItems || 'flex-start'};
        align-self: ${$alignSelf};
        justify-content: ${$justifyContent || 'flex-start'};
        flex: ${$flex};
        flex-wrap: ${$wrap ? 'wrap' : 'nowrap'};
        width: ${$fill || 'auto'};
        ${$ui};
    `};
}`;

export const Column = styled(BaseFlex)`
    flex-direction: column;
`;

export const Row = styled(BaseFlex)`
    flex-direction: row;
`;
