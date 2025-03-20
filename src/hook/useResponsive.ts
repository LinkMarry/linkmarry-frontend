import {useMediaQuery} from "react-responsive";

type DeviceSize = 'mobile' | 'tablet' | 'desktop';

function useResponsive() {
    const isMobile = useMediaQuery({maxWidth: 767});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const deviceSize: DeviceSize = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

    return {
        deviceSize
    };
}

export default useResponsive;
