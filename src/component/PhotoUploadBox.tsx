import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import {css} from "styled-components";

interface Props {
    hasLeadingIcon?: boolean;
    title: string;
    content: string;
}

const PhotoUploadBox = ({hasLeadingIcon = true, title, content}: Props) => {
    return (
        <Column gap={12} $alignItems={'center'} $customStyle={css`
            padding: 56px 0;
            border-radius: 8px;
            background: var(--g-50);
            cursor: pointer;
        `}>
            <Row gap={8} $alignItems={'center'}>
                {hasLeadingIcon && (
                    <Icon iconType={IconType.AddPhoto}/>
                )}
                <Text type={'p2'} customStyle={css`
                    color: var(--g-900);
                `}>{title}</Text>
            </Row>
            <Text type={'caption1'} customStyle={css`
                color: var(--g-400);
            `}>{content}</Text>
        </Column>
    );
};

export default PhotoUploadBox;
