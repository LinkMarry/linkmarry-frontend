import React, {useRef} from 'react';
import Wedding from "@remote/value/Wedding";
import * as S from '@src/component/template/Template1.style';
import MoneyInfoTemplate from "@src/component/template/component/MoneyInfoTemplate";
import FooterTemplate from "@src/component/template/component/FooterTemplate";
import {templateFontSizeRecord} from "@remote/value/Template";
import GuestCommentsTemplate from "@src/component/template/component/GuestCommentsTemplate";
import {increaseFontSize} from "@util/html.util";
import CongratulationsTemplate from "@src/component/template/component/CongratulationsTemplate";
import WeddingDayTemplate from "@src/component/template/component/weddingday/WeddingDayTemplate";
import LocationTemplate from "@src/component/template/component/LocationTemplate";
import PreviewTemplate from "@src/component/template/component/PreviewTemplate";
import GalleryTemplate from "@src/component/template/component/GalleryTemplate";
import VideoTemplate from "@src/component/template/component/VideoTemplate";

interface Template1Props {
    wedding: Wedding;
}

function Template1(
    {
        wedding
    }: Template1Props
) {
    const {templateColor, templateFont, templateFontSize} = wedding.template;
    const rootRef = useRef<HTMLDivElement>(null);

    (() => {
        const addFontSize = templateFontSizeRecord[templateFontSize].addFontSize;
        increaseFontSize(rootRef, addFontSize);
    })();

    return (
        <S.container ref={rootRef} $templateFont={templateFont}>
            <PreviewTemplate
                templateColor={templateColor}
                baseInfo={wedding.baseInfo}
                weddingPlace={wedding.weddingPlace}
                weddingSchedule={wedding.weddingSchedule}
                imgList={wedding.imgList}
            />
            <WeddingDayTemplate
                baseInfo={wedding.baseInfo}
                weddingSchedule={wedding.weddingSchedule}
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
                slideStyle={'style1'}
            />
            <LocationTemplate
                templateColor={templateColor}
                weddingPlace={wedding.weddingPlace}
            />
            <VideoTemplate video={wedding.video}/>
            <MoneyInfoTemplate moneyInfo={wedding.moneyInfo}/>
            <GuestCommentsTemplate
                templateColor={templateColor}
                url={wedding.url}
                baseInfo={wedding.baseInfo}
                guestComments={wedding.guestComments}
                guestComment={wedding.guestComment}
            />
            <FooterTemplate background={templateColor}/>
        </S.container>
    );
}


export default Template1;