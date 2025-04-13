import useAuth from "@hook/useAuth";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
    const {authorized} = useAuth();

    return authorized ? (
        <Outlet/>
    ) : (
        <Navigate to={'/login'}/>
    )
};

export default PrivateRoute;
