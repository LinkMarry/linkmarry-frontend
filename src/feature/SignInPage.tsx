import React from 'react';
import {css} from "styled-components";
import MainWrapper from "@src/userinterface/pattern/header/MainWrapper";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import useAuth from "@src/hook/useAuth";
import View from "@src/userinterface/core/View";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";

function SignInPage() {
    const {signInWithKakao} = useAuth();

    return (
        <MainWrapper hasFooter={false}>
            <Column $gap={32} $flex={1} $alignItems={'center'} $justifyContent={'center'}>
                <Column $gap={8} $alignItems={'center'}>
                    <View as={'img'} src="/linkmarry.png" alt="" width={72} height={72} $ui={css`
                        border-radius: 18px;
                    `}/>
                    <Column $gap={4} $alignItems={'center'}>
                        <Text type={'h4'} bold={true}>링크메리 로그인</Text>
                        <Text type={'p3'} ui={css`
                            color: var(--g-500);
                        `}>모바일 청접장으로 결혼을 더욱 특별하게</Text>
                    </Column>
                </Column>
                <Row as={'button'} $justifyContent={'center'} $alignItems={'center'} $ui={css`
                    cursor: pointer;
                    width: 300px;
                    height: 45px;
                    outline: none;
                    border: none;
                    background-color: #FEE500;
                    border-radius: 6px;
                    color: black;
                `} onClick={signInWithKakao}>
                    <Row $gap={6} $alignItems={'center'}>
                        <Icon iconType={IconType.Kakao} size={24}/>
                        <Text type={'p3'} bold={true}>카카오 로그인</Text>
                    </Row>
                </Row>
            </Column>
        </MainWrapper>
    );
}

export default SignInPage;
