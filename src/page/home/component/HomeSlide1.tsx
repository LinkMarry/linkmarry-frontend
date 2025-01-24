import React from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";
import Button from "@designsystem/component/button";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import Spacer from "@designsystem/component/spacer";
import {useNavigate} from "react-router-dom";

function HomeSlide1() {
    const navigate = useNavigate();
    
    return (
        <Row padding={'48px 169px'} $alignItems={'center'}>
            <Column gap={32}>
                <Column gap={8}>
                    <Text type={'h1'}>특별한 결혼을 위해</Text>
                    <Text type={'p5'} color={colors.g500}>특별한 결혼을 위해</Text>
                </Column>
                <Row gap={8}>
                    <Button onClick={() => navigate('/dashboard')} text={'청첩장 제작'}/>
                    <Button text={'샘플 보기'} role={'secondary'}/>
                </Row>
            </Column>
            <Spacer/>
            <div style={{width: 567, height: 567, background: '#D9D9D9'}}></div>
        </Row>
    );
}

export default HomeSlide1;