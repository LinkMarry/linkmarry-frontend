import {useNavigate} from "react-router";
import {NAVER_STORE_URL} from "~/lib/constant.ts";

export function useHomeScreen() {
    const navigate = useNavigate();

    const handleViewSample = () => {
        navigate("/sample");
    };

    const handleCreateWedding = () => {
        navigate("/wedding-invitation");
    };

    const handleNavigateNaverStore = () => {
        window.open(NAVER_STORE_URL);
    };

    return {
        handleViewSample,
        handleCreateWedding,
        handleNavigateNaverStore,
    };
}
