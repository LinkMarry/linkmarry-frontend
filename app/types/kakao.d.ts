declare global {
    interface Window {
        Kakao: {
            init: (appKey: string) => void;
            isInitialized: () => boolean;
            Auth: {
                authorize: (options: {redirectUri: string}) => void;
            };
            Share: {
                sendDefault: (options: KakaoShareDefaultOptions) => void;
            };
        };
        kakao: {
            maps: {
                services: {
                    Places: new () => KakaoPlaces;
                    Geocoder: new () => KakaoGeocoder;
                    Status: {
                        OK: string;
                        ERROR: string;
                        ZERO_RESULT: string;
                    };
                };
                Map: new (container: HTMLElement, options: KakaoMapOptions) => KakaoMap;
                Marker: new (options: KakaoMarkerOptions) => KakaoMarker;
                LatLng: new (lat: number, lng: number) => KakaoLatLng;
                event: {
                    addListener: (target: unknown, type: string, handler: () => void) => void;
                    removeListener: (target: unknown, type: string, handler: () => void) => void;
                };
            };
        };
    }

    interface KakaoShareDefaultOptions {
        objectType: "feed" | "list" | "location" | "commerce" | "text";
        content: {
            title: string;
            description?: string;
            imageUrl: string;
            link: {
                mobileWebUrl: string;
                webUrl: string;
            };
        };
        social?: {
            likeCount?: number;
            commentCount?: number;
            sharedCount?: number;
            viewCount?: number;
            subscriberCount?: number;
        };
        buttons?: {
            title: string;
            link: {
                mobileWebUrl: string;
                webUrl: string;
            };
        }[];
        installTalk?: boolean;
    }

    interface KakaoPlaces {
        keywordSearch: (
            keyword: string,
            callback: (result: KakaoPlaceResult[], status: string) => void,
            options?: KakaoKeywordSearchOptions,
        ) => void;
    }

    interface KakaoKeywordSearchOptions {
        location?: KakaoLatLng;
        radius?: number;
    }

    interface KakaoPlaceResult {
        id: string;
        place_name: string;
        address_name: string;
        x: string;
        y: string;
        place_url: string;
    }

    interface KakaoGeocoder {
        coord2Address: (
            lng: number,
            lat: number,
            callback: (result: KakaoGeocoderResult[], status: string) => void,
        ) => void;
    }

    interface KakaoGeocoderResult {
        address: {
            address_name: string;
        };
    }

    interface KakaoMapOptions {
        center: KakaoLatLng;
        level: number;
    }

    interface KakaoMap {
        getCenter: () => KakaoLatLng;
        setCenter: (latlng: KakaoLatLng) => void;
        setDraggable: (draggable: boolean) => void;
        setZoomable: (zoomable: boolean) => void;
    }

    interface KakaoMarkerOptions {
        position: KakaoLatLng;
        map: KakaoMap;
    }

    interface KakaoMarker {
        setPosition: (latlng: KakaoLatLng) => void;
    }

    interface KakaoLatLng {
        getLat: () => number;
        getLng: () => number;
    }
}

export {};
