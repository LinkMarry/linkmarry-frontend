import 'axios';

declare module 'axios' {
    export interface AxiosRequestConfig {
        shouldAuthorizeRequest?: boolean;
    }
}