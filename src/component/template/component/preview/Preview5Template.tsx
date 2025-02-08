import React, {ComponentProps} from 'react';
import {css} from "styled-components";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import PreviewTemplate from "@src/component/template/component/preview/PreviewTemplate";
import CustomStyle from "@designsystem/component/CustomStyle";

function Preview5Template(
    {
        baseInfo,
        template,
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <Column $alignItems={'stretch'} $customStyle={css`
            background: white;
        `}>
            <CustomStyle as={'img'} src={template.titleImgUrl ?? '/EmptyImage.png'} $customStyle={css`
                display: flex;
                object-fit: cover;
                margin: 48px 28px;
            `}/>
            <Row $alignItems={'center'} gap={20} $justifyContent={'center'} $customStyle={css`
                padding-left: 48px;
            `}>
                <Text size={24} weight={300}>{first.name}</Text>
                <Text size={16} weight={300} customStyle={css`
                    color: var(--g-300);
                `}>and</Text>
                <Text size={24} weight={300}>{second.name}</Text>
            </Row>
        </Column>
    );
}

export default Preview5Template;