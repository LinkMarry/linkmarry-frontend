import {View} from "~/components";
import {css, cx} from "@linaria/core";
import MyPageSidebarItem from "~/routes/mypage/components/MyPageSidebarItem.tsx";
import {useNavigate} from "react-router";
import {notMobileStyle} from "~/style/responsive";

const MyPageDetailSidebar = () => {
    const navigate = useNavigate();

    return (
        <View
            ui={cx(
                css`
                    gap: 32px;
                    width: 216px;
                `,
                notMobileStyle,
            )}
        >
            <MyPageSidebarItem
                icon={"ExpandArrow"}
                text={"돌아가기"}
                onClick={() => {
                    navigate(-1);
                }}
            />
        </View>
    );
};

export default MyPageDetailSidebar;
