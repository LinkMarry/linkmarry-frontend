import React, {ComponentPropsWithoutRef} from 'react';
import {Column, Row} from "@designsystem/component/core/FlexLayout";
import Spacer from "@designsystem/component/Spacer";
import {css} from "styled-components";
import Text from "@designsystem/component/Text";
import useResponsive from "@hook/useResponsive";
import device from "@remote/enumeration/Device";
import CustomStyle from "@designsystem/component/core/CustomStyle";

const detail1 = ['산다(SANDA)', '대표 : 양예성', '주소 : 경상북도 포항시 북구 장량주택로 3번길 6, 301호 (양덕동)', '전화 : 010-5584-3914', '이메일 : official.linkmarry@gmail.com'];
const detail2 = ['사업자등록번호 : 176-24-01729', '통신판매업 신고 : 2024-경북포항-0787호']

function Footer() {
    const {deviceSize} = useResponsive();

    return (
        <Column gap={72} $alignItems={'stretch'} $customStyle={css`
            padding-bottom: 72px;
        `}>
            <CustomStyle $customStyle={css`
                display: flex;
                justify-content: space-between;
                ${deviceSize === 'mobile' && css`
                    flex-direction: column;
                    gap: 24px;
                `};
            `}>
                <Column gap={4}>
                    <Text type={'caption2'} bold={true} customStyle={css`
                        color: var(--g-600);
                    `} onClick={() => window.open('https://pf.kakao.com/_BzqCn')}>고객센터</Text>
                    <Text type={'caption1'} customStyle={css`
                        color: var(--g-500);
                    `}>고객센터 운영시간 연중무휴 24시간 운영</Text>
                </Column>
                <CustomStyle $customStyle={css`
                    display: flex;
                    ${deviceSize === 'mobile' && css`
                        flex-direction: column;
                        gap: 16px;
                    `};
                `}>
                    <Column gap={4} $customStyle={css`
                        width: 180px;
                    `}>
                        <Item text={'모바일 청첩장'}/>
                        <Item text={'회원정보'}/>
                    </Column>
                    <Column gap={4} $customStyle={css`
                        width: 180px;
                    `}>
                        <Item text={'공지사항'}/>
                        <Item text={'네이버스토어'}/>
                    </Column>
                    <Column gap={4} $customStyle={css`
                        width: 180px;
                    `}>
                        <Item text={'이용약관'}
                              onClick={() => window.open('https://0start.notion.site/18598205e3a3809e9543f6d52b4fc91b?pvs=4')}/>
                        <Item text={'개인정보처리방침'}
                              onClick={() => window.open('https://0start.notion.site/212c52cf731445bb803be1e62c694ea5?pvs=4')}/>
                        <Item text={'사업자 정보 확인'}/>
                    </Column>
                </CustomStyle>
            </CustomStyle>
            <Column gap={4}>
                {deviceSize === 'desktop' ? (
                    <>
                        <Row gap={16}>
                            {detail1.map(text => (
                                <Text type={'caption2'} customStyle={css`
                                    color: var(--g-500);
                                `}>{text}</Text>
                            ))}
                        </Row>
                        <Row gap={16}>
                            {detail2.map(text => (
                                <Text type={'caption2'} customStyle={css`
                                    color: var(--g-500);
                                `}>{text}</Text>
                            ))}
                        </Row>
                    </>
                ) : (
                    <>
                        {[...detail1, ...detail2].map(text => (
                            <Text type={'caption2'} customStyle={css`
                                color: var(--g-500);
                            `}>{text}</Text>
                        ))}
                    </>
                )}
            </Column>
        </Column>
    )
}

function Item(props: {
    text: string;
} & ComponentPropsWithoutRef<'div'>) {
    return (
        <Text type={'caption2'} bold={true} customStyle={css`
            color: var(--g-600);
        `} {...props}>{props.text}</Text>
    );
}

export default Footer;
