import {css, cx} from "@linaria/core";
import useMyPageIndex from "~/routes/mypage/index/useMyPageIndex.ts";
import {useAuth} from "~/hook/useAuth.tsx";
import MyPageSidebarItem from "~/routes/mypage/components/MyPageSidebarItem.tsx";
import {notMobileStyle} from "~/hook/ResponsiveSwitch.tsx";
import View from "~/userinterface/core/View.tsx";

function MyPageIndexSidebar() {
    const {currentSidebar, navigate} = useMyPageIndex();
    const {signOut} = useAuth();

    return (
        <View ui={cx(
            css`
                gap: 32px;
                width: 216px;
            `,
            notMobileStyle
        )}>
            <View ui={css`
                gap: 4px;
            `}>
                <MyPageSidebarItem icon={'Envelope'} text={'모바일 청첩장'} selected={currentSidebar === 'wedding'}
                                   onClick={() => navigate('wedding')}/>
                <MyPageSidebarItem icon={'PersonLine'} text={'회원정보'} selected={currentSidebar === 'info'}
                                   onClick={() => navigate('info')}/>
            </View>
            <MyPageSidebarItem icon={'StopArrow'} text={'로그아웃'} selected={currentSidebar === 'logout'} onClick={() => {
                signOut();
            }}/>
        </View>
    );
}


export default MyPageIndexSidebar;
