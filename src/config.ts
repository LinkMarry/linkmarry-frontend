const config = {
    env: process.env.NODE_ENV,
    baseUrl: process.env.REACT_APP_BASE_URL,
    kakao: {
        javascriptKey: process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY,
        redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
    }
};

export default config;
