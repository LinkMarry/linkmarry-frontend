import {Navigate, Outlet} from "react-router";
import {useAuth} from "~/hook/useAuth.tsx";

const AdminRouteScreen = () => {
    const {member} = useAuth();

    if (member?.role !== "ROLE_ADMIN") {
        return <Navigate to={"/"} />;
    }

    return <Outlet />;
};

export default AdminRouteScreen;
