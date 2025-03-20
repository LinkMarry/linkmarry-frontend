import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import useAuth from "@hook/useAuth";

const AdminRoute = () => {
    const {member} = useAuth();

    if (member?.role !== 'ROLE_ADMIN') {
        return <Navigate to={'/'}/>;
    }

    return <Outlet/>;
};

export default AdminRoute;
