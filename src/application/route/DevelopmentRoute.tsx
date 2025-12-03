import {Outlet} from "react-router-dom";
import config from "@src/config";

const DevelopmentRoute = () => {

    if (config.prd) {
        return null;
    }

    return <Outlet/>;
};

export default DevelopmentRoute;
