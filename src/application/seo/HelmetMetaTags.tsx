import React from 'react';
import {Helmet} from "react-helmet-async";

const HelmetMetaTags = () => {
    return (
        <Helmet>
            {/*검색 엔진 최적화(SEO) 관련 메타 태그*/}
            <title>링크메리 - 특별한 순간 특별한 초대, 링크메리와 함께</title>
            <meta name="description" content="링크메리와 함께 결혼을 더욱 특별하게. 이제, 종이 청첩장 대신 스마트폰으로 간편하고 빠르게 초대장을 보내보세요"/>
            <meta name="keywords"
                  content="모바일청첩장,모바일 초대장,셀프청첩장,무료모바일청첩장,결혼식 초대장,청첩장,결혼준비"/>
            <meta name="author" content="링크메리"/>

            {/*Open Graph (SNS 공유 최적화)*/}
            <meta property="og:title" content="링크메리"/>
            <meta property="og:description"
                  content="특별한 순간 특별한 초대, 링크메리와 함께. 이제, 종이 청첩장 대신 스마트폰으로 간편하고 빠르게 초대장을 보내보세요"/>
            <meta property="og:image" content="%PUBLIC_URL%/ogimage.png"/>
            <meta property="og:url" content="https://www.linkmarry.com/"/>
            <meta property="og:type" content="website"/>

            {/*트위터 카드 (Twitter 공유 최적화)*/}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="링크메리"/>
            <meta name="twitter:description" content="특별한 순간 특별한 초대, 링크메리와 함께"/>
            <meta name="twitter:image" content="%PUBLIC_URL%/ogimage.png"/>

            {/*검색 엔진 색인 관련*/}
            <meta name="robots" content="index, follow"/>
            <link rel="canonical" href="https://www.linkmarry.com"/>

            <meta name="naver-site-verification" content="bf351689cbaf88ee5be7544d236c9cd3e56b74c0"/>
        </Helmet>
    );
};

export default HelmetMetaTags;
