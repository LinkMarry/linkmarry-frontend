import {useAuth} from "~/hook/useAuth.tsx";
import {Navigate, Outlet} from "react-router";
import ClientOnly from "~/components/ClientRendering";

const PrivateRoute = () => {
    const {authorized} = useAuth();

    return <ClientOnly>{authorized ? <Outlet /> : <Navigate to={"/sign-in"} replace={true} />}</ClientOnly>;
};

export default PrivateRoute;
