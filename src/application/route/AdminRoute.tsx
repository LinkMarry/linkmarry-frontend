import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "@src/hook/useAuth";
import ClientRendering from "@src/ClientRendering.tsx";

const AdminRoute = () => {
    const {member} = useAuth();

    if (member?.role !== 'ROLE_ADMIN') {
        return <ClientRendering>
            <Navigate to={'/'}/>
        </ClientRendering>
    }

    return <Outlet/>;
};

export default AdminRoute;
