import React from 'react';
import HasHeader from "@designsystem/component/header/hasHeader";
import Text from "@designsystem/component/Text";
import TemplateCell from "@page/templates/component/TemplateCell";
import {templateNames} from "@remote/value/Template";
import {Column} from "@designsystem/component/FlexLayout";
import {css} from "styled-components";
import GuideLine from "@util/GuideLine";
import CustomStyle from "@designsystem/component/CustomStyle";

function TemplatesPage() {
    return (
        <HasHeader>
            <Column flex={1} $customStyle={css`
                padding: 64px 124px;
                gap: 52px;
                overflow-y: scroll;

                @media screen and (max-width: ${GuideLine.Tablet}px) {
                    padding: 48px 64px;
                }

                @media screen and (max-width: ${GuideLine.Mobile}px) {
                    padding: 32px;
                }
            `}>
                <Text type={'h5'}>모바일 청첩장 템플릿</Text>
                <CustomStyle $customStyle={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr); /* 3열 구성 */
                    grid-column-gap: 44px;
                    grid-row-gap: 68px;

                    @media screen and (max-width: ${GuideLine.Desktop}px) {
                        grid-template-columns: repeat(2, 1fr); /* 2열 구성 */
                    }

                    @media screen and (max-width: ${GuideLine.Mobile}px) {
                        grid-template-columns: repeat(1, 1fr); /* 1열 구성 */
                    }
                `}>
                    {templateNames.map(templateName => (
                        <TemplateCell templateName={templateName}/>
                    ))}
                </CustomStyle>
            </Column>
        </HasHeader>
    );
}

export default TemplatesPage;