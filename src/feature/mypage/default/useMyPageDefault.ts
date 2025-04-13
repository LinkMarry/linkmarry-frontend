import {useLocation, useNavigate} from "react-router-dom";
import MyPageDefaultSidebarType, {myPageSidebarTypeList} from "@src/feature/mypage/default/MyPageDefaultSidebarType";
import {useCallback} from "react";

function useMyPageDefault() {
    const {pathname} = useLocation();
    const localNavigate = useNavigate();

    const currentSidebar = ((): MyPageDefaultSidebarType | undefined => {
        if (!pathname.startsWith('/mypage')) return;
        const path = pathname.split('/')[2];

        return myPageSidebarTypeList.find(type => type === path);
    })();

    const navigate = useCallback((pathname: MyPageDefaultSidebarType) => {
        localNavigate(`/mypage/${pathname}`);
    }, [localNavigate]);

    return {
        currentSidebar,
        navigate
    };
}

export default useMyPageDefault;
