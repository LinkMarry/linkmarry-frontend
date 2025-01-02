import React, {CSSProperties, ReactElement} from "react";
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
    const IconContent = () => {
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
    }

    return (
        <div style={{width: size, height: size}}>
            <IconContent/>
        </div>
    );
};