import {type ReactElement} from 'react';
import {type EditorNavigationBarType} from "~/editor/component/navigation-bar/EditorNavigationBarType.ts";
import View from "~/userinterface/core/View.tsx";
import {css, cx} from "@linaria/core";
import EditorInspectorDesign, {
    type WeddingDesignProps
} from "~/editor/component/inspector/EditorInspectorDesign.tsx";
import EditorInspectorBride from "~/editor/component/inspector/EditorInspectorBride.tsx";
import EditorInspectorBackgroundMusic, {
    type BackgroundMusicProps
} from "~/editor/component/inspector/EditorInspectorBackgroundMusic.tsx";
import EditorInspectorChangeOrder from "~/editor/component/inspector/EditorInspectorChangeOrder.tsx";
import EditorInspectorFontAndStyle from "~/editor/component/inspector/EditorInspectorFontAndStyle.tsx";
import EditorInspectorGallery from "~/editor/component/inspector/EditorInspectorGallery.tsx";
import EditorInspectorGreeting from "~/editor/component/inspector/EditorInspectorGreeting.tsx";
import EditorInspectorGuestComment from "~/editor/component/inspector/EditorInspectorGuestComment.tsx";
import EditorInspectorGroom from "~/editor/component/inspector/EditorInspectorGroom.tsx";
import EditorInspectorKakaotalkInvitationLetter
    from "~/editor/component/inspector/EditorInspectorKakaotalkInvitationLetter.tsx";
import EditorInspectorMoney from "~/editor/component/inspector/EditorInspectorMoney.tsx";
import EditorInspectorPhone from "~/editor/component/inspector/EditorInspectorPhone.tsx";
import EditorInspectorRsvp from "~/editor/component/inspector/EditorInspectorRsvp.tsx";
import EditorInspectorVideo from "~/editor/component/inspector/EditorInspectorVideo.tsx";
import EditorInspectorUrlShare from "~/editor/component/inspector/EditorInspectorUrlShare.tsx";
import EditorInspectorWeddingSchedule from "~/editor/component/inspector/EditorInspectorWeddingSchedule.tsx";
import EditorInspectorWeddingPlace from "~/editor/component/inspector/EditorInspectorWeddingPlace.tsx";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import type Binding from "~/shared/Binding.ts";
import {responsive} from "~/hook/ResponsiveSwitch.tsx";

interface Props extends Binding<WeddingDto>, WeddingDesignProps, BackgroundMusicProps {
    currentNavType: EditorNavigationBarType;
    ui?: ReturnType<typeof css>;
}

const EditorInspector = (
    {
        value: wedding,
        update,
        currentNavType,
        weddingDesigns,
        backgroundMusics,
        ui
    }: Props
) => {
    return (
        <View ui={cx(
            css`
                min-width: 412px;
                width: 412px;

                ${responsive.notDesktop} {
                    min-width: 0;
                    width: auto;
                    flex: 1;
                    min-height: 0;
                }
            `,
            ui
        )}>
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
                    kakaotalkInvitationLetter: <EditorInspectorKakaotalkInvitationLetter value={wedding}
                                                                                         update={update}/>,
                    changeOrder: <EditorInspectorChangeOrder value={wedding} update={update}/>,
                    // ai: <EditorInspectorAi/>
                }
                return view[currentNavType];
            })()}
        </View>
    );
};

export default EditorInspector;
