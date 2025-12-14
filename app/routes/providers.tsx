import {Outlet} from "react-router";
import useAxios from "~/hook/useAxios.ts";
import {AutoFocusProvider} from "~/hook/AutoFocusProvider.tsx";
import {AuthProvider} from "~/hook/AuthProvider.tsx";

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
