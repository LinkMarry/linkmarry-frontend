import {Column} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import useMyPageDefault from "@src/feature/mypage/index/useMyPageDefault";
import {useAuth} from "@src/hook/useAuth";
import MyPageSidebarItem from "@src/feature/mypage/component/MyPageSidebarItem";
import {notMobileStyle} from "@src/hook/ResponsiveSwitch.tsx";

function MyPageIndexSidebar() {
    const {currentSidebar, navigate} = useMyPageDefault();
    const {signOut} = useAuth();

    return (
        <Column $gap={32} $alignItems={'stretch'} $ui={css`
            width: 216px;
            ${notMobileStyle};
        `}>
            <Column $alignItems={'stretch'} $gap={4}>
                <MyPageSidebarItem icon={'Envelope'} text={'모바일 청첩장'} selected={currentSidebar === 'wedding'}
                                   onClick={() => navigate('wedding')}/>
                <MyPageSidebarItem icon={'PersonLine'} text={'회원정보'} selected={currentSidebar === 'info'} onClick={() => navigate('info')}/>
            </Column>
            <MyPageSidebarItem icon={'StopArrow'} text={'로그아웃'} selected={currentSidebar === 'logout'} onClick={() => {
                signOut();
            }}/>
        </Column>
    );
}


export default MyPageIndexSidebar;
