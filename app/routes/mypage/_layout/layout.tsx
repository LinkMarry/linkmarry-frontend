import {Outlet} from "react-router";
import MyPageIndexSidebar from "./components/MyPageIndexSidebar.tsx";

const Layout = () => {
    return (
        <>
            <MyPageIndexSidebar />
            <Outlet />
        </>
    );
};

export default Layout;
