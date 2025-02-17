import React from 'react';
import styled, {css} from "styled-components";
import HasHeader from "@designsystem/component/header/hasHeader";
import makeText from "@designsystem/foundation/text/TextType";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import useAuth from "@hook/useAuth";
import Spacer from "@designsystem/component/Spacer";

function LoginPage() {
    const {signInWithKakao} = useAuth();

    return (
        <HasHeader>
            <Column gap={32} flex={1} $alignItems={'center'} $justifyContent={'center'}>
                <Column gap={0} $alignItems={'center'}>
                    <img src="/linkmarry.png" alt="" width={72} height={72} style={{borderRadius: 12}}/>
                    <Spacer h={8}/>
                    <Text type={'h3'}>링크메리 로그인</Text>
                    {/*todo*/}
                    {/*<Text type={'p4'} customStyle={css`*/}
                    {/*    color: var(--g-500);*/}
                    {/*`}>모바일 청접장으로 결혼을 더욱 특별하게</Text>*/}
                </Column>
                <Row as={'button'} $justifyContent={'center'} $alignItems={'center'} $customStyle={css`
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
                        카카오 로그인
                    </Row>
                </Row>
            </Column>
        </HasHeader>
    );
}

export default LoginPage;