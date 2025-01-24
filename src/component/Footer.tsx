import React from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";
import colors from "@designsystem/foundation/colors";
import Spacer from "@designsystem/component/spacer";
import Text from "@designsystem/component/text";
import styled from "styled-components";
import makeText from "@designsystem/foundation/text/textType";

function Footer() {
    return (
        <S.container padding={'60px 108px'} background={colors.g600}>
            <Column gap={16}>
                <img src="/Linkmarry.svg" alt=""/>
                <Column>
                    상호 : 산다(SANDA) &nbsp;|&nbsp; 대표 : 양예성
                    <br/>
                    사업자등록번호 안내 : 176-24-01729
                    <br/>
                    통신판매업 신고 제 : 2024-경북포항-0787호
                    <br/>
                    전화 : 010-5584-3914 &nbsp;|&nbsp; 이메일 : official.linkmarry@gmail.com
                    <br/>
                    주소 : 경상북도 포항시 북구 장량주택로 3번길 6, 301호 (양덕동)
                </Column>
            </Column>
            <Spacer/>
            <Column $alignSelf={'flex-end'}>
                <Row $alignItems={'center'} gap={16}>
                        <span
                            style={{cursor: 'pointer'}}
                            onClick={() => window.open('https://0start.notion.site/18598205e3a3809e9543f6d52b4fc91b?pvs=4')}>이용약관</span>
                    <span>|</span>
                    <span
                        style={{cursor: 'pointer'}}
                        onClick={() => window.open('https://0start.notion.site/212c52cf731445bb803be1e62c694ea5?pvs=4')}>개인정보처리방침</span>
                    <span>|</span>
                    <span style={{cursor: 'pointer'}}
                          onClick={() => window.open('https://pf.kakao.com/_BzqCn')}>고객센터</span>
                </Row>
                고객센터 운영시간 연중무휴 24시간 운영
            </Column>
        </S.container>
    );
}

const S = {
    container: styled(Row)`
        ${makeText('p5')};
        color: ${colors.g300};
    `,
}

export default Footer;