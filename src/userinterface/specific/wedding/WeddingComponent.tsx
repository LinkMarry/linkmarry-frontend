import React, {ReactNode, RefObject, useEffect, useRef, useState} from 'react';
import Wedding from "@src/infrastructure/network/value/Wedding";
import MoneyInfoTemplate from "@src/userinterface/specific/wedding/component/MoneyInfoTemplate";
import FooterTemplate from "@src/userinterface/specific/wedding/component/FooterTemplate";
import {weddingDesignFontSizeMap} from "@src/infrastructure/network/value/WeddingDesign";
import GuestCommentsTemplate from "@src/userinterface/specific/wedding/component/GuestCommentsTemplate";
import {increaseFontSize} from "@src/shared/dom-util";
import CongratulationsTemplate from "@src/userinterface/specific/wedding/component/CongratulationsTemplate";
import WeddingDayTemplate from "@src/userinterface/specific/wedding/component/weddingday/WeddingDayTemplate";
import LocationTemplate from "@src/userinterface/specific/wedding/component/LocationTemplate";
import PreviewTemplate from "@src/userinterface/specific/wedding/component/preview/PreviewTemplate";
import GalleryTemplate from "@src/userinterface/specific/wedding/component/gallery/GalleryTemplate";
import VideoTemplate from "@src/userinterface/specific/wedding/component/VideoTemplate";
import InvitationLetterTemplate from "@src/userinterface/specific/wedding/component/InvitationLetterTemplate";
import RsvpDialog from "@src/userinterface/specific/wedding/dialog/rsvp/RsvpDialog";
import CreateRsvpDialog from "@src/userinterface/specific/wedding/dialog/rsvp/CreateRsvpDialog";
import {Helmet} from "react-helmet-async";
import RsvpTemplate from "@src/userinterface/specific/wedding/component/RsvpTemplate";
import WaterMarkSheet from "@src/userinterface/specific/wedding/component/WaterMarkSheet";
import {Column} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import {implementText} from "@src/userinterface/foundation/text/TextProperties";
import Position from "@src/infrastructure/network/value/Position";
import {useCookies} from "react-cookie";
import {useSearchParams} from "react-router-dom";

interface WeddingComponentProps {
    wedding: Wedding;
    onChangeWedding?: (wedding: Wedding) => void;
    mode?: 'default' | 'preview' | 'sample';
    onRefresh?: () => void;
}

function WeddingComponent(
    {
        wedding,
        onChangeWedding,
        mode = 'default',
        onRefresh
    }: WeddingComponentProps
) {
    const [searchParams] = useSearchParams();
    const rsvp = searchParams.get('rsvp') === 'true';
    const cookieKey = `hide_RsvpDialog_${wedding.url}`;
    const [cookies] = useCookies([cookieKey]);

    const [showRsvpDialog, setShowRsvpDialog] = useState((() => {
        if (mode === 'preview' || !wedding.rsvp.startPopupStatus || rsvp) return false;
        return cookies[cookieKey] === undefined
    })());

    const autoplay = wedding.backgroundMusic.effect && mode !== 'preview' && wedding.backgroundMusic.backgroundMusicActivate;
    const audioRef = useRef<HTMLAudioElement>(null);
    const autoplayUnlockRef = useRef<HTMLDivElement>(null)
    const [showAutoplayUnlockElement, setShowAutoplayUnlockElement] = useState(true);
    useEffect(() => {
        const autoplayUnlockElement = autoplayUnlockRef.current;
        if (!autoplayUnlockElement || !autoplay) return;

        const unlock = () => {
            const context = new window.AudioContext(); // 미리 생성하지 말고 제스처 이벤트 안에서 생성하는 것도 방법
            context.resume()
                .then(() => {
                    console.log('AudioContext resumed by user gesture');
                    setShowAutoplayUnlockElement(false);
                    audioRef.current?.play();

                    window.removeEventListener('click', unlock);
                    window.removeEventListener('keydown', unlock);
                    autoplayUnlockElement.removeEventListener('touchstart', unlock);
                    autoplayUnlockElement.removeEventListener('touchend', unlock);
                })
                .catch((err) => {
                    console.error('Failed to resume AudioContext:', err);
                });
        };

        // 여러 제스처에 이벤트 등록
        window.addEventListener('click', unlock);
        window.addEventListener('keydown', unlock);
        autoplayUnlockElement.addEventListener('touchstart', unlock);
        autoplayUnlockElement.addEventListener('touchend', unlock);

        // 클린업
        return () => {
            window.removeEventListener('click', unlock);
            window.removeEventListener('keydown', unlock);
            autoplayUnlockElement.removeEventListener('touchstart', unlock);
            autoplayUnlockElement.removeEventListener('touchend', unlock);
        };
    }, [autoplay]);

    const [showCreateRsvpDialog, setShowCreateRsvpDialog] = useState(rsvp);
    const rootRef = useRef<HTMLDivElement>(null);

    const {weddingDesignFontSize, weddingDesignFont} = wedding.weddingDesign;
    const {addFontSize} = weddingDesignFontSizeMap[weddingDesignFontSize];
    increaseFontSize(rootRef, addFontSize);

    return (
        <Column ref={rootRef} $ui={css`
            max-width: 436px;
            align-items: stretch;
            background: white;

            *:not(.override-font):not(.override-font *) {
                ${weddingDesignFont && implementText({
                    fontFamily: weddingDesignFont
                })};
            }
        `}>
            {showAutoplayUnlockElement && (
                <div className={'override-font'} ref={autoplayUnlockRef} style={{
                    position: 'fixed',
                    background: 'transparent',
                    width: '100vw',
                    height: '100vh',
                    left: 0,
                    top: 0,
                    zIndex: 9999,
                }}></div>
            )}
            <audio
                className={'override-font'}
                ref={audioRef}
                src={wedding.backgroundMusic.backgroundMusicUrl}
                loop={true}
                style={{display: 'none'}}
            />
            <Helmet>
                <meta property={'og:title'} content={wedding.linkShare.urlTitle}/>
                <meta property={'og:description'} content={wedding.linkShare.urlContent}/>
                <meta property={'og:image'} content={wedding.linkShare.urlImgUrl}/>
                <meta property={'og:url'} content={wedding.url}/>
                <meta property={'og:type'} content={'website'}/>

                <title>{wedding.linkShare.urlTitle}</title>
            </Helmet>
            <ContentBody
                wedding={wedding}
                onRefresh={onRefresh}
                rootRef={rootRef}
                onClickCreateRsvp={() => setShowRsvpDialog(true)}
            />
            {showRsvpDialog && (
                <RsvpDialog
                    url={wedding.url}
                    baseInfo={wedding.baseInfo}
                    weddingSchedule={wedding.weddingSchedule}
                    weddingPlace={wedding.weddingPlace}
                    rsvp={wedding.rsvp}
                    onConfirm={() => {
                        setShowRsvpDialog(false);
                        setShowCreateRsvpDialog(true);
                    }}
                    dismiss={() => setShowRsvpDialog(false)}
                />
            )}
            {showCreateRsvpDialog && (
                <CreateRsvpDialog
                    url={wedding.url}
                    rsvp={wedding.rsvp}
                    dismiss={() => setShowCreateRsvpDialog(false)}
                />
            )}
            {wedding.waterMark && mode === 'default' && (
                <WaterMarkSheet url={wedding.url}/>
            )}
        </Column>
    );
}

const ContentBody = ({wedding, onRefresh, rootRef, onClickCreateRsvp}: {
    wedding: Wedding;
    onRefresh?: () => void;
    rootRef: RefObject<HTMLDivElement>;
    onClickCreateRsvp: () => void;
}) => {
    const {weddingDesignColor} = wedding.weddingDesign;
    return (
        <>
            <PreviewTemplate
                weddingDesign={wedding.weddingDesign}
                baseInfo={wedding.baseInfo}
                weddingPlace={wedding.weddingPlace}
                weddingSchedule={wedding.weddingSchedule}
            />
            {wedding.position.map(index => {
                const view: Record<Position, ReactNode> = {
                    0: <InvitationLetterTemplate
                        key={index}
                        baseInfo={wedding.baseInfo}
                        greeting={wedding.greeting}
                    />,
                    1: <WeddingDayTemplate
                        key={index}
                        baseInfo={wedding.baseInfo}
                        weddingSchedule={wedding.weddingSchedule}
                    />,
                    2: <MoneyInfoTemplate
                        key={index}
                        baseInfo={wedding.baseInfo}
                        moneyInfo={wedding.moneyInfo}
                    />,
                    3: <GalleryTemplate
                        key={index}
                        rootRef={rootRef}
                        gallery={wedding.gallery}
                    />,
                    4: <LocationTemplate
                        key={index}
                        weddingDesignColor={weddingDesignColor}
                        weddingPlace={wedding.weddingPlace}
                    />,
                    5: <VideoTemplate
                        key={index}
                        video={wedding.video}
                        rootRef={rootRef}
                    />,
                    6: <CongratulationsTemplate
                        key={index}
                        baseInfo={wedding.baseInfo}
                        phone={wedding.phone}
                        weddingDesignColor={weddingDesignColor}
                    />,
                    7: <GuestCommentsTemplate
                        key={index}
                        weddingDesignColor={weddingDesignColor}
                        url={wedding.url}
                        guestComments={wedding.guestCommentList}
                        guestComment={wedding.guestComment}
                        onRefresh={onRefresh ?? (() => {
                        })}
                    />,
                    8: <RsvpTemplate
                        key={index}
                        rsvp={wedding.rsvp}
                        weddingDesignColor={weddingDesignColor}
                        baseInfo={wedding.baseInfo}
                        weddingSchedule={wedding.weddingSchedule}
                        onClickCreateRsvp={onClickCreateRsvp}
                    />
                };
                return view[index as Position];
            })}
            <FooterTemplate
                url={wedding.url}
                background={weddingDesignColor}
                linkShare={wedding.linkShare}
                weddingPlace={wedding.weddingPlace}
            />
        </>
    );
};

export default WeddingComponent;
