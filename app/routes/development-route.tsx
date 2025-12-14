import {Outlet} from "react-router";
import config from "~/config.ts";

const DevelopmentRoute = () => {

    if (config.prd) {
        return null;
    }

    return <Outlet/>;
};

export default DevelopmentRoute;
