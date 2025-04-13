import React, {ComponentPropsWithoutRef} from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import {css} from "styled-components";
import {backgroundStyle} from "@src/infrastructure/network/value/WeddingDesign";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";

interface FooterTemplateProps extends ComponentPropsWithoutRef<'div'> {
    background: string;
}

function FooterTemplate(
    {
        background,
        ...props
    }: FooterTemplateProps
) {
    return (
        <Column $alignItems={'stretch'} $ui={css`
            background: ${backgroundStyle(background)};
        `} {...props}>
            <Column
                $gap={28}
                style={{
                    width: '100%',
                    padding: '32px 0'
                }}
                $alignItems={'center'}
            >
                <Row $gap={8} $alignItems={'center'}>
                    <Icon iconType={IconType.Kakao} size={20}/>
                    <Text size={14} weight={300} ui={css`
                        color: var(--g-600);
                    `}>카카오톡으로 청첩장 보내기</Text>
                </Row>
                <Row $gap={4} $alignItems={'center'}>
                    <Text size={14} weight={300} ui={css`
                        color: var(--g-300);
                    `}>Copyrightⓒ2025.</Text>
                    <Text size={14} weight={300} ui={css`
                        color: var(--g-300);
                    `}>All rights reserved.</Text>
                </Row>
            </Column>
        </Column>
    );
}

export default FooterTemplate;
