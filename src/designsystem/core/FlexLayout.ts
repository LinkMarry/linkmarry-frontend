import styled, {CSSProperties, css, RuleSet} from "styled-components";

export interface BaseFlexProps {
    gap?: number;
    columnGap?: number;
    rowGap?: number;
    $alignItems?: CSSProperties['alignItems'];
    $alignSelf?: CSSProperties['alignSelf'];
    $justifyContent?: CSSProperties['justifyContent'];
    flex?: CSSProperties['flex'];
    fill?: string;
    $wrap?: boolean;
    css?: RuleSet;
}

export const BaseFlex = styled.div<BaseFlexProps>`
    display: flex;
    ${({gap, rowGap, columnGap, $alignItems, $alignSelf, $justifyContent, flex, fill, $wrap, css: style}) => css`
        ${gap !== undefined ? css`gap: ${gap}px;` : undefined}
        ${rowGap !== undefined ? css`row-gap: ${rowGap}px;` : undefined}
        ${columnGap !== undefined ? css`column-gap: ${columnGap}px;` : undefined}
        align-items: ${$alignItems || 'flex-start'};
        align-self: ${$alignSelf};
        justify-content: ${$justifyContent || 'flex-start'};
        flex: ${flex};
        flex-wrap: ${$wrap ? 'wrap' : 'nowrap'};
        width: ${fill || 'auto'};
        ${style};
    `};
}`;

export const Column = styled(BaseFlex)`
    flex-direction: column;
`;

export const Row = styled(BaseFlex)`
    flex-direction: row;
`;
