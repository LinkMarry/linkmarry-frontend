import React, {ReactElement} from 'react';
import EditorNavType from "@page/editor/EditorNavType";
import {Column} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import EditorInspectorDesign, {WeddingDesignProps} from "@page/editor/inspector/EditorInspectorDesign";
import EditorInspectorBride from "@page/editor/inspector/EditorInspectorBride";
import EditorInspectorBackgroundMusic, {
    BackgroundMusicProps
} from "@page/editor/inspector/EditorInspectorBackgroundMusic";
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
import useResponsive from "@hook/useResponsive";
import WeddingDto from "@remote/value/WeddingDto";
import Binding from "@src/interface/Binding";

interface Props extends Binding<WeddingDto>, WeddingDesignProps, BackgroundMusicProps {
    currentNavType: EditorNavType;
}

const EditorInspector = ({value: wedding, update, currentNavType, weddingDesigns, backgroundMusics}: Props) => {
    const {deviceSize} = useResponsive();

    return (
        <Column $alignItems={'stretch'} $ui={css`
            min-width: 412px;
            width: 412px;

            ${(deviceSize === 'mobile' || deviceSize === 'tablet') && css`
                min-width: 0;
                width: auto;
                flex: 1;
                min-height: 0;
            `};
        `}>
            {(() => {
                const view: Record<EditorNavType, ReactElement> = {
                    design: <EditorInspectorDesign value={wedding} update={update} weddingDesigns={weddingDesigns}/>,
                    groom: <EditorInspectorGroom value={wedding} update={update}/>,
                    bride: <EditorInspectorBride value={wedding} update={update}/>,
                    greeting: <EditorInspectorGreeting value={wedding} update={update}/>,
                    weddingSchedule: <EditorInspectorWeddingSchedule value={wedding} update={update}/>,
                    weddingPlace: <EditorInspectorWeddingPlace value={wedding} update={update}/>,
                    gallery: <EditorInspectorGallery value={wedding} update={update}/>,
                    backgroundMusic: <EditorInspectorBackgroundMusic
                        value={wedding}
                        update={update}
                        backgroundMusics={backgroundMusics}
                    />,
                    money: <EditorInspectorMoney value={wedding} update={update}/>,
                    video: <EditorInspectorVideo value={wedding} update={update}/>,
                    rsvp: <EditorInspectorRsvp value={wedding} update={update}/>,
                    phone: <EditorInspectorPhone value={wedding} update={update}/>,
                    guestComment: <EditorInspectorGuestComment value={wedding} update={update}/>,
                    fontAndStyle: <EditorInspectorFontAndStyle value={wedding} update={update}/>,
                    urlShare: <EditorInspectorUrlShare value={wedding} update={update}/>,
                    kakaotalkInvitationLetter: <EditorInspectorKakaotalkInvitationLetter value={wedding} update={update}/>,
                    changeOrder: <EditorInspectorChangeOrder value={wedding} update={update}/>,
                }
                return view[currentNavType];
            })()}
        </Column>
    );
};

export default EditorInspector;
