import {Outlet} from "react-router";
import config from "~/lib/config";

const DevelopmentRouteScreen = () => {
    if (config.prd) {
        return null;
    }

    return <Outlet />;
};

export default DevelopmentRouteScreen;
