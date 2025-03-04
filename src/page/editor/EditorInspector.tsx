import React, {ReactElement} from 'react';
import EditorNavType from "@page/editor/EditorNavType";
import {Column} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import EditorInspectorDesign from "@page/editor/EditorInspectorDesign";
import EditorInspectorBride from "@page/editor/EditorInspectorBride";

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
                    backgroundMusic: <></>,
                    changeOrder: <></>,
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
