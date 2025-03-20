import React, {ComponentPropsWithoutRef} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import Text from "@designsystem/component/Text";
import useResponsive from "@hook/useResponsive";
import View from "@designsystem/core/View";
import Divider from "@designsystem/component/Divider";
import {
    BUSINESS_INFORMATION_URL,
    CUSTOMER_SERVICE_CENTER_URL,
    NAVER_STORE_URL,
    NOTIFICATION_URL,
    PRIVACY_POLICY_URL,
    TERMS_OR_USE_URL
} from "@util/constant";
import {useNavigate} from "react-router-dom";

const detail1 = ['산다(SANDA)', '대표 : 양예성', '주소 : 경상북도 포항시 북구 장량주택로 3번길 6, 301호 (양덕동)', '전화 : 010-5584-3914', '이메일 : official.linkmarry@gmail.com'];
const detail2 = ['사업자등록번호 : 176-24-01729', '통신판매업 신고 : 2024-경북포항-0787호']

function Footer() {
    const {deviceSize} = useResponsive();
    const navigate = useNavigate();

    return (
        <Column as={'footer'} $alignItems={'center'} $ui={css`
            padding: 0 24px;
        `}>
            <Column $gap={40} $alignItems={'stretch'} $ui={css`
                max-width: 1100px;
                width: 100%;
            `}>
                <Divider/>
                <Column $gap={72} $alignItems={'stretch'} $ui={css`
                    padding-bottom: 72px;
                `}>
                    <View $ui={css`
                        display: flex;
                        justify-content: space-between;
                        ${deviceSize === 'mobile' && css`
                            flex-direction: column;
                            gap: 24px;
                        `};
                    `}>
                        <Column $gap={4}>
                            <Text type={'caption2'} bold={true} ui={css`
                                color: var(--g-600);
                            `} onClick={() => window.open(CUSTOMER_SERVICE_CENTER_URL)}>고객센터</Text>
                            <Text type={'caption1'} ui={css`
                                color: var(--g-500);
                            `}>고객센터 운영시간 연중무휴 24시간 운영</Text>
                        </Column>
                        <View $ui={css`
                            display: flex;
                            ${deviceSize === 'mobile' && css`
                                flex-direction: column;
                                gap: 16px;
                            `};
                        `}>
                            <Column $gap={4} $ui={css`
                                width: 180px;
                            `}>
                                <Item text={'모바일 청첩장'} onClick={() => navigate('/mypage/wedding')}/>
                                <Item text={'회원정보'} onClick={() => navigate('/mypage/info')}/>
                            </Column>
                            <Column $gap={4} $ui={css`
                                width: 180px;
                            `}>
                                <Item text={'공지사항'} onClick={() => window.open(NOTIFICATION_URL)}/>
                                <Item text={'네이버스토어'} onClick={() => window.open(NAVER_STORE_URL)}/>
                            </Column>
                            <Column $gap={4} $ui={css`
                                width: 180px;
                            `}>
                                <Item text={'이용약관'} onClick={() => window.open(TERMS_OR_USE_URL)}/>
                                <Item text={'개인정보처리방침'} onClick={() => window.open(PRIVACY_POLICY_URL)}/>
                                <Item text={'사업자 정보 확인'} onClick={() => window.open(BUSINESS_INFORMATION_URL)}/>
                            </Column>
                        </View>
                    </View>
                    <Column $gap={4}>
                        {deviceSize === 'desktop' ? (
                            <>
                                <Row $gap={16}>
                                    {detail1.map((text, index) => (
                                        <Text key={index} type={'caption2'} ui={css`
                                            color: var(--g-500);
                                        `}>{text}</Text>
                                    ))}
                                </Row>
                                <Row $gap={16}>
                                    {detail2.map((text, index) => (
                                        <Text key={index} type={'caption2'} ui={css`
                                            color: var(--g-500);
                                        `}>{text}</Text>
                                    ))}
                                </Row>
                            </>
                        ) : (
                            <>
                                {[...detail1, ...detail2].map(text => (
                                    <Text type={'caption2'} ui={css`
                                        color: var(--g-500);
                                    `}>{text}</Text>
                                ))}
                            </>
                        )}
                    </Column>
                </Column>
            </Column>
        </Column>
    );
}

function Item(props: {
    text: string;
} & ComponentPropsWithoutRef<'div'>) {
    return (
        <Text type={'caption2'} bold={true} ui={css`
            color: var(--g-600);
            cursor: pointer;
        `} {...props}>{props.text}</Text>
    );
}

export default Footer;
