import styled from "styled-components";
import colors from "@designsystem/foundation/colors";

export const container = styled.div`
    display: flex;
    flex-direction: column;
    width: 436px;
    align-items: stretch;
`;

export const container1 = {
    root: styled.div`
        display: flex;
        flex-direction: column;
        padding: 44px 30px;
        background: #F7F7F2;
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
        box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.16);
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
    `
};

export const container5 = {
    root: styled.div`
        display: flex;
        flex-direction: column;
        background: #F7F7F2;
        align-items: stretch;
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
    root: styled.div`
        display: flex;
        flex-direction: column;
        padding: 92px 30px;
        gap: 40px;
        background: #F7F7F2;
        align-items: stretch;
    `,
    comment: styled.div`
        display: flex;
        padding: 24px;
    `
}