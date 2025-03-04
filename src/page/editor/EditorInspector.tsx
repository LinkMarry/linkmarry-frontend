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
import {hideScrollBar} from "@util/css.util";

interface Props {
    currentNavType: EditorNavType;
}

const EditorInspector = ({currentNavType}: Props) => {

    return (
        <Column $alignItems={'stretch'} $customStyle={css`
            width: 412px;
            padding: 32px 24px 100px 24px;
            overflow-y: scroll;
            ${hideScrollBar};
        `}>
            {(() => {
                const view: Record<EditorNavType, ReactElement> = {
                    design: <EditorInspectorDesign/>,
                    groom: <EditorInspectorGroom/>,
                    bride: <EditorInspectorBride/>,
                    greeting: <EditorInspectorGreeting/>,
                    weddingSchedule: <EditorInspectorWeddingSchedule/>,
                    weddingLocation: <EditorInspectorWeddingLocation/>,
                    gallery: <EditorInspectorGallery/>,
                    backgroundMusic: <EditorInspectorBackgroundMusic/>,
                    money: <EditorInspectorMoney/>,
                    video: <EditorInspectorVideo/>,
                    rsvp: <EditorInspectorRsvp/>,
                    phone: <EditorInspectorPhone/>,
                    guestComment: <EditorInspectorGuestComment/>,
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
