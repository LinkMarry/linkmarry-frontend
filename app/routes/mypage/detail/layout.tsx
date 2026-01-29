import {Outlet} from "react-router";
import MyPageDetailSidebar from "~/routes/mypage/detail/components/MyPageDetailSidebar.tsx";

function MyPageDetailLayout() {
    return <>
        <MyPageDetailSidebar/>
        <Outlet/>
    </>
}

export default MyPageDetailLayout;
