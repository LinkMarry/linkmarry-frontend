import {useMediaQuery} from "react-responsive";

type DeviceSize = 'mobile' | 'desktop';

function useResponsive() {
    const isMobile = useMediaQuery({maxWidth: 767});

    const deviceSize: DeviceSize = isMobile ? 'mobile' : 'desktop';

    return {
        deviceSize
    };
}

export default useResponsive;