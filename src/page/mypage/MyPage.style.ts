import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import makeText from "@designsystem/foundation/text/textType";

const S = {
    container: styled.div`
        display: flex;
        gap: 28px;
        margin: 0 200px;
        flex: 1;
        align-items: flex-start;
    `,
    sideBar: {
        container: styled.div`
            display: flex;
            flex-direction: column;
            width: 216px;
            height: 100%;
            padding: 110px 24px 0 24px;
            align-items: stretch;
            gap: 20px;
        `,
        profileWrapper: styled.div`
            display: flex;
            height: 67px;
            align-items: center;
        `
    },
    baseInfo: {
        container: styled.div`
            display: flex;
            flex-direction: column;
            margin-left: 28px;
            margin-top: 80px;
            padding: 28px 36px;
            flex: 1;
            gap: 38px;
            border: 1px solid ${colors.g200};
            border-radius: 12px;
        `,
        editNameField: styled.input`
            display: flex;
            flex: 1;
            height: 44px;
            border: 1px solid ${colors.black};
            padding: 0 24px;
            border-radius: 8px;
            ${makeText('p4')};
            align-items: center;
            outline: none;
        `,
        nameSettingButton: styled.button`
            display: flex;
            outline: none;
            border: 1px solid ${colors.g300};
            padding: 8px 24px;
            border-radius: 8px;
            background: transparent;
            cursor: pointer;
        `
    }
};

export default S;