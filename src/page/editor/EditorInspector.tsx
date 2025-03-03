import React, {ReactElement} from 'react';
import EditorNavType from "@page/editor/EditorNavType";
import {Column} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import EditorInspectorDesign from "@page/editor/EditorInspectorDesign";

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
                    backgroundMusic: <></>,
                    bride: <></>,
                    changeOrder: <></>,
                    design: <EditorInspectorDesign/>,
                    fontAndStyle: <></>,
                    gallery: <></>,
                    greeting: <></>,
                    groom: <></>,
                    guestComment: <></>,
                    kakaoInvitationLetter: <></>,
                    money: <></>,
                    phone: <></>,
                    rsvp: <></>,
                    urlShare: <></>,
                    video: <></>,
                    weddingLocation: <></>,
                    weddingSchedule: <></>
                }
                return view[currentNavType];
            })()}
        </Column>
    );
};

export default EditorInspector;
