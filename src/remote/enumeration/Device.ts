enum Device {
    MOBILE = 'MOBILE', 
    DESKTOP = 'DESKTOP',
}

export function getDeviceType(): Device {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)) {
        return Device.MOBILE;
    }
    return Device.DESKTOP;
}

export default Device;