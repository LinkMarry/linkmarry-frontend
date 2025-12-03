import {Outlet} from "react-router-dom";
import useAxios from "@src/hook/useAxios";
import {AutoFocusProvider} from "@src/hook/AutoFocusProvider.tsx";
import {AuthProvider} from "@src/hook/AuthProvider.tsx";

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
