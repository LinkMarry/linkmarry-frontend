import React, {ComponentPropsWithoutRef, useCallback} from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import {css} from "styled-components";
import {backgroundStyle} from "@src/infrastructure/network/value/WeddingDesign";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";
import LinkShare from "@src/infrastructure/network/value/LinkShare";
import {getWeddingUrl} from "@src/shared/string-util";
import KakaoButton from "@src/infrastructure/network/enumeration/KakaoButton";
import WeddingPlace from "@src/infrastructure/network/value/WeddingPlace";

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
            [KakaoButton.NONE]: [],
            [KakaoButton.PLACE]: [
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
            [KakaoButton.ATTEND]: [
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
                title: linkShare.kakaoTitle,
                description: linkShare.kakaoContent,
                imageUrl: linkShare.kakaoImgUrl,
                link: {
                    mobileWebUrl: 'https://linkmarry-web-git-main-hhhello0507s-projects.vercel.app',
                    webUrl: 'https://linkmarry-web-git-main-hhhello0507s-projects.vercel.app',
                    // mobileWebUrl: 'https://www.linkmarry.com/',
                    // webUrl: 'https://www.linkmarry.com/',
                    // mobileWebUrl: window.location.origin,
                    // webUrl: window.location.origin
                }
            },
            buttons: buttonRecord[linkShare.kakaoButton],
            installTalk: true,
        });
    }, [linkShare.kakaoButton, linkShare.kakaoContent, linkShare.kakaoImgUrl, linkShare.kakaoTitle, url, weddingPlace.placeUrl]);

    return (
        <Column $alignItems={'stretch'} $ui={css`
            background: ${backgroundStyle(background)};
        `} {...props}>
            <Column
                $gap={28}
                style={{
                    width: '100%',
                    padding: '32px 0'
                }}
                $alignItems={'center'}
            >
                <Row $gap={8} $alignItems={'center'} $ui={css`
                    cursor: pointer;
                `} onClick={shareToKakao}>
                    <Icon iconType={IconType.Kakao} size={20}/>
                    <Text size={14} weight={300} ui={css`
                        color: var(--g-600);
                    `}>카카오톡으로 청첩장 보내기</Text>
                </Row>
                <Row $gap={4} $alignItems={'center'}>
                    <Text size={14} weight={300} ui={css`
                        color: var(--g-300);
                    `}>Copyrightⓒ2025.</Text>
                    <Text size={14} weight={300} ui={css`
                        color: var(--g-300);
                    `}>All rights reserved.</Text>
                </Row>
            </Column>
        </Column>
    );
}

export default FooterTemplate;
