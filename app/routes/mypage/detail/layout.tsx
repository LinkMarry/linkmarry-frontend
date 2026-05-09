import {Outlet} from "react-router";
import MyPageDetailSidebar from "~/routes/mypage/detail/components/MyPageDetailSidebar.tsx";

const MyPageDetailLayout = () => {
    return (
        <>
            <MyPageDetailSidebar />
            <Outlet />
        </>
    );
};

export default MyPageDetailLayout;
