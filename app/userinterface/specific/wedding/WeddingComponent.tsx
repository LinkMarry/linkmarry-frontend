import {type ReactNode, type RefObject, useEffect, useRef, useState} from 'react';
import type Wedding from "~/infrastructure/network/value/Wedding";
import MoneyInfoTemplate from "~/userinterface/specific/wedding/component/MoneyInfoTemplate";
import FooterTemplate from "~/userinterface/specific/wedding/component/FooterTemplate";
import {weddingDesignFontSizeMap} from "~/infrastructure/network/value/WeddingDesign";
import GuestCommentsTemplate from "~/userinterface/specific/wedding/component/GuestCommentsTemplate";
import {increaseFontSize} from "~/shared/dom-util";
import CongratulationsTemplate from "~/userinterface/specific/wedding/component/CongratulationsTemplate";
import WeddingDayTemplate from "~/userinterface/specific/wedding/component/weddingday/WeddingDayTemplate";
import LocationTemplate from "~/userinterface/specific/wedding/component/LocationTemplate";
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import GalleryTemplate from "~/userinterface/specific/wedding/component/gallery/GalleryTemplate";
import VideoTemplate from "~/userinterface/specific/wedding/component/VideoTemplate";
import InvitationLetterTemplate from "~/userinterface/specific/wedding/component/InvitationLetterTemplate";
import CreateRsvpDialog from "~/userinterface/specific/wedding/dialog/rsvp/CreateRsvpDialog";
import {Helmet} from "react-helmet-async";
import RsvpTemplate from "~/userinterface/specific/wedding/component/RsvpTemplate";
import WaterMarkSheet from "~/userinterface/specific/wedding/component/WaterMarkSheet";
import {type Position} from "~/infrastructure/network/value/Position";
import {useCookies} from "react-cookie";
import {useSearchParams} from "react-router";
import RsvpDialog from "~/userinterface/specific/wedding/dialog/rsvp/RsvpDialog.tsx";
import {styled} from "@linaria/react";
import type {FontFamily} from "~/userinterface/foundation/text/TextType.ts";
import type {WeddingMode} from "~/userinterface/specific/wedding/WeddingMode.ts";


interface WeddingComponentProps {
    wedding: Wedding;
    onChangeWedding?: (wedding: Wedding) => void;
    mode?: WeddingMode;
    onRefresh?: () => void;
}

function WeddingComponent(
    {
        wedding,
        mode = 'default',
        onRefresh
    }: WeddingComponentProps
) {
    const [searchParams] = useSearchParams();
    const rsvp = searchParams.get('rsvp') === 'true';
    const cookieKey = `hide_RsvpDialog_${wedding.url}`;
    const [cookies] = useCookies([cookieKey]);

    const [showRsvpDialog, setShowRsvpDialog] = useState(false);

    const autoplay = wedding.backgroundMusic.effect && mode !== 'preview' && wedding.backgroundMusic.backgroundMusicActivate;
    const audioRef = useRef<HTMLAudioElement>(null);
    const autoplayUnlockRef = useRef<HTMLDivElement>(null)
    const [showAutoplayUnlockElement, setShowAutoplayUnlockElement] = useState(mode !== 'preview');

    useEffect(() => {
        if (mode === 'preview' || !wedding.rsvp.startPopupStatus || rsvp) {
            setShowRsvpDialog(false);
            return;
        }
        setShowRsvpDialog(cookies[cookieKey] === undefined);
    }, [cookieKey, cookies, mode, rsvp, wedding.rsvp.startPopupStatus]);

    useEffect(() => {
        const autoplayUnlockElement = autoplayUnlockRef.current;

        if (!autoplayUnlockElement || !autoplay) return;

        const unlock = () => {
            const context = new window.AudioContext(); // 미리 생성하지 말고 제스처 이벤트 안에서 생성하는 것도 방법
            context.resume()
                .then(() => {
                    const audioElement = audioRef.current;

                    console.log('AudioContext resumed by user gesture');
                    setShowAutoplayUnlockElement(false);

                    audioElement?.play().catch(console.error);

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
        <RootStyle ref={rootRef} fontFamily={weddingDesignFont}>
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
            {wedding.backgroundMusic.backgroundMusicUrl && (
                <audio
                    className={'override-font'}
                    ref={audioRef}
                    src={wedding.backgroundMusic.backgroundMusicUrl}
                    loop={true}
                    style={{display: 'none'}}
                />
            )}
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
                mode={mode}
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
        </RootStyle>
    );
}

const RootStyle = styled.div<{
    fontFamily: FontFamily;
}>`
    display: flex;
    flex-direction: column;
    max-width: 436px;
    align-items: stretch;
    background: white;

    *:not(.override-font):not(.override-font *) {
        font-family: ${props => props.fontFamily || 'inherit'};
    }
`;

const ContentBody = (
    {
        wedding,
        onRefresh,
        rootRef,
        onClickCreateRsvp,
        mode
    }: {
        wedding: Wedding;
        onRefresh?: () => void;
        rootRef: RefObject<HTMLDivElement | null>;
        onClickCreateRsvp: () => void;
        mode: WeddingMode;
    }
) => {
    const {weddingDesignColor} = wedding.weddingDesign;
    return (
        <>
            <PreviewTemplate
                weddingDesign={wedding.weddingDesign}
                baseInfo={wedding.baseInfo}
                weddingPlace={wedding.weddingPlace}
                weddingSchedule={wedding.weddingSchedule}
                mode={mode}
            />
            {wedding.position.map(index => {
                const view: Record<Position, ReactNode> = {
                    0: <InvitationLetterTemplate
                        key={index}
                        baseInfo={wedding.baseInfo}
                        greeting={wedding.greeting}
                        mode={mode}
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
                        mode={mode}
                    />,
                    3: <GalleryTemplate
                        key={index}
                        rootRef={rootRef}
                        gallery={wedding.gallery}
                        mode={mode}
                    />,
                    4: <LocationTemplate
                        key={index}
                        weddingDesignColor={weddingDesignColor}
                        weddingPlace={wedding.weddingPlace}
                        mode={mode}
                    />,
                    5: <VideoTemplate
                        key={index}
                        video={wedding.video}
                        rootRef={rootRef}
                        mode={mode}
                    />,
                    6: <CongratulationsTemplate
                        key={index}
                        baseInfo={wedding.baseInfo}
                        phone={wedding.phone}
                        weddingDesignColor={weddingDesignColor}
                        mode={mode}
                    />,
                    7: <GuestCommentsTemplate
                        key={index}
                        weddingDesignColor={weddingDesignColor}
                        url={wedding.url}
                        guestComments={wedding.guestCommentList}
                        guestComment={wedding.guestComment}
                        mode={mode}
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
