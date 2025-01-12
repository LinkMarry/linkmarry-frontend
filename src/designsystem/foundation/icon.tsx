import React, {CSSProperties, ReactElement, SVGProps} from "react";
import AddEmoji from "@designsystem/foundation/icon/AddEmoji";
import AddFill from "@designsystem/foundation/icon/AddFill";
import AddLine from "@designsystem/foundation/icon/AddLine";
import Alarm from "@designsystem/foundation/icon/Alarm";
import AlarmDisabled from "@designsystem/foundation/icon/AlarmDisabled";
import Book from "@designsystem/foundation/icon/Book";
import BookmarkFill from "@designsystem/foundation/icon/BookmarkFill";
import BookmarkLine from "@designsystem/foundation/icon/BookmarkLine";
import Calendar from "@designsystem/foundation/icon/Calendar";
import Camera from "@designsystem/foundation/icon/Camera";
import Chat from "@designsystem/foundation/icon/Chat";
import CheckFill from "@designsystem/foundation/icon/CheckFill";
import CheckLine from "@designsystem/foundation/icon/CheckLine";
import CheckRing from "@designsystem/foundation/icon/CheckRing";
import Copy from "@designsystem/foundation/icon/Copy";
import CrossFill from "@designsystem/foundation/icon/CrossFill";
import CrossLine from "@designsystem/foundation/icon/CrossLine";
import CrossRing from "@designsystem/foundation/icon/CrossRing";
import Crown from "@designsystem/foundation/icon/Crown";
import Write from "@designsystem/foundation/icon/Write";
import Utensils from "@designsystem/foundation/icon/Utensils";
import Trash from "@designsystem/foundation/icon/Trash";
import Substack from "@designsystem/foundation/icon/Substack";
import StopArrow from "@designsystem/foundation/icon/StopArrow";
import Star from "@designsystem/foundation/icon/Star";
import Show from "@designsystem/foundation/icon/Show";
import Setting from "@designsystem/foundation/icon/Setting";
import Send from "@designsystem/foundation/icon/Send";
import Search from "@designsystem/foundation/icon/Search";
import RadioFill from "@designsystem/foundation/icon/RadioFill";
import RadioLine from "@designsystem/foundation/icon/RadioLine";
import Ping from "@designsystem/foundation/icon/Ping";
import Photo from "@designsystem/foundation/icon/Photo";
import Person from "@designsystem/foundation/icon/Person";
import NormalArrow from "@designsystem/foundation/icon/NormalArrow";
import Pen from "@designsystem/foundation/icon/Pen";
import CurveArrow from "@designsystem/foundation/icon/CurveArrow";
import Detail from "@designsystem/foundation/icon/Detail";
import ExclamationLine from "@designsystem/foundation/icon/ExclamationLine";
import ExclamationFill from "@designsystem/foundation/icon/ExclamationFill";
import ExpandArrow from "@designsystem/foundation/icon/ExpandArrow";
import File from "@designsystem/foundation/icon/File";
import HeartFill from "@designsystem/foundation/icon/HeartFill";
import HeartLine from "@designsystem/foundation/icon/HeartLine";
import Home from "@designsystem/foundation/icon/Home";
import Hide from "@designsystem/foundation/icon/Hide";
import Logout from "@designsystem/foundation/icon/Logout";
import LoudSpeaker from "@designsystem/foundation/icon/LoudSpeaker";
import Manage from "@designsystem/foundation/icon/Manage";
import Moon from "@designsystem/foundation/icon/Moon";
import AddRing from "@designsystem/foundation/icon/AddRing";
import ArcticonsSpotistats from "@designsystem/foundation/icon/ArcticonsSpotistats";
import Hamburger from "@designsystem/foundation/icon/Hamburger";
import Clock from "@designsystem/foundation/icon/Clock";
import styled, {css} from "styled-components";
import Share from "@designsystem/foundation/icon/Share";
import Call from "@designsystem/foundation/icon/Call";

export enum IconType {
    AddEmoji,
    AddFill,
    AddLine,
    AddRing,
    Alarm,
    AlarmDisabled,
    ArcticonsSpotistats,
    Book,
    BookmarkFill,
    BookmarkLine,
    Calendar,
    Call,
    Camera,
    Chat,
    CheckFill,
    CheckLine,
    CheckRing,
    Clock,
    Copy,
    CrossFill,
    CrossLine,
    CrossRing,
    Crown,
    CurveArrow,
    Detail,
    ExclamationFill,
    ExclamationLine,
    ExpandArrow,
    File,
    Hamburger,
    HeartFill,
    HeartLine,
    Hide,
    Home,
    Logout,
    LoudSpeaker,
    Manage,
    Moon,
    NormalArrow,
    Pen,
    Person,
    Photo,
    Ping,
    RadioFill,
    RadioLine,
    Search,
    Send,
    Setting,
    Share,
    Show,
    Star,
    StopArrow,
    Substack,
    Trash,
    Utensils,
    Write,
}

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    type: IconType;
    tint?: CSSProperties['color'];
    size?: number;
}

export default function Icon(
    {
        type,
        tint = 'black',
        size = 24,
        ...props
    }: IconProps
): ReactElement {
    const IconContent = (svgProps: SVGProps<SVGSVGElement>) => {
        switch (type) {
            case IconType.AddEmoji:
                return <AddEmoji {...svgProps}/>;
            case IconType.AddFill:
                return <AddFill {...svgProps}/>;
            case IconType.AddLine:
                return <AddLine {...svgProps}/>;
            case IconType.AddRing:
                return <AddRing {...svgProps}/>;
            case IconType.Alarm:
                return <Alarm {...svgProps}/>;
            case IconType.AlarmDisabled:
                return <AlarmDisabled {...svgProps}/>;
            case IconType.ArcticonsSpotistats:
                return <ArcticonsSpotistats {...svgProps}/>;
            case IconType.Book:
                return <Book {...svgProps}/>;
            case IconType.BookmarkFill:
                return <BookmarkFill {...svgProps}/>;
            case IconType.BookmarkLine:
                return <BookmarkLine {...svgProps}/>;
            case IconType.Calendar:
                return <Calendar {...svgProps}/>;
            case IconType.Call:
                return <Call {...svgProps}/>;
            case IconType.Camera:
                return <Camera {...svgProps}/>;
            case IconType.Chat:
                return <Chat {...svgProps}/>;
            case IconType.CheckFill:
                return <CheckFill {...svgProps}/>;
            case IconType.CheckLine:
                return <CheckLine {...svgProps}/>;
            case IconType.CheckRing:
                return <CheckRing {...svgProps}/>;
            case IconType.Clock:
                return <Clock {...svgProps}/>;
            case IconType.Copy:
                return <Copy {...svgProps}/>;
            case IconType.CrossFill:
                return <CrossFill {...svgProps}/>;
            case IconType.CrossLine:
                return <CrossLine {...svgProps}/>;
            case IconType.CrossRing:
                return <CrossRing {...svgProps}/>;
            case IconType.Crown:
                return <Crown {...svgProps}/>;
            case IconType.CurveArrow:
                return <CurveArrow {...svgProps}/>;
            case IconType.Detail:
                return <Detail {...svgProps}/>;
            case IconType.ExclamationFill:
                return <ExclamationFill {...svgProps}/>;
            case IconType.ExclamationLine:
                return <ExclamationLine {...svgProps}/>;
            case IconType.ExpandArrow:
                return <ExpandArrow {...svgProps}/>;
            case IconType.File:
                return <File {...svgProps}/>;
            case IconType.Hamburger:
                return <Hamburger {...svgProps}/>;
            case IconType.HeartFill:
                return <HeartFill {...svgProps}/>;
            case IconType.HeartLine:
                return <HeartLine {...svgProps}/>;
            case IconType.Hide:
                return <Hide {...svgProps}/>;
            case IconType.Home:
                return <Home {...svgProps}/>;
            case IconType.Logout:
                return <Logout {...svgProps}/>;
            case IconType.LoudSpeaker:
                return <LoudSpeaker {...svgProps}/>;
            case IconType.Manage:
                return <Manage {...svgProps}/>;
            case IconType.Moon:
                return <Moon {...svgProps}/>;
            case IconType.NormalArrow:
                return <NormalArrow {...svgProps}/>;
            case IconType.Pen:
                return <Pen {...svgProps}/>;
            case IconType.Person:
                return <Person {...svgProps}/>;
            case IconType.Photo:
                return <Photo {...svgProps}/>;
            case IconType.Ping:
                return <Ping {...svgProps}/>;
            case IconType.RadioFill:
                return <RadioFill {...svgProps}/>;
            case IconType.RadioLine:
                return <RadioLine {...svgProps}/>;
            case IconType.Search:
                return <Search {...svgProps}/>;
            case IconType.Send:
                return <Send {...svgProps}/>;
            case IconType.Setting:
                return <Setting {...svgProps}/>;
            case IconType.Share:
                return <Share {...svgProps}/>;
            case IconType.Show:
                return <Show {...svgProps}/>;
            case IconType.Star:
                return <Star {...svgProps}/>;
            case IconType.StopArrow:
                return <StopArrow {...svgProps}/>;
            case IconType.Substack:
                return <Substack {...svgProps}/>;
            case IconType.Trash:
                return <Trash {...svgProps}/>;
            case IconType.Utensils:
                return <Utensils {...svgProps}/>;
            case IconType.Write:
                return <Write {...svgProps}/>;
        }
    }

    return (
        <IconWrapper width={size} height={size} {...props}>
            <IconContent fill={tint} width={size} height={size}/>
        </IconWrapper>
    );
};

const IconWrapper = styled.div<{ width: number, height: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({width, height}) => css`
        width: ${width}px;
        height: ${height}px;
    `}
`