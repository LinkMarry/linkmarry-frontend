import {Navigate, Outlet} from "react-router";
import {useAuth} from "~/hook/useAuth.tsx";
import ClientRendering from "~/ClientRendering.tsx";

const AdminRoute = () => {
    const {member} = useAuth();

    if (member?.role !== 'ROLE_ADMIN') {
        return <Navigate to={'/'}/>
    }

    return <Outlet/>;
};

export default AdminRoute;
