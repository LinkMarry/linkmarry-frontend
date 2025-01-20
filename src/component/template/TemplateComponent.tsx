import React, {useRef, useState} from 'react';
import Wedding from "@remote/value/Wedding";
import * as S from '@src/component/template/TemplateComponent.style';
import MoneyInfoTemplate from "@src/component/template/component/MoneyInfoTemplate";
import FooterTemplate from "@src/component/template/component/FooterTemplate";
import {templateFontSizeRecord, TemplateName} from "@remote/value/Template";
import GuestCommentsTemplate from "@src/component/template/component/GuestCommentsTemplate";
import {increaseFontSize} from "@util/html.util";
import CongratulationsTemplate from "@src/component/template/component/CongratulationsTemplate";
import WeddingDayTemplate from "@src/component/template/component/weddingday/WeddingDayTemplate";
import LocationTemplate from "@src/component/template/component/LocationTemplate";
import PreviewTemplate from "@src/component/template/component/PreviewTemplate";
import GalleryTemplate, {GallerySlideStyle} from "@src/component/template/component/GalleryTemplate";
import VideoTemplate from "@src/component/template/component/VideoTemplate";
import {DDayStyle} from "@src/component/template/component/weddingday/DDay";
import InvitationLetterTemplate, {
    InvitationLetterStyle
} from "@src/component/template/component/InvitationLetterTemplate";
import RsvpDialog from "@src/component/template/dialog/rsvp/RsvpDialog";
import Cookies from "js-cookie";
import CreateRsvpDialog from "@src/component/template/dialog/rsvp/CreateRsvpDialog";

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
    const [showRsvpDialog, setShowRsvpDialog] = useState(
        isPreview ? false : Cookies.get(`hide_RsvpDialog_${wedding.url}`) === undefined
    );
    const [showCreateRsvpDialog, setShowCreateRsvpDialog] = useState(false);
    const {templateColor, templateFont, templateFontSize} = wedding.template;
    const rootRef = useRef<HTMLDivElement>(null);

    (() => {
        const addFontSize = templateFontSizeRecord[templateFontSize].addFontSize;
        increaseFontSize(rootRef, addFontSize);
        Cookies.remove('hide_RsvpDialog')
    })();

    const slideStyle: Record<TemplateName, GallerySlideStyle | undefined> = {
        템플릿1: 'style1',
        템플릿2: 'style2',
        템플릿3: 'style1',
        템플릿4: 'style2',
        템플릿5: undefined,
        템플릿6: 'style1',
    };

    const dDayStyle: Record<TemplateName, DDayStyle> = {
        템플릿1: 'style1',
        템플릿2: 'style2',
        템플릿3: 'style1',
        템플릿4: 'style2',
        템플릿5: 'style2',
        템플릿6: 'style1',
    }

    const invitationLetterStyle: Record<TemplateName, InvitationLetterStyle> = {
        템플릿1: 'style1',
        템플릿2: 'style1',
        템플릿3: 'style2',
        템플릿4: 'style3',
        템플릿5: 'style3',
        템플릿6: 'style2',
    }

    return (
        <S.container ref={rootRef} $templateFont={templateFont}>
            <PreviewTemplate
                template={wedding.template}
                baseInfo={wedding.baseInfo}
                weddingPlace={wedding.weddingPlace}
                weddingSchedule={wedding.weddingSchedule}
                imgList={wedding.imgList}
            />
            <InvitationLetterTemplate
                baseInfo={wedding.baseInfo}
                greeting={wedding.greeting}
                invitationLetterStyle={invitationLetterStyle[wedding.template.templateName]}
            />
            <WeddingDayTemplate
                baseInfo={wedding.baseInfo}
                weddingSchedule={wedding.weddingSchedule}
                dDayStyle={dDayStyle[wedding.template.templateName]}
            />
            <CongratulationsTemplate
                baseInfo={wedding.baseInfo}
                phone={wedding.phone}
                templateColor={templateColor}
            />
            <GalleryTemplate
                rootRef={rootRef}
                imgDesign={wedding.imgDesign}
                imgList={wedding.imgList}
                slideStyle={slideStyle[wedding.template.templateName]}
            />
            <LocationTemplate
                templateColor={templateColor}
                weddingPlace={wedding.weddingPlace}
            />
            <VideoTemplate video={wedding.video}/>
            <MoneyInfoTemplate baseInfo={wedding.baseInfo} moneyInfo={wedding.moneyInfo}/>
            <GuestCommentsTemplate
                templateColor={templateColor}
                url={wedding.url}
                baseInfo={wedding.baseInfo}
                guestComments={wedding.guestCommentList}
                guestComment={wedding.guestComment}
                onRefresh={onRefresh ?? (() => {
                })}
            />
            <FooterTemplate background={templateColor}/>
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
        </S.container>
    );
}


export default TemplateComponent;