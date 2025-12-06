import {Outlet} from "react-router-dom";
import MyPageDetailSidebar from "@src/feature/mypage/detail/component/MyPageDetailSidebar";

function MyPageDetailLayout() {
    return <>
        <MyPageDetailSidebar/>
        <Outlet/>
    </>
}

export default MyPageDetailLayout;
