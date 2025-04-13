import React, {ReactElement, SVGProps} from "react";
import AddEmoji from "@src/userinterface/foundation/icon/AddEmoji";
import AddFill from "@src/userinterface/foundation/icon/AddFill";
import AddLine from "@src/userinterface/foundation/icon/AddLine";
import Alarm from "@src/userinterface/foundation/icon/Alarm";
import AlarmDisabled from "@src/userinterface/foundation/icon/AlarmDisabled";
import Book from "@src/userinterface/foundation/icon/Book";
import BookmarkFill from "@src/userinterface/foundation/icon/BookmarkFill";
import BookmarkLine from "@src/userinterface/foundation/icon/BookmarkLine";
import Calendar from "@src/userinterface/foundation/icon/Calendar";
import Camera from "@src/userinterface/foundation/icon/Camera";
import Chat from "@src/userinterface/foundation/icon/Chat";
import CheckFill from "@src/userinterface/foundation/icon/CheckFill";
import CheckLine from "@src/userinterface/foundation/icon/CheckLine";
import CheckRing from "@src/userinterface/foundation/icon/CheckRing";
import Copy from "@src/userinterface/foundation/icon/Copy";
import CrossFill from "@src/userinterface/foundation/icon/CrossFill";
import CrossLine from "@src/userinterface/foundation/icon/CrossLine";
import CrossRing from "@src/userinterface/foundation/icon/CrossRing";
import Crown from "@src/userinterface/foundation/icon/Crown";
import Write from "@src/userinterface/foundation/icon/Write";
import Utensils from "@src/userinterface/foundation/icon/Utensils";
import Trash from "@src/userinterface/foundation/icon/Trash";
import Substack from "@src/userinterface/foundation/icon/Substack";
import StopArrow from "@src/userinterface/foundation/icon/StopArrow";
import Star from "@src/userinterface/foundation/icon/Star";
import Show from "@src/userinterface/foundation/icon/Show";
import Setting from "@src/userinterface/foundation/icon/Setting";
import Send from "@src/userinterface/foundation/icon/Send";
import Search from "@src/userinterface/foundation/icon/Search";
import RadioFill from "@src/userinterface/foundation/icon/RadioFill";
import RadioLine from "@src/userinterface/foundation/icon/RadioLine";
import Ping from "@src/userinterface/foundation/icon/Ping";
import Photo from "@src/userinterface/foundation/icon/Photo";
import PersonFill from "@src/userinterface/foundation/icon/PersonFill";
import NormalArrow from "@src/userinterface/foundation/icon/NormalArrow";
import PenFill from "@src/userinterface/foundation/icon/PenFill";
import CurveArrow from "@src/userinterface/foundation/icon/CurveArrow";
import Detail from "@src/userinterface/foundation/icon/Detail";
import ExclamationLine from "@src/userinterface/foundation/icon/ExclamationLine";
import ExclamationFill from "@src/userinterface/foundation/icon/ExclamationFill";
import ExpandArrow from "@src/userinterface/foundation/icon/ExpandArrow";
import File from "@src/userinterface/foundation/icon/File";
import HeartFill from "@src/userinterface/foundation/icon/HeartFill";
import HeartLine from "@src/userinterface/foundation/icon/HeartLine";
import Home from "@src/userinterface/foundation/icon/Home";
import Hide from "@src/userinterface/foundation/icon/Hide";
import Logout from "@src/userinterface/foundation/icon/Logout";
import LoudSpeaker from "@src/userinterface/foundation/icon/LoudSpeaker";
import Manage from "@src/userinterface/foundation/icon/Manage";
import Moon from "@src/userinterface/foundation/icon/Moon";
import AddRing from "@src/userinterface/foundation/icon/AddRing";
import ArcticonsSpotistats from "@src/userinterface/foundation/icon/ArcticonsSpotistats";
import Hamburger from "@src/userinterface/foundation/icon/Hamburger";
import Clock from "@src/userinterface/foundation/icon/Clock";
import styled, {RuleSet} from "styled-components";
import Share from "@src/userinterface/foundation/icon/Share";
import Call from "@src/userinterface/foundation/icon/Call";
import Statistics from "@src/userinterface/foundation/icon/Statistics";
import PersonLine from "@src/userinterface/foundation/icon/PersonLine";
import Envelope from "@src/userinterface/foundation/icon/Envelope";
import Link from "@src/userinterface/foundation/icon/Link";
import PenLine from "@src/userinterface/foundation/icon/PenLine";
import DoubleArrowLeft from "@src/userinterface/foundation/icon/DoubleArrowLeft";
import AddPhoto from "@src/userinterface/foundation/icon/AddPhoto";
import Brush from "@src/userinterface/foundation/icon/Brush";
import CalendarLine from "@src/userinterface/foundation/icon/CalendarLine";
import CirclePlay from "@src/userinterface/foundation/icon/CirclePlay";
import Clipboard from "@src/userinterface/foundation/icon/Clipboard";
import EmailOpen from "@src/userinterface/foundation/icon/EmailOpen";
import LocationPoint from "@src/userinterface/foundation/icon/LocationPoint";
import Money from "@src/userinterface/foundation/icon/Money";
import Note from "@src/userinterface/foundation/icon/Note";
import Phone from "@src/userinterface/foundation/icon/Phone";
import Photo2 from "@src/userinterface/foundation/icon/Photo2";
import SendLine from "@src/userinterface/foundation/icon/SendLine";
import Video from "@src/userinterface/foundation/icon/Video";
import ShareLine from "@src/userinterface/foundation/icon/ShareLine";
import Edit from "@src/userinterface/foundation/icon/Edit";
import StopArrowDown from "@src/userinterface/foundation/icon/StopArrowDown";
import Play from "@src/userinterface/foundation/icon/Play";
import Pause from "@src/userinterface/foundation/icon/Pause";
import ExternalLink from "@src/userinterface/foundation/icon/ExternalLink";
import Stat from "@src/userinterface/foundation/icon/Stat";
import Kakao from "@src/userinterface/foundation/icon/Kakao";

export enum IconType {
    AddEmoji,
    AddFill,
    AddLine,
    AddPhoto,
    AddRing,
    Alarm,
    AlarmDisabled,
    ArcticonsSpotistats,
    Book,
    BookmarkFill,
    BookmarkLine,
    Brush,
    Calendar,
    CalendarLine,
    Call,
    Camera,
    Chat,
    CheckFill,
    CheckLine,
    CheckRing,
    CirclePlay,
    Clipboard,
    Clock,
    Copy,
    CrossFill,
    CrossLine,
    CrossRing,
    Crown,
    CurveArrow,
    Detail,
    DoubleArrowLeft,
    Edit,
    EmailOpen,
    Envelope,
    ExclamationFill,
    ExclamationLine,
    ExpandArrow,
    ExternalLink,
    File,
    Hamburger,
    HeartFill,
    HeartLine,
    Hide,
    Home,
    Kakao,
    Link,
    LocationPoint,
    Logout,
    LoudSpeaker,
    Manage,
    Money,
    Moon,
    NormalArrow,
    Note,
    Pause,
    PenFill,
    PenLine,
    PersonFill,
    PersonLine,
    Phone,
    Photo,
    Photo2,
    Ping,
    Play,
    RadioFill,
    RadioLine,
    Search,
    Send,
    SendLine,
    Setting,
    Share,
    ShareLine,
    Show,
    Star,
    Stat,
    Statistics,
    StopArrow,
    StopArrowDown,
    Substack,
    Trash,
    Utensils,
    Video,
    Write,
}

interface Props extends SVGProps<SVGSVGElement> {
    iconType: IconType;
    size?: number;
    ui?: RuleSet;
}

function Icon(
    {
        iconType,
        size = 24,
        ui,
        ...props
    }: Props
): ReactElement {
    const IconContent = (svgProps: SVGProps<SVGSVGElement>) => {
        switch (iconType) {
            case IconType.AddEmoji:
                return <AddEmoji {...svgProps}/>;
            case IconType.AddFill:
                return <AddFill {...svgProps}/>;
            case IconType.AddLine:
                return <AddLine {...svgProps}/>;
            case IconType.AddPhoto:
                return <AddPhoto {...svgProps}/>;
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
            case IconType.Brush:
                return <Brush {...svgProps}/>;
            case IconType.Calendar:
                return <Calendar {...svgProps}/>;
            case IconType.CalendarLine:
                return <CalendarLine {...svgProps}/>;
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
            case IconType.CirclePlay:
                return <CirclePlay {...svgProps}/>;
            case IconType.Clipboard:
                return <Clipboard {...svgProps}/>;
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
            case IconType.DoubleArrowLeft:
                return <DoubleArrowLeft {...svgProps}/>;
            case IconType.Edit:
                return <Edit {...svgProps}/>;
            case IconType.EmailOpen:
                return <EmailOpen {...svgProps}/>;
            case IconType.Envelope:
                return <Envelope {...svgProps}/>;
            case IconType.ExclamationFill:
                return <ExclamationFill {...svgProps}/>;
            case IconType.ExclamationLine:
                return <ExclamationLine {...svgProps}/>;
            case IconType.ExpandArrow:
                return <ExpandArrow {...svgProps}/>;
            case IconType.ExternalLink:
                return <ExternalLink {...svgProps}/>;
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
            case IconType.Kakao:
                return <Kakao {...svgProps}/>;
            case IconType.Link:
                return <Link {...svgProps}/>;
            case IconType.LocationPoint:
                return <LocationPoint {...svgProps}/>;
            case IconType.Logout:
                return <Logout {...svgProps}/>;
            case IconType.LoudSpeaker:
                return <LoudSpeaker {...svgProps}/>;
            case IconType.Manage:
                return <Manage {...svgProps}/>;
            case IconType.Money:
                return <Money {...svgProps}/>;
            case IconType.Moon:
                return <Moon {...svgProps}/>;
            case IconType.NormalArrow:
                return <NormalArrow {...svgProps}/>;
            case IconType.Note:
                return <Note {...svgProps}/>;
            case IconType.Pause:
                return <Pause {...svgProps}/>;
            case IconType.PenFill:
                return <PenFill {...svgProps}/>;
            case IconType.PenLine:
                return <PenLine {...svgProps}/>;
            case IconType.PersonFill:
                return <PersonFill {...svgProps}/>;
            case IconType.PersonLine:
                return <PersonLine {...svgProps}/>;
            case IconType.Phone:
                return <Phone {...svgProps}/>;
            case IconType.Photo:
                return <Photo {...svgProps}/>;
            case IconType.Photo2:
                return <Photo2 {...svgProps}/>;
            case IconType.Ping:
                return <Ping {...svgProps}/>;
            case IconType.Play:
                return <Play {...svgProps}/>;
            case IconType.RadioFill:
                return <RadioFill {...svgProps}/>;
            case IconType.RadioLine:
                return <RadioLine {...svgProps}/>;
            case IconType.Search:
                return <Search {...svgProps}/>;
            case IconType.Send:
                return <Send {...svgProps}/>;
            case IconType.SendLine:
                return <SendLine {...svgProps}/>;
            case IconType.Setting:
                return <Setting {...svgProps}/>;
            case IconType.Share:
                return <Share {...svgProps}/>;
            case IconType.ShareLine:
                return <ShareLine {...svgProps}/>;
            case IconType.Show:
                return <Show {...svgProps}/>;
            case IconType.Star:
                return <Star {...svgProps}/>;
            case IconType.Stat:
                return <Stat {...svgProps}/>;
            case IconType.Statistics:
                return <Statistics {...svgProps}/>;
            case IconType.StopArrow:
                return <StopArrow {...svgProps}/>;
            case IconType.StopArrowDown:
                return <StopArrowDown {...svgProps}/>;
            case IconType.Substack:
                return <Substack {...svgProps}/>;
            case IconType.Trash:
                return <Trash {...svgProps}/>;
            case IconType.Utensils:
                return <Utensils {...svgProps}/>;
            case IconType.Video:
                return <Video {...svgProps}/>;
            case IconType.Write:
                return <Write {...svgProps}/>;
        }
    }

    return (
        <IconWrapper $ui={ui}>
            <IconContent width={size} height={size} {...props}/>
        </IconWrapper>
    );
}

const IconWrapper = styled.div<{
    $ui?: RuleSet;
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({$ui}) => $ui};
`;

export default Icon;
