import {type ReactElement} from 'react';
import {type EditorNavigationBarType} from "~/routes/editor/component/EditorNavigationBarType.ts";
import View from "~/components/core/View.tsx";
import {css, cx} from "@linaria/core";
import EditorInspectorDesign, {
    type WeddingDesignProps
} from "~/routes/editor/component/EditorInspectorDesign.tsx";
import EditorInspectorBride from "~/routes/editor/component/EditorInspectorBride.tsx";
import EditorInspectorBackgroundMusic, {
    type BackgroundMusicProps
} from "~/routes/editor/component/EditorInspectorBackgroundMusic.tsx";
import EditorInspectorChangeOrder from "~/routes/editor/component/EditorInspectorChangeOrder.tsx";
import EditorInspectorFontAndStyle from "~/routes/editor/component/EditorInspectorFontAndStyle.tsx";
import EditorInspectorGallery from "~/routes/editor/component/EditorInspectorGallery.tsx";
import EditorInspectorGreeting from "~/routes/editor/component/EditorInspectorGreeting.tsx";
import EditorInspectorGuestComment from "~/routes/editor/component/EditorInspectorGuestComment.tsx";
import EditorInspectorGroom from "~/routes/editor/component/EditorInspectorGroom.tsx";
import EditorInspectorKakaotalkInvitationLetter
    from "~/routes/editor/component/EditorInspectorKakaotalkInvitationLetter.tsx";
import EditorInspectorMoney from "~/routes/editor/component/EditorInspectorMoney.tsx";
import EditorInspectorPhone from "~/routes/editor/component/EditorInspectorPhone.tsx";
import EditorInspectorRsvp from "~/routes/editor/component/EditorInspectorRsvp.tsx";
import EditorInspectorVideo from "~/routes/editor/component/EditorInspectorVideo.tsx";
import EditorInspectorUrlShare from "~/routes/editor/component/EditorInspectorUrlShare.tsx";
import EditorInspectorWeddingSchedule from "~/routes/editor/component/EditorInspectorWeddingSchedule.tsx";
import EditorInspectorWeddingPlace from "~/routes/editor/component/EditorInspectorWeddingPlace.tsx";
import type Binding from "~/lib/Binding.ts";
import {responsive} from "~/components/responsive.tsx";
import type Wedding from "~/api/value/Wedding.ts";

interface Props extends Binding<Wedding>, WeddingDesignProps, BackgroundMusicProps {
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
                    kakaotalkInvitationLetter: <EditorInspectorKakaotalkInvitationLetter
                        value={wedding}
                        update={update}
                    />,
                    changeOrder: <EditorInspectorChangeOrder value={wedding} update={update}/>,
                    // ai: <EditorInspectorAi/>
                }
                return view[currentNavType];
            })()}
        </View>
    );
};

export default EditorInspector;
