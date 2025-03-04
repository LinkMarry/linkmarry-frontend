import React, {ReactElement} from 'react';
import EditorNavType from "@page/editor/EditorNavType";
import {Column} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import EditorInspectorDesign from "@page/editor/EditorInspectorDesign";
import EditorInspectorBride from "@page/editor/EditorInspectorBride";
import EditorInspectorBackgroundMusic from "@page/editor/EditorInspectorBackgroundMusic";
import EditorInspectorChangeOrder from "@page/editor/EditorInspectorChangeOrder";
import EditorInspectorFontAndStyle from "@page/editor/EditorInspectorFontAndStyle";
import EditorInspectorGallery from "@page/editor/EditorInspectorGallery";
import EditorInspectorGreeting from "@page/editor/EditorInspectorGreeting";
import EditorInspectorGuestComment from "@page/editor/EditorInspectorGuestComment";
import EditorInspectorGroom from "@page/editor/EditorInspectorGroom";
import EditorInspectorKakaotalkInvitationLetter from "@page/editor/EditorInspectorKakaotalkInvitationLetter";
import EditorInspectorMoney from "@page/editor/EditorInspectorMoney";
import EditorInspectorPhone from "@page/editor/EditorInspectorPhone";
import EditorInspectorRsvp from "@page/editor/EditorInspectorRsvp";
import EditorInspectorVideo from "@page/editor/EditorInspectorVideo";
import EditorInspectorUrlShare from "@page/editor/EditorInspectorUrlShare";
import EditorInspectorWeddingSchedule from "@page/editor/EditorInspectorWeddingSchedule";
import EditorInspectorWeddingLocation from "@page/editor/EditorInspectorWeddingLocation";

interface Props {
    currentNavType: EditorNavType;
}

const EditorInspector = ({currentNavType}: Props) => {

    return (
        <Column $alignItems={'stretch'} $customStyle={css`
            width: 412px;
            padding: 32px 24px 100px 24px;
        `}>
            {(() => {
                const view: Record<EditorNavType, ReactElement> = {
                    design: <EditorInspectorDesign/>,
                    bride: <EditorInspectorBride/>,
                    backgroundMusic: <EditorInspectorBackgroundMusic/>,
                    changeOrder: <EditorInspectorChangeOrder/>,
                    fontAndStyle: <EditorInspectorFontAndStyle/>,
                    gallery: <EditorInspectorGallery/>,
                    greeting: <EditorInspectorGreeting/>,
                    groom: <EditorInspectorGroom/>,
                    guestComment: <EditorInspectorGuestComment/>,
                    kakaotalkInvitationLetter: <EditorInspectorKakaotalkInvitationLetter/>,
                    money: <EditorInspectorMoney/>,
                    phone: <EditorInspectorPhone/>,
                    rsvp: <EditorInspectorRsvp/>,
                    urlShare: <EditorInspectorUrlShare/>,
                    video: <EditorInspectorVideo/>,
                    weddingLocation: <EditorInspectorWeddingLocation/>,
                    weddingSchedule: <EditorInspectorWeddingSchedule/>
                }
                return view[currentNavType];
            })()}
        </Column>
    );
};

export default EditorInspector;
