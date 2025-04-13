import React, {ReactElement} from 'react';
import EditorNavigationBarType from "@src/feature/editor/component/navigation-bar/EditorNavigationBarType";
import {Column} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import EditorInspectorDesign, {WeddingDesignProps} from "@src/feature/editor/component/inspector/EditorInspectorDesign";
import EditorInspectorBride from "@src/feature/editor/component/inspector/EditorInspectorBride";
import EditorInspectorBackgroundMusic, {
    BackgroundMusicProps
} from "@src/feature/editor/component/inspector/EditorInspectorBackgroundMusic";
import EditorInspectorChangeOrder from "@src/feature/editor/component/inspector/EditorInspectorChangeOrder";
import EditorInspectorFontAndStyle from "@src/feature/editor/component/inspector/EditorInspectorFontAndStyle";
import EditorInspectorGallery from "@src/feature/editor/component/inspector/EditorInspectorGallery";
import EditorInspectorGreeting from "@src/feature/editor/component/inspector/EditorInspectorGreeting";
import EditorInspectorGuestComment from "@src/feature/editor/component/inspector/EditorInspectorGuestComment";
import EditorInspectorGroom from "@src/feature/editor/component/inspector/EditorInspectorGroom";
import EditorInspectorKakaotalkInvitationLetter from "@src/feature/editor/component/inspector/EditorInspectorKakaotalkInvitationLetter";
import EditorInspectorMoney from "@src/feature/editor/component/inspector/EditorInspectorMoney";
import EditorInspectorPhone from "@src/feature/editor/component/inspector/EditorInspectorPhone";
import EditorInspectorRsvp from "@src/feature/editor/component/inspector/EditorInspectorRsvp";
import EditorInspectorVideo from "@src/feature/editor/component/inspector/EditorInspectorVideo";
import EditorInspectorUrlShare from "@src/feature/editor/component/inspector/EditorInspectorUrlShare";
import EditorInspectorWeddingSchedule from "@src/feature/editor/component/inspector/EditorInspectorWeddingSchedule";
import EditorInspectorWeddingPlace from "@src/feature/editor/component/inspector/EditorInspectorWeddingPlace";
import useResponsive from "@src/hook/useResponsive";
import WeddingDto from "@src/infrastructure/network/value/WeddingDto";
import Binding from "@src/shared/Binding";
import EditorInspectorAi from "@src/feature/editor/component/inspector/EditorInspectorAI";

interface Props extends Binding<WeddingDto>, WeddingDesignProps, BackgroundMusicProps {
    currentNavType: EditorNavigationBarType;
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
                const view: Record<EditorNavigationBarType, ReactElement> = {
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
                    ai: <EditorInspectorAi/>
                }
                return view[currentNavType];
            })()}
        </Column>
    );
};

export default EditorInspector;
