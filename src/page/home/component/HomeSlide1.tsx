import React from 'react';
import {Column, Row} from "@designsystem/component/FlexLayout";
import Button from "@designsystem/component/Button";
import Text from "@designsystem/component/Text";
import Spacer from "@designsystem/component/Spacer";
import {useNavigate} from "react-router-dom";
import {css} from "styled-components";

function HomeSlide1() {
    const navigate = useNavigate();
    
    return (
        <Row $alignItems={'center'} $customStyle={css`
            padding: 48px 169px;
        `}>
            <Column gap={32}>
                <Column gap={8}>
                    <Text type={'h1'}>우리의 소중한 날을 빛낼
                        <br/>
                        완벽한 청첩장</Text>
                    <Text type={'p5'} customStyle={css`
                        color: var(--g-500);
                    `}>빠르고 간편하게 완성되는 특별한 초대장</Text>
                </Column>
                <Row gap={8}>
                    <Button onClick={() => navigate('/dashboard')} text={'청첩장 제작'}/>
                    <Button onClick={() => navigate('/sample')} text={'샘플 보기'} role={'secondary'}/>
                </Row>
            </Column>
            <Spacer/>
            <Row gap={20}>
                <img src="/home/home-phone-1.webp" width={273} alt=""/>
                <img src="/home/home-phone-2.webp" width={273} alt=""/>
            </Row>
        </Row>
    );
}

export default HomeSlide1;