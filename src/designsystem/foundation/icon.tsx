import React, {CSSProperties, ReactElement} from "react";
import AddEmoji from "./icon/AddEmoji";
import AddFill from "./icon/AddFill";
import AddLine from "./icon/AddLine";
import Alarm from "./icon/Alarm";
import AlarmDisabled from "./icon/AlarmDisabled";
import Book from "./icon/Book";
import BookmarkFill from "./icon/BookmarkFill";
import BookmarkLine from "./icon/BookmarkLine";
import Calendar from "./icon/Calendar";
import Camera from "./icon/Camera";
import Chat from "./icon/Chat";
import CheckFill from "./icon/CheckFill";
import CheckLine from "./icon/CheckLine";
import CheckRing from "./icon/CheckRing";
import Copy from "./icon/Copy";
import CrossFill from "./icon/CrossFill";
import CrossLine from "./icon/CrossLine";
import CrossRing from "./icon/CrossRing";
import Crown from "./icon/Crown";
import Write from "./icon/Write";
import Utensils from "./icon/Utensils";
import Trash from "./icon/Trash";
import Substack from "./icon/Substack";
import StopArrow from "./icon/StopArrow";
import Star from "./icon/Star";
import Show from "./icon/Show";
import Setting from "./icon/Setting";
import Send from "./icon/Send";
import Search from "./icon/Search";
import RadioFill from "./icon/RadioFill";
import RadioLine from "./icon/RadioLine";
import Ping from "./icon/Ping";
import Photo from "./icon/Photo";
import Person from "./icon/Person";
import NormalArrow from "./icon/NormalArrow";
import Pen from "./icon/Pen";
import CurveArrow from "./icon/CurveArrow";
import Detail from "./icon/Detail";
import ExclamationLine from "./icon/ExclamationLine";
import ExclamationFill from "./icon/ExclamationFill";
import ExpandArrow from "./icon/ExpandArrow";
import File from "./icon/File";
import HeartFill from "./icon/HeartFill";
import HeartLine from "./icon/HeartLine";
import Home from "./icon/Home";
import Hide from "./icon/Hide";
import Logout from "./icon/Logout";
import LoudSpeaker from "./icon/LoudSpeaker";
import Manage from "./icon/Manage";
import Moon from "./icon/Moon";
import AddRing from "./icon/AddRing";
import ArcticonsSpotistats from "./icon/ArcticonsSpotistats";
import Hamburger from "./icon/Hamburger";
import Clock from "./icon/Clock";

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
    Show,
    Star,
    StopArrow,
    Substack,
    Trash,
    Utensils,
    Write,
}

interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
    type: IconType;
    tint?: CSSProperties['color'];
    size?: CSSProperties['width'];
}

export default function Icon(
    {
        type,
        tint = 'black',
        size = 24,
        ...props
    }: IconProps
): ReactElement {
    switch (type) {
        case IconType.AddEmoji:
            return <AddEmoji fill={tint} width={size} height={size} {...props}/>;
        case IconType.AddFill:
            return <AddFill fill={tint} width={size} height={size} {...props}/>;
        case IconType.AddLine:
            return <AddLine fill={tint} width={size} height={size} {...props}/>;
        case IconType.AddRing:
            return <AddRing fill={tint} width={size} height={size} {...props}/>;
        case IconType.Alarm:
            return <Alarm fill={tint} width={size} height={size} {...props}/>;
        case IconType.AlarmDisabled:
            return <AlarmDisabled fill={tint} width={size} height={size} {...props}/>;
        case IconType.ArcticonsSpotistats:
            return <ArcticonsSpotistats fill={tint} width={size} height={size} {...props}/>;
        case IconType.Book:
            return <Book fill={tint} width={size} height={size} {...props}/>;
        case IconType.BookmarkFill:
            return <BookmarkFill fill={tint} width={size} height={size} {...props}/>;
        case IconType.BookmarkLine:
            return <BookmarkLine fill={tint} width={size} height={size} {...props}/>;
        case IconType.Calendar:
            return <Calendar fill={tint} width={size} height={size} {...props}/>;
        case IconType.Camera:
            return <Camera fill={tint} width={size} height={size} {...props}/>;
        case IconType.Chat:
            return <Chat fill={tint} width={size} height={size} {...props}/>;
        case IconType.CheckFill:
            return <CheckFill fill={tint} width={size} height={size} {...props}/>;
        case IconType.CheckLine:
            return <CheckLine fill={tint} width={size} height={size} {...props}/>;
        case IconType.CheckRing:
            return <CheckRing fill={tint} width={size} height={size} {...props}/>;
        case IconType.Clock:
            return <Clock fill={tint} width={size} height={size} {...props}/>;
        case IconType.Copy:
            return <Copy fill={tint} width={size} height={size} {...props}/>;
        case IconType.CrossFill:
            return <CrossFill fill={tint} width={size} height={size} {...props}/>;
        case IconType.CrossLine:
            return <CrossLine fill={tint} width={size} height={size} {...props}/>;
        case IconType.CrossRing:
            return <CrossRing fill={tint} width={size} height={size} {...props}/>;
        case IconType.Crown:
            return <Crown fill={tint} width={size} height={size} {...props}/>;
        case IconType.CurveArrow:
            return <CurveArrow fill={tint} width={size} height={size} {...props}/>;
        case IconType.Detail:
            return <Detail fill={tint} width={size} height={size} {...props}/>;
        case IconType.ExclamationFill:
            return <ExclamationFill fill={tint} width={size} height={size} {...props}/>;
        case IconType.ExclamationLine:
            return <ExclamationLine fill={tint} width={size} height={size} {...props}/>;
        case IconType.ExpandArrow:
            return <ExpandArrow fill={tint} width={size} height={size} {...props}/>;
        case IconType.File:
            return <File fill={tint} width={size} height={size} {...props}/>;
        case IconType.Hamburger:
            return <Hamburger fill={tint} width={size} height={size} {...props}/>;
        case IconType.HeartFill:
            return <HeartFill fill={tint} width={size} height={size} {...props}/>;
        case IconType.HeartLine:
            return <HeartLine fill={tint} width={size} height={size} {...props}/>;
        case IconType.Hide:
            return <Hide fill={tint} width={size} height={size} {...props}/>;
        case IconType.Home:
            return <Home fill={tint} width={size} height={size} {...props}/>;
        case IconType.Logout:
            return <Logout fill={tint} width={size} height={size} {...props}/>;
        case IconType.LoudSpeaker:
            return <LoudSpeaker fill={tint} width={size} height={size} {...props}/>;
        case IconType.Manage:
            return <Manage fill={tint} width={size} height={size} {...props}/>;
        case IconType.Moon:
            return <Moon fill={tint} width={size} height={size} {...props}/>;
        case IconType.NormalArrow:
            return <NormalArrow fill={tint} width={size} height={size} {...props}/>;
        case IconType.Pen:
            return <Pen fill={tint} width={size} height={size} {...props}/>;
        case IconType.Person:
            return <Person fill={tint} width={size} height={size} {...props}/>;
        case IconType.Photo:
            return <Photo fill={tint} width={size} height={size} {...props}/>;
        case IconType.Ping:
            return <Ping fill={tint} width={size} height={size} {...props}/>;
        case IconType.RadioFill:
            return <RadioFill fill={tint} width={size} height={size} {...props}/>;
        case IconType.RadioLine:
            return <RadioLine fill={tint} width={size} height={size} {...props}/>;
        case IconType.Search:
            return <Search fill={tint} width={size} height={size} {...props}/>;
        case IconType.Send:
            return <Send fill={tint} width={size} height={size} {...props}/>;
        case IconType.Setting:
            return <Setting fill={tint} width={size} height={size} {...props}/>;
        case IconType.Show:
            return <Show fill={tint} width={size} height={size} {...props}/>;
        case IconType.Star:
            return <Star fill={tint} width={size} height={size} {...props}/>;
        case IconType.StopArrow:
            return <StopArrow fill={tint} width={size} height={size} {...props}/>;
        case IconType.Substack:
            return <Substack fill={tint} width={size} height={size} {...props}/>;
        case IconType.Trash:
            return <Trash fill={tint} width={size} height={size} {...props}/>;
        case IconType.Utensils:
            return <Utensils fill={tint} width={size} height={size} {...props}/>;
        case IconType.Write:
            return <Write fill={tint} width={size} height={size} {...props}/>;
    }
};