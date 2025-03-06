import React from 'react';
import {css} from "styled-components";
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";

const FileUploadBox = () => {
    return (
        <Column gap={12} alignment={'center'} ui={css`
            padding: 56px 0;
            border-radius: 8px;
            background: var(--g-50);
            cursor: pointer;
        `}>
            <Text type={'p2'} ui={css`
                color: var(--g-900);
            `}>파일을 첨부해 주세요</Text>
            <Text type={'caption1'} ui={css`
                color: var(--g-400);
            `}>mp4 파일 형식만 업로드 가능합니다.</Text>
        </Column>
    );
};

export default FileUploadBox;
