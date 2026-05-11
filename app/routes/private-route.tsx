import {ClientOnly} from "~/components";
import {useAuth} from "~/hook/useAuth.tsx";
import {Navigate, Outlet} from "react-router";

const PrivateRouteScreen = () => {
    const {authorized} = useAuth();

    return <ClientOnly>{authorized ? <Outlet /> : <Navigate to={"/sign-in"} replace={true} />}</ClientOnly>;
};

export default PrivateRouteScreen;
