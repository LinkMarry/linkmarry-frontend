import React, {HTMLAttributes} from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";

function FooterTemplate(props: HTMLAttributes<HTMLDivElement>) {
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
                    <span>카카오톡으로 청첩장 보내기</span>
                </Row>
                <Row>
                    <span>Copyrightⓒ2025.</span>
                    <span>All rights reserved.</span>
                </Row>
            </Column>
        </Column>
    );
}

export default FooterTemplate;