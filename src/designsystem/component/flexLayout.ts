import styled, {CSSProperties, css, RuleSet} from "styled-components";

export interface FlexLayoutProps {
    flexDirection?: CSSProperties["flexDirection"];
    justifyContent?: CSSProperties["justifyContent"];
    alignItems?: CSSProperties["alignItems"];
    columnGap?: CSSProperties["columnGap"];
    rowGap?: CSSProperties["rowGap"];
    gap?: CSSProperties["gap"];
}

export const FlexLayout = ({...props}: FlexLayoutProps) => {
    return css`
        display: flex;

        flex-direction: ${props.flexDirection};
        justify-content: ${props.justifyContent};
        align-items: ${props.alignItems};

        column-gap: ${props.columnGap};
        row-gap: ${props.rowGap};
        gap: ${props.gap};
    `;
};

export interface BaseFlexProps {
    gap?: number;
    columnGap?: number;
    rowGap?: number;
    $alignItems?: CSSProperties['alignItems'];
    $alignSelf?: CSSProperties['alignSelf'];
    $justifyContent?: CSSProperties['justifyContent'];
    flex?: CSSProperties['flex'];
    fill?: string;
    padding?: CSSProperties["padding"];
    $wrap?: boolean;
    background?: CSSProperties['background'];
    $customStyle?: RuleSet;
}

export const BaseFlex = styled.div<BaseFlexProps>`
    display: flex;
    ${({gap, rowGap, columnGap, $alignItems, $alignSelf, $justifyContent, flex, fill, padding, $wrap, background, $customStyle}) => css`
        ${gap !== undefined ? css`gap: ${gap}px;` : undefined}
        ${rowGap !== undefined ? css`row-gap: ${rowGap}px;` : undefined}
        ${columnGap !== undefined ? css`column-gap: ${columnGap}px;` : undefined}
        align-items: ${$alignItems || 'flex-start'};
        align-self: ${$alignSelf};
        justify-content: ${$justifyContent || 'flex-start'};
        flex: ${flex};
        flex-wrap: ${$wrap ? 'wrap' : 'nowrap'};
        width: ${fill || 'auto'};
        background: ${background || 'transparent'};
        padding: ${padding};
        ${$customStyle};
    `}}
`;

export const Column = styled(BaseFlex)`
    flex-direction: column;
`;

export const Row = styled(BaseFlex)`
    flex-direction: row;
`;