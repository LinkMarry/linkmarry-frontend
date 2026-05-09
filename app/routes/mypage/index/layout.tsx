import {Outlet} from "react-router";
import MyPageIndexSidebar from "~/routes/mypage/index/components/MyPageIndexSidebar.tsx";

const Layout = () => {
    return (
        <>
            <MyPageIndexSidebar />
            <Outlet />
        </>
    );
};

export default Layout;
