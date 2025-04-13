import useAuth from "@src/hook/useAuth";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
    const {authorized} = useAuth();

    return authorized ? (
        <Outlet/>
    ) : (
        <Navigate to={'/sign-in'}/>
    )
};

export default PrivateRoute;
