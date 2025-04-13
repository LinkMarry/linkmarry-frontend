import {useLocation, useNavigate} from "react-router-dom";
import MyPageIndexSidebarType, {myPageIndexSidebarTypeList} from "@src/feature/mypage/index/component/MyPageIndexSidebarType";
import {useCallback} from "react";

function useMyPageDefault() {
    const {pathname} = useLocation();
    const localNavigate = useNavigate();

    const currentSidebar = ((): MyPageIndexSidebarType | undefined => {
        if (!pathname.startsWith('/mypage')) return;
        const path = pathname.split('/')[2];

        return myPageIndexSidebarTypeList.find(type => type === path);
    })();

    const navigate = useCallback((pathname: MyPageIndexSidebarType) => {
        localNavigate(`/mypage/${pathname}`);
    }, [localNavigate]);

    return {
        currentSidebar,
        navigate
    };
}

export default useMyPageDefault;
