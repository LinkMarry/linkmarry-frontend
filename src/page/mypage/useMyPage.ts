import {useLocation, useNavigate} from "react-router-dom";
import MyPageSidebarType, {myPageSidebarTypeList} from "@page/mypage/MyPageSidebarType";
import {useCallback} from "react";

function useMyPage() {
    const {pathname} = useLocation();
    const localNavigate = useNavigate();

    const currentSidebar = ((): MyPageSidebarType | undefined => {
        if (!pathname.startsWith('/mypage')) return undefined;
        const path = pathname.split('/')[2];

        return myPageSidebarTypeList.find(type => type === path);
    })();
    
    const navigate = useCallback((pathname: MyPageSidebarType) => {
        localNavigate(`/mypage/${pathname}`);
    }, [localNavigate]);

    return {
        currentSidebar,
        navigate
    };
}

export default useMyPage;