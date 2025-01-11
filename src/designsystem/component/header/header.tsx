import React from 'react';
import styled from "styled-components";
import {Row} from "@designsystem/component/flexLayout";
import Spacer from "@designsystem/component/spacer";
import makeText from "@designsystem/foundation/text/textType";
import colors from "@designsystem/foundation/colors";
import useAuth from "@hook/useAuth";
import Button from "@designsystem/component/button";
import {useNavigate} from "react-router-dom";

function Header() {
    const {authorized, signInWithKakao} = useAuth();
    const navigate = useNavigate();

    return (
        <S.container>
            <Row
                flex={1}
                $alignItems={'center'}
                style={{
                    marginLeft: 128,
                    marginRight: 128,
                }}
                gap={66}
            >
                <img src={'/logo.svg'} width={134} alt={'logo'} style={{cursor: 'pointer'}} onClick={() => {
                    navigate('/');
                }}/>
                <S.navItems>
                    <S.navItem onClick={() => navigate('/templates')}>모바일 청첩장</S.navItem>
                    <S.navItem onClick={() => window.open('https://smartstore.naver.com/linkmarry')}>스토어 이동</S.navItem>
                    <S.navItem onClick={() => navigate('/notification')}>공지사항</S.navItem>
                    <Spacer/>
                    {authorized ? (
                        <S.navItem onClick={() => {
                            navigate('/my-page');
                        }}>마이페이지</S.navItem>
                    ) : (
                        <Button text={'로그인'} onClick={signInWithKakao} role={'assistive'}/>
                    )}
                </S.navItems>
            </Row>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        width: 100vw;
        height: 76px;
        align-items: center;
        border: 1px solid ${colors.g200};
    `,
    navItems: styled.ul`
        display: flex;
        gap: 44px;
        align-items: center;
        flex: 1;
    `,
    navItem: styled.li`
        display: flex;
        ${makeText('p5')};
        color: ${colors.black};
        white-space: nowrap;
        cursor: pointer;
    `,
};

export default Header;