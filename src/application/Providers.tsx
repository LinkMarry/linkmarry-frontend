import React from 'react';
import {Outlet} from "react-router-dom";
import {AutoFocusProvider} from "@src/hook/useAutoFocus";
import {AuthProvider} from "@src/hook/useAuth";
import useAxios from "@src/hook/useAxios";

const Providers = () => {
    useAxios();

    return (
        <AuthProvider>
            <AutoFocusProvider>
                <Outlet/>
            </AutoFocusProvider>
        </AuthProvider>
    );
};

export default Providers;
