import {useMediaQuery} from "react-responsive";
import {BREAK_POINT_MAP} from "~/style/responsive";

type DeviceSize = "mobile" | "tablet" | "desktop";

function useResponsive() {
    const isMobile = useMediaQuery({maxWidth: BREAK_POINT_MAP.MOBILE});
    const isTablet = useMediaQuery({minWidth: BREAK_POINT_MAP.MOBILE + 1, maxWidth: BREAK_POINT_MAP.TABLET});

    const deviceSize: DeviceSize = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

    return {
        deviceSize,
    };
}

export default useResponsive;
