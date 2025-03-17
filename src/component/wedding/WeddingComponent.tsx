import React, {ReactNode, useRef, useState} from 'react';
import Wedding from "@remote/value/Wedding";
import MoneyInfoTemplate from "@src/component/wedding/component/MoneyInfoTemplate";
import FooterTemplate from "@src/component/wedding/component/FooterTemplate";
import {weddingDesignFontSizeMap} from "@remote/value/WeddingDesign";
import GuestCommentsTemplate from "@src/component/wedding/component/GuestCommentsTemplate";
import {increaseFontSize} from "@util/html.util";
import CongratulationsTemplate from "@src/component/wedding/component/CongratulationsTemplate";
import WeddingDayTemplate from "@src/component/wedding/component/weddingday/WeddingDayTemplate";
import LocationTemplate from "@src/component/wedding/component/LocationTemplate";
import PreviewTemplate from "@src/component/wedding/component/preview/PreviewTemplate";
import GalleryTemplate from "@src/component/wedding/component/GalleryTemplate";
import VideoTemplate from "@src/component/wedding/component/VideoTemplate";
import InvitationLetterTemplate from "@src/component/wedding/component/InvitationLetterTemplate";
import RsvpDialog from "@src/component/wedding/dialog/rsvp/RsvpDialog";
import CreateRsvpDialog from "@src/component/wedding/dialog/rsvp/CreateRsvpDialog";
import {Helmet} from "react-helmet";
import RsvpTemplate from "@src/component/wedding/component/RsvpTemplate";
import WaterMarkSheet from "@src/component/wedding/component/WaterMarkSheet";
import {Column} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import {implementText} from "@designsystem/foundation/text/TextProperties";
import useAudio from "@hook/useAudio";
import Position from "@remote/value/Position";
import {useCookies} from "react-cookie";

interface WeddingComponentProps {
    wedding: Wedding;
    isPreview?: boolean;
    onRefresh?: () => void;
}

function WeddingComponent(
    {
        wedding,
        isPreview = false,
        onRefresh
    }: WeddingComponentProps
) {
    const cookieKey = `hide_RsvpDialog/${wedding.url}`;
    const [cookies] = useCookies([cookieKey]);

    const [showRsvpDialog, setShowRsvpDialog] = useState((() => {
        if (isPreview || !wedding.rsvp.startPopupStatus) return false;
        return cookies[cookieKey] === undefined
    })());

    const {ref} = useAudio(wedding.backgroundMusic.effect && !isPreview);
    const [showCreateRsvpDialog, setShowCreateRsvpDialog] = useState(false);
    const {weddingDesignColor, weddingDesignFont, weddingDesignFontSize} = wedding.weddingDesign;
    const rootRef = useRef<HTMLDivElement>(null);

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
            <audio ref={ref} src={wedding.backgroundMusic.backgroundMusic} loop={true}/>
            <Helmet>
                <meta property={'og:title'} content={wedding.linkShare.urlTitle}/>
                <meta property={'og:description'} content={wedding.linkShare.urlContent}/>
                <meta property={'og:image'} content={wedding.linkShare.urlImgUrl}/>
                <title>{wedding.linkShare.urlTitle}</title>
            </Helmet>
            <PreviewTemplate
                template={wedding.weddingDesign}
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
                        weddingDesignColor={weddingDesignColor}
                        baseInfo={wedding.baseInfo}
                        weddingSchedule={wedding.weddingSchedule}
                        onClickCreateRsvp={() => setShowRsvpDialog(true)}
                    />
                };
                return view[index as Position];
            })}
            <FooterTemplate background={weddingDesignColor}/>
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
            {wedding.waterMark && !isPreview && (
                <WaterMarkSheet url={wedding.url}/>
            )}
        </Column>
    );
}


export default WeddingComponent;
