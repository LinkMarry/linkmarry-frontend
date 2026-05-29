import {RemoveWatermarkDialog, Button, View, WeddingComponent} from "~/components";
import {css} from "@linaria/core";
import {useWeddingInvitationEditorScreen} from "./hook.ts";
import CreateWeddingDialog from "./components/CreateWeddingDialog.tsx";

import {desktopStyle} from "~/style/responsive";
import EditorPreview from "./components/EditorPreview.tsx";
import EditorShell from "~/routes/editor/components/EditorShell.tsx";
import EditorHeader from "~/routes/editor/components/EditorHeader.tsx";
import EditorNavigationBar from "~/routes/editor/components/EditorNavigationBar.tsx";

import {
    type WeddingInvitationEditorNavigationBarType,
    WeddingInvitationEditorNavigationBarTypeList,
    weddingInvitationEditorNavigationBarTypeRecord,
} from "~/routes/editor/domain.ts";

import type Binding from "~/lib/Binding.ts";
import type {Wedding, WeddingDesignPreset, Music} from "~/domain";
import EditorInspectorShell from "~/routes/editor/components/EditorInspectorShell.tsx";
import EditorInspectorDesign from "./components/inspector/design.tsx";
import EditorInspectorGroom from "./components/inspector/groom.tsx";
import WeddingInvitationEditorBrideInspector from "./components/inspector/bride.tsx";
import EditorInspectorGreeting from "./components/inspector/greeting.tsx";
import EditorInspectorWeddingSchedule from "./components/inspector/wedding-schedule.tsx";
import EditorInspectorWeddingPlace from "./components/inspector/wedding-place.tsx";
import EditorInspectorGallery from "./components/inspector/gallery.tsx";
import WeddingInvitationEditorBackgroundMusicInspector from "./components/inspector/background-music.tsx";
import WeddingInvitationEditorEditorMoneyInspector from "./components/inspector/money.tsx";
import WeddingInvitationEditorEditorVideoInspector from "./components/inspector/video.tsx";
import WeddingInvitationEditorEditorRsvpInspector from "./components/inspector/rsvp.tsx";
import EditorInspectorPhone from "./components/inspector/phone.tsx";
import EditorInspectorGuestComment from "./components/inspector/guest-comment.tsx";
import EditorInspectorFontAndStyle from "./components/inspector/font-and-style.tsx";
import EditorInspectorUrlShare from "./components/inspector/url-share.tsx";
import EditorInspectorKakaotalkInvitationLetter from "./components/inspector/kakaotalk-invitation-letter.tsx";
import WeddingInvitationEditorInspectorChangeOrder from "./components/inspector/change-order.tsx";

const navItems = WeddingInvitationEditorNavigationBarTypeList.map(type => ({
    id: type,
    label: weddingInvitationEditorNavigationBarTypeRecord[type].navigationBarText,
    icon: weddingInvitationEditorNavigationBarTypeRecord[type].icon,
}));

const WeddingInvitationEditorScreen = () => {
    const {
        wedding,
        updateWedding,
        isSaving,
        musics,
        selectedNav,
        setSelectedNav,
        openInspector,
        toggleInspector,
        weddingDesigns,
        showRemoveWatermarkDialog,
        setShowRemoveWatermarkDialog,
        handleShowPreview,
        handleRemoveWatermark,
    } = useWeddingInvitationEditorScreen();

    return (
        <EditorShell
            dialogs={
                <>
                    <RemoveWatermarkDialog
                        show={showRemoveWatermarkDialog}
                        url={wedding.url}
                        dismiss={() => setShowRemoveWatermarkDialog(false)}
                    />
                    <CreateWeddingDialog value={wedding} update={updateWedding} />
                </>
            }
            header={
                <EditorHeader
                    statusText={isSaving ? "저장 중..." : undefined}
                    actions={
                        <>
                            <View
                                flexDirection={"row"}
                                ui={css`
                                    align-items: flex-start;
                                    gap: 8px;

                                    @media (min-width: 1025px) {
                                        display: none;
                                    }
                                `}
                            >
                                <Button
                                    text={"미리보기"}
                                    size={"small"}
                                    buttonType={"tonal"}
                                    onClick={handleShowPreview}
                                />
                                <Button text={"워터마크 제거"} size={"small"} onClick={handleRemoveWatermark} />
                            </View>
                            <Button
                                text={"워터마크 제거"}
                                size={"medium"}
                                onClick={handleRemoveWatermark}
                                ui={desktopStyle}
                            />
                        </>
                    }
                />
            }
            navigationBar={
                <EditorNavigationBar
                    items={navItems}
                    currentId={selectedNav}
                    onChange={id => setSelectedNav(id)}
                    openInspector={openInspector}
                    onToggleInspector={toggleInspector}
                />
            }
            inspector={
                openInspector && (
                    <EditorInspectorShell>
                        <EditorInspectorContent
                            value={wedding}
                            update={updateWedding}
                            currentNavType={selectedNav}
                            weddingDesigns={weddingDesigns}
                            backgroundMusics={musics}
                        />
                    </EditorInspectorShell>
                )
            }
            preview={
                <EditorPreview ui={desktopStyle}>
                    <WeddingComponent wedding={wedding} mode={"preview"} />
                </EditorPreview>
            }
        />
    );
};

interface EditorInspectorProps extends Binding<Wedding> {
    currentNavType: WeddingInvitationEditorNavigationBarType;
    weddingDesigns?: WeddingDesignPreset[];
    backgroundMusics?: Music[];
}

const EditorInspectorContent = ({
    currentNavType,
    value,
    update,
    weddingDesigns,
    backgroundMusics,
}: EditorInspectorProps) => {
    switch (currentNavType) {
        case "design":
            return <EditorInspectorDesign value={value} update={update} weddingDesigns={weddingDesigns} />;
        case "groom":
            return <EditorInspectorGroom value={value} update={update} />;
        case "bride":
            return <WeddingInvitationEditorBrideInspector value={value} update={update} />;
        case "greeting":
            return <EditorInspectorGreeting value={value} update={update} />;
        case "weddingSchedule":
            return <EditorInspectorWeddingSchedule value={value} update={update} />;
        case "weddingPlace":
            return <EditorInspectorWeddingPlace value={value} update={update} />;
        case "gallery":
            return <EditorInspectorGallery value={value} update={update} />;
        case "backgroundMusic":
            return (
                <WeddingInvitationEditorBackgroundMusicInspector
                    value={value}
                    update={update}
                    backgroundMusics={backgroundMusics}
                />
            );
        case "money":
            return <WeddingInvitationEditorEditorMoneyInspector value={value} update={update} />;
        case "video":
            return <WeddingInvitationEditorEditorVideoInspector value={value} update={update} />;
        case "rsvp":
            return <WeddingInvitationEditorEditorRsvpInspector value={value} update={update} />;
        case "phone":
            return <EditorInspectorPhone value={value} update={update} />;
        case "guestComment":
            return <EditorInspectorGuestComment value={value} update={update} />;
        case "fontAndStyle":
            return <EditorInspectorFontAndStyle value={value} update={update} />;
        case "urlShare":
            return <EditorInspectorUrlShare value={value} update={update} />;
        case "kakaotalkInvitationLetter":
            return <EditorInspectorKakaotalkInvitationLetter value={value} update={update} />;
        case "changeOrder":
            return <WeddingInvitationEditorInspectorChangeOrder value={value} update={update} />;
        default:
            return null;
    }
};

export default WeddingInvitationEditorScreen;
