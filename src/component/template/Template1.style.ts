import styled, {css} from "styled-components";
import colors from "@designsystem/foundation/colors";
import {hideScrollBar} from "@util/css.util";

export const container = styled.div`
    display: flex;
    flex-direction: column;
    width: 436px;
    align-items: stretch;
`;

export const container1 = {
    root: styled.div<{ background: string }>`
        display: flex;
        flex-direction: column;
        padding: 44px 30px;
        background: ${({background}) => background};
        align-items: stretch;
    `,
    titleWrapper: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 23px 44px 23px;
        gap: 36px;
    `,
    title: styled.span`
        color: ${colors.black};
        font-family: LINESeedKR-Bd, serif !important;
        font-size: 20px;
    `,
    descriptionWrapper: styled.span`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        color: ${colors.black};
    `,
    img: styled.img`
        display: flex;
        width: 100%;
        height: 512px;
        object-fit: cover;
        border-radius: 1000px 1000px 0 0;
    `
};

export const container2 = {
    root: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 92px 22px;
        background: ${colors.white};
        gap: 40px;
    `,
    table: styled.table`
        display: flex;
        flex-direction: column;
        margin: 24px 19px;
        gap: 8px;
        align-items: stretch;

        thead {
            display: flex;
            padding: 12px 20px;

            tr {
                display: flex;
                justify-content: space-between;
                color: ${colors.g500};
                flex: 1;
            }
        }

        tbody {
            display: flex;
            flex-direction: column;
            gap: 4px;

            tr {
                display: flex;

                td {
                    &:first-child, &:last-child {
                        opacity: 0.4;
                    }

                    display: flex;
                    flex: 1;
                    align-items: center;
                    justify-content: center;
                    height: 48px;
                }
            }
        }
    `,
    dateCell: styled.div`
        display: flex;
        width: 64px;
        padding: 17px 16px 16px 16px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        gap: 4px;
        background: ${colors.white};
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.16);
    `
};

export const container3 = {
    root: styled.div`
        display: flex;
        flex-direction: column;
        background: #F7F7F2;
        padding: 92px 60px;
        align-items: stretch;
    `
};

export const container4 = {
    root: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${colors.white};
        padding: 92px 0;
        gap: 40px;
    `,
    wrapper: styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-self: stretch;
        overflow-x: hidden;
    `,
    scroll: styled.div`
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
        overflow-y: hidden;
        display: flex;
        gap: 8px;
        ${hideScrollBar};
    `,
    img: styled.img<{ $rootWidth: number }>`
        display: flex;
        ${({$rootWidth}) => css`
            width: ${$rootWidth - 34 * 2}px;

            &:first-child {
                margin-left: ${$rootWidth - 34}px;
            }

            &:last-child {
                margin-right: ${$rootWidth - 34}px;
            }
        `};
        height: 517px;
        border-radius: 12px;
        scroll-snap-align: center;
    `,
    indicatorWrapper: styled.div`
        display: flex;
        gap: 8px;
        align-self: center;
    `,
    indicator: styled.span<{ selected: boolean }>`
        display: flex;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        ${({selected}) => css`
            background: ${selected ? colors.black : colors.g200};
        `};
    `
};

export const container5 = {
    root: styled.div<{ background: string }>`
        display: flex;
        flex-direction: column;
        background: ${({background}) => background};
        align-items: stretch;
    `,
    kakaoMap: styled.div`
        align-self: stretch;
        height: 307px;
    `
};

export const container6 = {
    root: styled.div`
        display: flex;
        flex-direction: column;
        padding: 92px 60px;
        background: ${colors.white};
        align-items: stretch;
    `
};

export const container7 = {
    root: styled.div<{ background: string }>`
        display: flex;
        flex-direction: column;
        padding: 92px 30px;
        gap: 40px;
        background: ${({background}) => background};
        align-items: stretch;
    `,
    comment: styled.div`
        display: flex;
        flex-direction: column;
        padding: 24px;
        gap: 16px;
        background: ${colors.white};
        border-radius: 12px;
    `
}