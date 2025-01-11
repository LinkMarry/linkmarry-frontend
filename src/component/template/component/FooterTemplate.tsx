import React, {HTMLAttributes} from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";

interface FooterTemplateProps extends HTMLAttributes<HTMLDivElement> {
    addFontSize: number;
}

function FooterTemplate(
    {
        addFontSize,
        ...props
    }: FooterTemplateProps
) {
    return (
        <Column {...props}>
            <Column
                gap={28}
                style={{
                    width: '100%',
                    padding: '32px 0'
                }}
                $alignItems={'center'}
            >
                <Row gap={8} $alignItems={'center'}>
                    <img src={'/kakao.svg'} alt={'kakao'} width={20} height={20}/>
                    <Text
                        text={'카카오톡으로 청첩장 보내기'} size={14 + addFontSize} weight={300}
                        color={colors.g600}
                    />
                </Row>
                <Row gap={4} $alignItems={'center'}>
                    <Text
                        text={'Copyrightⓒ2025.'} size={14 + addFontSize} weight={300}
                        color={colors.g300}
                    />
                    <Text
                        text={'All rights reserved.'} size={14 + addFontSize} weight={300}
                        color={colors.g300}
                    />
                </Row>
            </Column>
        </Column>
    );
}

export default FooterTemplate;