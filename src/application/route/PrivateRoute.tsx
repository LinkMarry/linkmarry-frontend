import {useAuth} from "@src/hook/useAuth";
import {Navigate, Outlet} from "react-router-dom";
import ClientRendering from "@src/ClientRendering.tsx";

const PrivateRoute = () => {
    const {authorized} = useAuth();

    return <ClientRendering>
        {authorized ? (
            <Outlet/>
        ) : (
            <ClientRendering>
                <Navigate to={'/sign-in'}/>
            </ClientRendering>
        )}
    </ClientRendering>
};

export default PrivateRoute;