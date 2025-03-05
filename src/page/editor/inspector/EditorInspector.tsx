import React, {ReactElement} from 'react';
import EditorNavType from "@page/editor/EditorNavType";
import {Column} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import EditorInspectorDesign from "@page/editor/inspector/EditorInspectorDesign";
import EditorInspectorBride from "@page/editor/inspector/EditorInspectorBride";
import EditorInspectorBackgroundMusic from "@page/editor/inspector/EditorInspectorBackgroundMusic";
import EditorInspectorChangeOrder from "@page/editor/inspector/EditorInspectorChangeOrder";
import EditorInspectorFontAndStyle from "@page/editor/inspector/EditorInspectorFontAndStyle";
import EditorInspectorGallery from "@page/editor/inspector/EditorInspectorGallery";
import EditorInspectorGreeting from "@page/editor/inspector/EditorInspectorGreeting";
import EditorInspectorGuestComment from "@page/editor/inspector/EditorInspectorGuestComment";
import EditorInspectorGroom from "@page/editor/inspector/EditorInspectorGroom";
import EditorInspectorKakaotalkInvitationLetter from "@page/editor/inspector/EditorInspectorKakaotalkInvitationLetter";
import EditorInspectorMoney from "@page/editor/inspector/EditorInspectorMoney";
import EditorInspectorPhone from "@page/editor/inspector/EditorInspectorPhone";
import EditorInspectorRsvp from "@page/editor/inspector/EditorInspectorRsvp";
import EditorInspectorVideo from "@page/editor/inspector/EditorInspectorVideo";
import EditorInspectorUrlShare from "@page/editor/inspector/EditorInspectorUrlShare";
import EditorInspectorWeddingSchedule from "@page/editor/inspector/EditorInspectorWeddingSchedule";
import EditorInspectorWeddingPlace from "@page/editor/inspector/EditorInspectorWeddingPlace";
import {hideScrollBar} from "@util/css.util";
import useResponsive from "@hook/useResponsive";
import WeddingDto from "@remote/value/WeddingDto";
import Binding from "@src/interface/Binding";

interface Props extends Binding<WeddingDto> {
    currentNavType: EditorNavType;
}

const EditorInspector = ({value: wedding, onChange, currentNavType}: Props) => {
    const {deviceSize} = useResponsive();

    return (
        <Column $alignItems={'stretch'} $customStyle={css`
            min-width: 412px;
            width: 412px;
            padding: 32px 24px 100px 24px;
            overflow-y: scroll;
            ${hideScrollBar};

            ${(deviceSize === 'mobile' || deviceSize === 'tablet') && css`
                min-width: 0;
                width: auto;
                padding: 24px 16px 40px 16px;
            `};
        `}>
            {(() => {
                const view: Record<EditorNavType, ReactElement> = {
                    design: <EditorInspectorDesign value={wedding.weddingDesign} onChange={value => onChange({
                        ...wedding,
                        weddingDesign: value
                    })}/>,
                    groom: <EditorInspectorGroom value={wedding.baseInfo} onChange={value => onChange({
                        ...wedding,
                        baseInfo: value
                    })}/>,
                    bride: <EditorInspectorBride value={wedding.baseInfo} onChange={value => onChange({
                        ...wedding,
                        baseInfo: value
                    })}/>,
                    greeting: <EditorInspectorGreeting value={wedding.greeting} onChange={value => onChange({
                        ...wedding,
                        greeting: value
                    })}/>,
                    weddingSchedule: <EditorInspectorWeddingSchedule value={wedding.weddingSchedule} onChange={value => onChange({
                        ...wedding,
                        weddingSchedule: value
                    })}/>,
                    weddingPlace: <EditorInspectorWeddingPlace value={wedding.weddingPlace} onChange={value => onChange({
                        ...wedding,
                        weddingPlace: value
                    })}/>,
                    gallery: <EditorInspectorGallery value={wedding.gallery} onChange={value => onChange({
                        ...wedding,
                        gallery: value
                    })}/>,
                    backgroundMusic: <EditorInspectorBackgroundMusic value={wedding.baseMusic} onChange={value => onChange({
                        ...wedding,
                        baseMusic: value
                    })}/>,
                    money: <EditorInspectorMoney value={wedding.moneyInfo} onChange={value => onChange({
                        ...wedding,
                        moneyInfo: value
                    })}/>,
                    video: <EditorInspectorVideo value={wedding.video} onChange={value => onChange({
                        ...wedding,
                        video: value
                    })}/>,
                    rsvp: <EditorInspectorRsvp value={wedding.rsvp} onChange={value => onChange({
                        ...wedding,
                        rsvp: value
                    })}/>,
                    phone: <EditorInspectorPhone value={wedding.phone} onChange={value => onChange({
                        ...wedding,
                        phone: value
                    })}/>,
                    guestComment: <EditorInspectorGuestComment value={wedding.guestComment} onChange={value => onChange({
                        ...wedding,
                        guestComment: value
                    })}/>,
                    fontAndStyle: <EditorInspectorFontAndStyle/>,
                    urlShare: <EditorInspectorUrlShare/>,
                    kakaotalkInvitationLetter: <EditorInspectorKakaotalkInvitationLetter/>,
                    changeOrder: <EditorInspectorChangeOrder/>,
                }
                return view[currentNavType];
            })()}
        </Column>
    );
};

export default EditorInspector;
