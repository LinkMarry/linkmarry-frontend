import {useMediaQuery} from "react-responsive";
import {breakpoints} from "~/hook/ResponsiveSwitch.tsx";

type DeviceSize = 'mobile' | 'tablet' | 'desktop';

function useResponsive() {
    const isMobile = useMediaQuery({maxWidth: breakpoints.mobile});
    const isTablet = useMediaQuery({minWidth: breakpoints.mobile + 1, maxWidth: breakpoints.tablet});

    const deviceSize: DeviceSize = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

    return {
        deviceSize
    };
}

export default useResponsive;
