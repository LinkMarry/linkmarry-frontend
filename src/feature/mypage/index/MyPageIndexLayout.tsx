import {Outlet} from "react-router-dom";
import MyPageIndexSidebar from "@src/feature/mypage/index/component/MyPageIndexSidebar";

function MyPageIndexLayout() {
    return (
        <>
            <MyPageIndexSidebar/>
            <Outlet/>
        </>
    )
}

export default MyPageIndexLayout;
