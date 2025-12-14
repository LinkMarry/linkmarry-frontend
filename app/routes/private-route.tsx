import {useAuth} from "~/hook/useAuth.tsx";
import {Navigate, Outlet} from "react-router";
import ClientRendering from "~/ClientRendering.tsx";

const PrivateRoute = () => {
    const {authorized} = useAuth();

    return <ClientRendering>
        {authorized ? (
            <Outlet/>
        ) : (
            <Navigate to={'/sign-in'}/>
        )}
    </ClientRendering>
};

export default PrivateRoute;