import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import useMyPageDefault from "@page/mypage/default/useMyPageDefault";
import useAuth from "@hook/useAuth";
import MyPageSidebarItem from "@page/mypage/component/MyPageSidebarItem";
import {IconType} from "@designsystem/foundation/Icon";

function MyPageDefaultSidebar() {
    const {currentSidebar, navigate} = useMyPageDefault();
    const {signOut} = useAuth();

    return (
        <Column $gap={32} $alignItems={'stretch'} $ui={css`
            width: 216px;
        `}>
            <Column $alignItems={'stretch'} $gap={4}>
                <MyPageSidebarItem icon={IconType.Envelope} text={'모바일 청첩장'} selected={currentSidebar === 'wedding'}
                                   onClick={() => navigate('wedding')}/>
                <MyPageSidebarItem icon={IconType.PersonLine} text={'회원정보'} selected={currentSidebar === 'info'} onClick={() => navigate('info')}/>
            </Column>
            <MyPageSidebarItem icon={IconType.StopArrow} text={'로그아웃'} selected={currentSidebar === 'logout'} onClick={() => {
                signOut();
            }}/>
        </Column>
    );
}


export default MyPageDefaultSidebar;
