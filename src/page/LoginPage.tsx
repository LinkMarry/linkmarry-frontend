import React from 'react';
import {css} from "styled-components";
import MainWrapper from "@designsystem/pattern/header/MainWrapper";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import useAuth from "@hook/useAuth";
import Style from "@designsystem/core/Style";

function LoginPage() {
    const {signInWithKakao} = useAuth();

    return (
        <MainWrapper hasFooter={false}>
            <Column gap={32} flex={1} $alignItems={'center'} $justifyContent={'center'}>
                <Column gap={8} $alignItems={'center'}>
                    <Style as={'img'} src="/linkmarry.png" alt="" width={72} height={72} css={css`
                        border-radius: 18px;
                    `}/>
                    <Column gap={4} $alignItems={'center'}>
                        <Text type={'h4'} bold={true}>링크메리 로그인</Text>
                        <Text type={'p3'} customStyle={css`
                            color: var(--g-500);
                        `}>모바일 청접장으로 결혼을 더욱 특별하게</Text>
                    </Column>
                </Column>
                <Row as={'button'} $justifyContent={'center'} $alignItems={'center'} css={css`
                    cursor: pointer;
                    width: 300px;
                    height: 45px;
                    outline: none;
                    border: none;
                    background-color: #FEE500;
                    border-radius: 6px;
                    color: black;
                `} onClick={signInWithKakao}>
                    <Row gap={6} $alignItems={'center'}>
                        <img src={'/kakao.svg'} alt="" width={24} height={24}/>
                        <Text type={'p3'} bold={true}>카카오 로그인</Text>
                    </Row>
                </Row>
            </Column>
        </MainWrapper>
    );
}

export default LoginPage;
