import {Outlet} from "react-router";
import MyPageDetailSidebar from "./components/MyPageDetailSidebar.tsx";

const MyPageDetailLayout = () => {
    return (
        <>
            <MyPageDetailSidebar />
            <Outlet />
        </>
    );
};

export default MyPageDetailLayout;
