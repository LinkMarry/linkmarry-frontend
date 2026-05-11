import {Outlet} from "react-router";
import config from "~/config.ts";

const DevelopmentRouteScreen = () => {
    if (config.prd) {
        return null;
    }

    return <Outlet />;
};

export default DevelopmentRouteScreen;
