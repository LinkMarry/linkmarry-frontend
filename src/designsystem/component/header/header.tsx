import React from 'react';
import styled, {css} from "styled-components";
import {Row} from "@designsystem/component/FlexLayout";
import Spacer from "@designsystem/component/Spacer";
import makeText from "@designsystem/foundation/text/TextType";
import useAuth from "@hook/useAuth";
import Button from "@designsystem/component/Button";
import {useNavigate} from "react-router-dom";

function Header() {
    const {authorized} = useAuth();
    const navigate = useNavigate();

    return (
        <Row $alignItems={'center'} $customStyle={css`
            width: 100vw;
            min-height: 76px;
            border: 1px solid var(--g-200);
        `}>
            <Row
                flex={1}
                $alignItems={'center'}
                style={{
                    marginLeft: 128,
                    marginRight: 128,
                }}
                gap={66}
            >
                <img src={'/logo.svg'} width={103} alt={'logo'} style={{cursor: 'pointer'}} onClick={() => {
                    navigate('/');
                }}/>
                <Row $customStyle={css`
                    gap: 44px;
                    align-items: center;
                    flex: 1;
                `}>
                    <S.navItem onClick={() => navigate('/templates')}>모바일 청첩장</S.navItem>
                    <S.navItem onClick={() => window.open('https://smartstore.naver.com/linkmarry')}>스토어 이동</S.navItem>
                    <S.navItem onClick={() => navigate('/notification')}>공지사항</S.navItem>
                    <Spacer/>
                    {authorized ? (
                        <S.navItem onClick={() => {
                            navigate('/my-page');
                        }}>마이페이지</S.navItem>
                    ) : (
                        <Button text={'로그인'} onClick={() => navigate('/login')} buttonType={'outlined'}/>
                    )}
                </Row>
            </Row>
        </Row>
    );
}

const S = {
    navItem: styled.li`
        display: flex;
        white-space: nowrap;
        cursor: pointer;
    `,
};

export default Header;