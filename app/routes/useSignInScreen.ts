import {useAuth} from "~/hook/useAuth.tsx";

export function useSignInScreen() {
    const {signInWithKakao} = useAuth();

    return {
        signInWithKakao,
    };
}
