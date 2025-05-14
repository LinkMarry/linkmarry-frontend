import React from 'react';
import {Helmet} from "react-helmet-async";

const HelmetMetaTags = () => {
    return (
        <>
            <Helmet
                link={[
                    {
                        rel: "canonical",
                        href: "https://www.linkmarry.com"
                    }
                ]}
            >
                {/* 검색 엔진 최적화(SEO) 관련 메타 태그 */}
                <title> 모바일 청첩장 | 특별한 순간 특별한 초대, 링크메리와 함께 </title>
                <meta name="description" content="모바일 청첩장 링크메리와 함께 결혼을 더욱 특별하게. 이제, 종이 청첩장 대신 스마트폰으로 간편하고 빠르게 초대장을 보내보세요. 모바일 청첩장 제작까지 단 5분 모바일 초대장 링크메리 모바일 청첩장, 모바일 초대장은 링크메리"/>
                <meta name="keywords" content="모바일청첩장,모바일 초대장,셀프청첩장,무료모바일청첩장,결혼식 초대장,청첩장,결혼준비,디지털 청첩장,카카오톡 청첩장,모바일 청첩장 템플릿"/>
                <meta name="author" content="링크메리"/>

                {/* Open Graph (SNS 공유 최적화) */}
                <meta property="og:title" content="링크메리"/>
                <meta property="og:description" content="특별한 순간 특별한 초대, 링크메리와 함께. 이제, 종이 청첩장 대신 스마트폰으로 간편하고 빠르게 초대장을 보내보세요"/>
                <meta property="og:image" content="%PUBLIC_URL%/ogimage.png"/>
                <meta property="og:url" content="https://www.linkmarry.com/"/>
                <meta property="og:type" content="website"/>

                {/* 트위터 카드 (Twitter 공유 최적화) */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="링크메리"/>
                <meta name="twitter:description" content="특별한 순간 특별한 초대, 링크메리와 함께"/>
                <meta name="twitter:image" content="%PUBLIC_URL%/ogimage.png"/>

                {/* 검색 엔진 색인 관련 */}
                <meta name="robots" content="index, follow"/>
                <meta name="naver-site-verification" content="bf351689cbaf88ee5be7544d236c9cd3e56b74c0"/>

                {/* 지역 기반 SEO */}
                <meta name="geo.region" content="KR"/>
                <meta name="geo.placename" content="Seoul"/>

                {/* Schema.org 구조화 데이터 */}
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "https://schema.org",
                          "@type": "WebSite",
                          "name": "링크메리",
                          "url": "https://www.linkmarry.com",
                          "description": "모바일 청첩장 링크메리와 함께 결혼을 더욱 특별하게. 간편한 에디터로 5분만에 빠르게 모바일 초대장을 만들어보세요.",
                          "inLanguage": "ko",
                          "publisher": {
                            "@type": "Organization",
                            "name": "링크메리",
                            "logo": {
                              "@type": "ImageObject",
                              "url": "https://www.linkmarry.com/favicon.ico"
                            }
                          },
                          "sameAs": [
                            "https://www.instagram.com/official_linkmarry",
                            "https://www.linkmarry.com/sample"
                          ]
                        }
                    `}
                </script>

                {/* FAQ 스키마 */}
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "https://schema.org",
                          "@type": "FAQPage",
                          "mainEntity": [
                            {
                              "@type": "Question",
                              "name": "모바일 청첩장이란 무엇인가요?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "모바일 청첩장은 스마트폰으로 간편하게 결혼식 초대장을 보낼 수 있는 서비스입니다. 종이 청첩장 대신 디지털 방식으로 초대장을 제작하고 공유할 수 있습니다."
                              }
                            },
                            {
                              "@type": "Question",
                              "name": "모바일 청첩장을 어떻게 만들 수 있나요?",
                              "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "링크메리에서 제공하는 간편한 에디터를 사용하여 5분 만에 모바일 청첩장을 만들 수 있습니다. 다양한 템플릿과 디자인 옵션을 제공합니다."
                              }
                            }
                          ]
                        }
                    `}
                </script>
            </Helmet>

            {/* 👇 검색 엔진용 숨겨진 콘텐츠 */}
            <div style={{ position: 'absolute', left: '-9999px' }}>
                <h1>모바일 청첩장 | 특별한 순간 특별한 초대, 링크메리와 함께</h1>
                <p>
                    모바일 청첩장은 스마트폰으로 손쉽게 결혼식 초대장을 제작하고 공유할 수 있는 디지털 청첩장 서비스입니다.
                    링크메리에서는 다양한 템플릿과 무료 기능을 통해 특별한 청첩장을 만들어 드립니다.  
                    무료 모바일 청첩장, 카카오톡 청첩장, 셀프 청첩장, 디지털 청첩장을 링크메리에서 경험하세요.
                </p>
            </div>
        </>
    );
};

export default HelmetMetaTags;
