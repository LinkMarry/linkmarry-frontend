import React from 'react';
import styled from "styled-components";
import {Column} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import {TemplateName, templateNameRecord} from "@remote/value/Template";
import Spacer from "@designsystem/component/spacer";

interface TemplateCellProps {
    templateName: TemplateName;
}

function TemplateCell(
    {
        templateName
    }: TemplateCellProps
) {
    return (
        <S.container>
            <Spacer/>
            <S.img
                src={templateNameRecord[templateName].imgSrc}
                alt=""
            />
            <Spacer/>
            <Column gap={4} padding={'20px'}>
                <Text type={'p2'}>{templateName}</Text>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
        border-radius: 12px;
        overflow: hidden;
    `,
    img: styled.img`
        display: flex;
        width: 100%;
        object-fit: cover;
    `
}

export default TemplateCell;