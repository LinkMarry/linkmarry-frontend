import React, {useEffect, useRef, useState} from 'react';
import Wedding from "@remote/value/Wedding";
import MoneyInfoTemplate from "@src/component/template/component/MoneyInfoTemplate";
import FooterTemplate from "@src/component/template/component/FooterTemplate";
import {templateFontSizeRecord} from "@remote/value/WeddingDesign";
import GuestCommentsTemplate from "@src/component/template/component/GuestCommentsTemplate";
import {increaseFontSize} from "@util/html.util";
import CongratulationsTemplate from "@src/component/template/component/CongratulationsTemplate";
import WeddingDayTemplate from "@src/component/template/component/weddingday/WeddingDayTemplate";
import LocationTemplate from "@src/component/template/component/LocationTemplate";
import PreviewTemplate from "@src/component/template/component/preview/PreviewTemplate";
import GalleryTemplate, {GallerySlideStyle} from "@src/component/template/component/GalleryTemplate";
import VideoTemplate from "@src/component/template/component/VideoTemplate";
import {DDayStyle} from "@src/component/template/component/weddingday/DDay";
import InvitationLetterTemplate, {
    InvitationLetterStyle
} from "@src/component/template/component/InvitationLetterTemplate";
import RsvpDialog from "@src/component/template/dialog/rsvp/RsvpDialog";
import CreateRsvpDialog from "@src/component/template/dialog/rsvp/CreateRsvpDialog";
import {Helmet} from "react-helmet";
import RsvpTemplate from "@src/component/template/component/RsvpTemplate";
import WaterMarkSheet from "@src/component/template/component/WaterMarkSheet";
import {Column} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import {implementText} from "@designsystem/foundation/text/TextProperties";

interface Template1Props {
    wedding: Wedding;
    isPreview?: boolean;
    onRefresh?: () => void;
}

function TemplateComponent(
    {
        wedding,
        isPreview = false,
        onRefresh
    }: Template1Props
) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [showRsvpDialog, setShowRsvpDialog] = useState((() => {
        if (isPreview) return false;
        if (!wedding.rsvp.startPopupStatus) return false;
        // todo: fix
        // return Cookies.get(`hide_RsvpDialog_${wedding.url}`) === undefined
    })());
    const [showCreateRsvpDialog, setShowCreateRsvpDialog] = useState(false);
    const {weddingDesignColor, weddingDesignFont, weddingDesignFontSize} = wedding.template;
    const rootRef = useRef<HTMLDivElement>(null);

    (() => {
        const addFontSize = templateFontSizeRecord[weddingDesignFontSize].addFontSize;
        increaseFontSize(rootRef, addFontSize);
        // todo: fix
        // Cookies.remove('hide_RsvpDialog')
    })();

    useEffect(() => {
        (async () => {
            const audio = audioRef.current;
            if (wedding.backgroundMusic.effect && !isPreview && audio) {
                await navigator.mediaDevices.getUserMedia({audio: true});
                await audio.play();
                audio.volume = 0.15;
            }
        })()
    }, []);

    // TODO: Temp
    const slideStyle: GallerySlideStyle = 'style1';
    const dDayStyle: DDayStyle = 'style1';
    const invitationLetterStyle: InvitationLetterStyle = 'style1';
    // const slideStyle: Record<TemplateName, GallerySlideStyle | undefined> = {
    //     템플릿1: 'style1',
    //     템플릿2: 'style2',
    //     템플릿3: 'style1',
    //     템플릿4: 'style2',
    //     템플릿5: undefined,
    //     템플릿6: 'style1',
    // };
    //
    // const dDayStyle: Record<TemplateName, DDayStyle> = {
    //     템플릿1: 'style1',
    //     템플릿2: 'style2',
    //     템플릿3: 'style1',
    //     템플릿4: 'style2',
    //     템플릿5: 'style2',
    //     템플릿6: 'style1',
    // }
    //
    // const invitationLetterStyle: Record<TemplateName, InvitationLetterStyle> = {
    //     템플릿1: 'style1',
    //     템플릿2: 'style1',
    //     템플릿3: 'style2',
    //     템플릿4: 'style3',
    //     템플릿5: 'style3',
    //     템플릿6: 'style2',
    // }

    // console.log(`pos - ${wedding.position}`)

    return (
        <Column ref={rootRef} $customStyle={css`
            max-width: 436px;
            width: 100%;
            align-items: stretch;

            *:not(.override-font):not(.override-font *) {
                ${weddingDesignFont && implementText({
                    fontFamily: weddingDesignFont
                })};
            }
        `}>
            <audio
                src={wedding.backgroundMusic.musicUrl}
                ref={audioRef}
                loop={true}
            />
            <Helmet>
                <meta property={'og:title'} content={wedding.linkShare.urlTitle}/>
                <meta property={'og:description'} content={wedding.linkShare.urlContent}/>
                <meta property={'og:image'} content={wedding.linkShare.urlImgUrl}/>
                <title>{wedding.linkShare.urlTitle}</title>
            </Helmet>
            <PreviewTemplate
                template={wedding.template}
                baseInfo={wedding.baseInfo}
                weddingPlace={wedding.weddingPlace}
                weddingSchedule={wedding.weddingSchedule}
            />
            {/*{wedding.position.map(index => {*/}
            {/*    switch (index) {*/}
            {/*        case optionRecord[OptionType.Greeting].index:*/}
            {/*            return <InvitationLetterTemplate*/}
            {/*                key={index}*/}
            {/*                baseInfo={wedding.baseInfo}*/}
            {/*                greeting={wedding.greeting}*/}
            {/*                invitationLetterStyle={invitationLetterStyle}*/}
            {/*            />;*/}
            {/*        case optionRecord[OptionType.WeddingSchedule].index:*/}
            {/*            return <WeddingDayTemplate*/}
            {/*                key={index}*/}
            {/*                baseInfo={wedding.baseInfo}*/}
            {/*                weddingSchedule={wedding.weddingSchedule}*/}
            {/*                dDayStyle={dDayStyle}*/}
            {/*            />*/}
            {/*        case optionRecord[OptionType.Phone].index:*/}
            {/*            return <CongratulationsTemplate*/}
            {/*                key={index}*/}
            {/*                baseInfo={wedding.baseInfo}*/}
            {/*                phone={wedding.phone}*/}
            {/*                templateColor={templateColor}*/}
            {/*            />*/}
            {/*        case optionRecord[OptionType.Gallery].index:*/}
            {/*            return <GalleryTemplate*/}
            {/*                key={index}*/}
            {/*                rootRef={rootRef}*/}
            {/*                imgDesign={wedding.imgDesign}*/}
            {/*                imgList={wedding.imgList}*/}
            {/*                slideStyle={slideStyle}*/}
            {/*            />*/}
            {/*        case optionRecord[OptionType.WeddingPlace].index:*/}
            {/*            return <LocationTemplate*/}
            {/*                key={index}*/}
            {/*                templateColor={templateColor}*/}
            {/*                weddingPlace={wedding.weddingPlace}*/}
            {/*            />*/}
            {/*        case optionRecord[OptionType.Video].index:*/}
            {/*            return <VideoTemplate*/}
            {/*                key={index}*/}
            {/*                video={wedding.video}*/}
            {/*            />*/}
            {/*        case optionRecord[OptionType.MoneyInfo].index:*/}
            {/*            return <MoneyInfoTemplate*/}
            {/*                key={index}*/}
            {/*                baseInfo={wedding.baseInfo}*/}
            {/*                moneyInfo={wedding.moneyInfo}*/}
            {/*            />*/}
            {/*        case optionRecord[OptionType.GuestComment].index:*/}
            {/*            return <GuestCommentsTemplate*/}
            {/*                key={index}*/}
            {/*                templateColor={templateColor}*/}
            {/*                url={wedding.url}*/}
            {/*                guestComments={wedding.guestCommentList}*/}
            {/*                guestComment={wedding.guestComment}*/}
            {/*                onRefresh={onRefresh ?? (() => {*/}
            {/*                })}*/}
            {/*            />*/}
            {/*        case optionRecord[OptionType.Rsvp].index:*/}
            {/*            return <RsvpTemplate*/}
            {/*                key={index}*/}
            {/*                templateColor={templateColor}*/}
            {/*                baseInfo={wedding.baseInfo}*/}
            {/*                weddingSchedule={wedding.weddingSchedule}*/}
            {/*                onClickCreateRsvp={() => setShowRsvpDialog(true)}*/}
            {/*            />*/}
            {/*        default:*/}
            {/*            return <></>;*/}
            {/*    }*/}
            {/*})}*/}
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


export default TemplateComponent;
