import {useLocation, useNavigate} from "react-router";
import {type MyPageIndexSidebarType} from "~/routes/mypage/index/components/MyPageIndexSidebarType.ts";
import {myPageIndexSidebarTypeList} from "~/routes/mypage/index/components/MyPageIndexSidebarType.ts";
import {useCallback, useMemo} from "react";

function useMyPageIndex() {
    const {pathname} = useLocation();
    const localNavigate = useNavigate();

    const currentSidebar = useMemo(() => {
        if (!pathname.startsWith('/mypage')) return;
        const path = pathname.split('/')[2];

        return myPageIndexSidebarTypeList.find(type => type === path);
    }, [pathname]);

    const navigate = useCallback((pathname: MyPageIndexSidebarType) => {
        localNavigate(`/mypage/${pathname}`);
    }, [localNavigate]);

    return {
        currentSidebar,
        navigate
    };
}

export default useMyPageIndex;
