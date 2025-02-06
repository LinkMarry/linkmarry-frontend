import React from 'react';
import styled, {css} from "styled-components";
import {Column} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import {TemplateName, templateNameRecord} from "@remote/value/Template";
import Spacer from "@designsystem/component/Spacer";

interface TemplateCellProps {
    templateName: TemplateName;
}

function TemplateCell(
    {
        templateName
    }: TemplateCellProps
) {
    return (
        <Column $customStyle={css`
            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
            border-radius: 12px;
            overflow: hidden;
        `}>
            <Spacer/>
            <S.img
                src={templateNameRecord[templateName].imgSrc}
                alt=""
            />
            <Spacer/>
            <Column gap={4} $customStyle={css`
                padding: 20px;
            `}>
                <Text type={'p2'}>{templateName}</Text>
            </Column>
        </Column>
    );
}

const S = {
    img: styled.img`
        display: flex;
        width: 100%;
        object-fit: cover;
    `
}

export default TemplateCell;