import React, {HTMLAttributes} from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import styled from "styled-components";

interface FooterTemplateProps extends HTMLAttributes<HTMLDivElement> {
    background: string;
}

function FooterTemplate(
    {
        background,
        ...props
    }: FooterTemplateProps
) {
    return (
        <Container background={background} {...props}>
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
                    <Text size={14} weight={300} color={colors.g600}>카카오톡으로 청첩장 보내기</Text>
                </Row>
                <Row gap={4} $alignItems={'center'}>
                    <Text size={14} weight={300} color={colors.g300}>Copyrightⓒ2025.</Text>
                    <Text size={14} weight={300} color={colors.g300}>All rights reserved.</Text>
                </Row>
            </Column>
        </Container>
    );
}

const Container = styled.div<{background: string}>`
    display: flex;
    flex-direction: column;
    background: ${({background}) => background};
`

export default FooterTemplate;