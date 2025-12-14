import {Outlet} from "react-router";
import MyPageIndexSidebar from "~/routes/mypage/index/component/MyPageIndexSidebar.tsx";

function MyPageIndexLayout() {
    return (
        <>
            <MyPageIndexSidebar/>
            <Outlet/>
        </>
    )
}

export default MyPageIndexLayout;
