import {createContext} from "react";
import type {InfoMember} from "~/domain";

export type AuthValue = {
    member?: InfoMember;
    authorized: boolean;
    signInWithKakao: () => void;
    signIn: (code: string) => Promise<void>;
    signOut: () => void;
    removeMember: () => Promise<void>;
    fetchMember: () => Promise<void>;
};
export const AuthContext = createContext<AuthValue | null>(null);
