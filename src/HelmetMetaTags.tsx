import React from 'react';
import {Helmet} from "react-helmet";

const HelmetMetaTags = () => {
    return (
        <Helmet>
            <meta property="og:title" content="링크메리"/>
            <meta property="og:description"
                  content="링크메리와 함께 결혼을 더욱 특별하게. 이제, 종이 청첩장 대신 스마트폰으로 간편하고 빠르게 초대장을 보내보세요"/>
            <meta property="og:image" content="/logo512"/>
            <meta property="og:url" content="https://www.linkmarry.com/"/>
            <meta property="og:type" content="website"/>
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>
        </Helmet>
    );
};

export default HelmetMetaTags;
