import {type PropsWithChildren} from "react";
import {useAuthImpl} from "./hook";
import {AuthContext} from "./context";

export const AuthProvider = ({children}: PropsWithChildren) => {
    const value = useAuthImpl();

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
