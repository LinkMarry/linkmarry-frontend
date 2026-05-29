import {useAuth} from "~/context/auth";

export const useSignInScreen = () => {
    const {signInWithKakao} = useAuth();

    return {
        signInWithKakao,
    };
};
