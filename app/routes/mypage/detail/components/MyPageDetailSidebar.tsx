import {css, cx} from "@linaria/core";
import MyPageSidebarItem from "~/routes/mypage/components/MyPageSidebarItem.tsx";
import {useNavigate} from "react-router";
import {notMobileStyle} from "~/hook/ResponsiveSwitch.tsx";
import View from "~/userinterface/core/View.tsx";

const MyPageDetailSidebar = () => {
    const navigate = useNavigate();

    return (
        <View ui={cx(
            css`
                gap: 32px;
                width: 216px;
            `,
            notMobileStyle
        )}>
            <MyPageSidebarItem icon={'ExpandArrow'} text={'돌아가기'} onClick={() => {
                navigate(-1);
            }}/>
        </View>
    );
};

export default MyPageDetailSidebar;
