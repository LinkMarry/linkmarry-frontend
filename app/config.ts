const config = {
    dev: import.meta.env.DEV,
    prd: import.meta.env.PRD,
    baseUrl: import.meta.env.VITE_BASE_URL,
    kakao: {
        javascriptKey: import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY,
        redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
    }
};

export default config;
