import {createContext, useContext} from "react";
import type InfoMember from "~/infrastructure/network/value/InfoMember";


type AuthValue = {
    member?: InfoMember;
    authorized: boolean;
    signInWithKakao: () => void;
    signIn: (code: string) => Promise<void>;
    signOut: () => void;
    removeMember: () => Promise<void>;
    fetchMember: () => Promise<void>;
};
export const AuthContext = createContext<AuthValue | null>(null);

export const useAuth = () => {
    const value = useContext(AuthContext);
    if (!value) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return value;
}
