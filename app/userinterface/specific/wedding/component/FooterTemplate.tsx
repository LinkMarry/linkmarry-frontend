import {type ComponentPropsWithoutRef, useCallback} from 'react';
import Text from "~/userinterface/component/Text";
import {css} from "@linaria/core";
import {backgroundStyle} from "~/infrastructure/network/value/WeddingDesign";
import Icon from "~/userinterface/foundation/Icon";
import type LinkShare from "~/infrastructure/network/value/LinkShare";
import {getWeddingUrl} from "~/shared/string-util";
import {type KakaoButton} from "~/infrastructure/network/enumeration/KakaoButton";
import type WeddingPlace from "~/infrastructure/network/value/WeddingPlace";
import View from "~/userinterface/core/View.tsx";

interface FooterTemplateProps extends ComponentPropsWithoutRef<'div'> {
    url: string;
    background: string;
    linkShare: LinkShare;
    weddingPlace: WeddingPlace;
}

function FooterTemplate(
    {
        url,
        background,
        linkShare,
        weddingPlace,
        ...props
    }: FooterTemplateProps
) {
    const shareToKakao = useCallback(() => {
        const {Kakao: {Share}} = window as any;
        const weddingUrl = getWeddingUrl(url);
        const rsvpWeddingUrl = (() => {
            const url = new URL(weddingUrl);
            url.searchParams.set('rsvp', 'true');
            return url.toString();
        })();

        const buttonRecord: Record<KakaoButton, {
            title: string;
            link: {
                mobileWebUrl: string;
                webUrl: string;
            };
        }[]> = {
            NONE: [
                {
                    title: '모바일청첩장',
                    link: {
                        mobileWebUrl: weddingUrl,
                        webUrl: weddingUrl
                    }
                }
            ],
            PLACE: [
                {
                    title: '모바일청첩장',
                    link: {
                        mobileWebUrl: weddingUrl,
                        webUrl: weddingUrl
                    }
                },
                {
                    title: '위치보기',
                    link: {
                        mobileWebUrl: `${window.location.origin}/link?url=${weddingPlace.placeUrl}`,
                        webUrl: `${window.location.origin}/link?url=${weddingPlace.placeUrl}`,
                    }
                }
            ],
            ATTEND: [
                {
                    title: '모바일청첩장',
                    link: {
                        mobileWebUrl: weddingUrl,
                        webUrl: weddingUrl
                    }
                },
                {
                    title: '참석의사 전달',
                    link: {
                        mobileWebUrl: rsvpWeddingUrl,
                        webUrl: rsvpWeddingUrl
                    }
                }
            ]
        }
        Share.sendDefault({
            objectType: 'feed',
            content: {
                title: linkShare.kakaoTitle || ' ', // empty string 기입 시 에러 발생하여 띄어쓰기 값을 넣어 처리함
                description: linkShare.kakaoContent,
                imageUrl: linkShare.kakaoImgUrl || `${window.location.origin}/ogimage.png`,
                link: {
                    mobileWebUrl: weddingUrl,
                    webUrl: weddingUrl
                }
            },
            buttons: buttonRecord[linkShare.kakaoButton],
            installTalk: true,
        });
    }, [linkShare.kakaoButton, linkShare.kakaoContent, linkShare.kakaoImgUrl, linkShare.kakaoTitle, url, weddingPlace.placeUrl]);

    return (
        <View ui={css`
            align-items: flex-start;
        `} style={{
            background: backgroundStyle(background)
        }} {...props}>
            <View ui={css`
                gap: 28px;
                align-items: center;
                width: 100%;
                padding: 32px 0;
            `}
            >
                <View ui={css`
                    cursor: pointer;
                    align-items: center;
                    gap: 8px;
                    flex-direction: row !important;
                `} onClick={shareToKakao}>
                    <Icon iconType={'Kakao'} size={20}/>
                    <Text size={14} weight={300} ui={css`
                        color: var(--g-600);
                    `}>카카오톡으로 청첩장 보내기</Text>
                </View>
                <View ui={css`
                    flex-direction: row !important;
                    gap: 4px;
                    align-items: center;
                `}>
                    <Text size={14} weight={300} ui={css`
                        color: var(--g-300);
                    `}>Copyrightⓒ2025.</Text>
                    <Text size={14} weight={300} ui={css`
                        color: var(--g-300);
                    `}>All rights reserved.</Text>
                </View>
            </View>
        </View>
    );
}

export default FooterTemplate;
