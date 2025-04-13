import React from 'react';
import {Outlet} from "react-router-dom";
import config from "@src/config";

const DevelopmentRoute = () => {

    if (config.env !== 'development') {
        return null;
    }

    return <Outlet/>;
};

export default DevelopmentRoute;
