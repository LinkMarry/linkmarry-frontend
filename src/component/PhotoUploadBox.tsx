import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import {css} from "styled-components";

const PhotoUploadBox = () => {
    return (
        <Column gap={12} $alignItems={'center'} $customStyle={css`
            padding: 56px 0;
            border-radius: 8px;
            background: var(--g-50);
            cursor: pointer;
        `}>
            <Row gap={8} $alignItems={'center'}>
                <Icon iconType={IconType.AddPhoto}/>
                <Text type={'p2'} customStyle={css`
                    color: var(--g-900);
                `}>사진을 첨부해 주세요</Text>
            </Row>
            <Text type={'caption1'} customStyle={css`
                color: var(--g-400);
            `}>업로드한 사진은 대표 이미지로 등록됩니다.</Text>
        </Column>
    );
};

export default PhotoUploadBox;
