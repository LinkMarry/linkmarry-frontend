import {type ReactElement, type SVGProps} from "react";
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
import styled, {type RuleSet} from "styled-components";
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

export type IconType =
    | 'AddEmoji'
    | 'AddFill'
    | 'AddLine'
    | 'AddPhoto'
    | 'AddRing'
    | 'Alarm'
    | 'AlarmDisabled'
    | 'ArcticonsSpotistats'
    | 'Book'
    | 'BookmarkFill'
    | 'BookmarkLine'
    | 'Brush'
    | 'Calendar'
    | 'CalendarLine'
    | 'Call'
    | 'Camera'
    | 'Chat'
    | 'CheckFill'
    | 'CheckLine'
    | 'CheckRing'
    | 'CirclePlay'
    | 'Clipboard'
    | 'Clock'
    | 'Copy'
    | 'CrossFill'
    | 'CrossLine'
    | 'CrossRing'
    | 'Crown'
    | 'CurveArrow'
    | 'Detail'
    | 'DoubleArrowLeft'
    | 'Edit'
    | 'EmailOpen'
    | 'Envelope'
    | 'ExclamationFill'
    | 'ExclamationLine'
    | 'ExpandArrow'
    | 'ExternalLink'
    | 'File'
    | 'Hamburger'
    | 'HeartFill'
    | 'HeartLine'
    | 'Hide'
    | 'Home'
    | 'Kakao'
    | 'Link'
    | 'LocationPoint'
    | 'Logout'
    | 'LoudSpeaker'
    | 'Manage'
    | 'Money'
    | 'Moon'
    | 'NormalArrow'
    | 'Note'
    | 'Pause'
    | 'PenFill'
    | 'PenLine'
    | 'PersonFill'
    | 'PersonLine'
    | 'Phone'
    | 'Photo'
    | 'Photo2'
    | 'Ping'
    | 'Play'
    | 'RadioFill'
    | 'RadioLine'
    | 'Search'
    | 'Send'
    | 'SendLine'
    | 'Setting'
    | 'Share'
    | 'ShareLine'
    | 'Show'
    | 'Star'
    | 'Stat'
    | 'Statistics'
    | 'StopArrow'
    | 'StopArrowDown'
    | 'Substack'
    | 'Trash'
    | 'Utensils'
    | 'Video'
    | 'Write';

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


    return (
        <IconWrapper $ui={ui}>
            <IconContent width={size} height={size} iconType={iconType} {...props}/>
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

interface IconContentProps extends SVGProps<SVGSVGElement> {
    iconType: IconType;
}

const IconContent = ({iconType, ...svgProps}: IconContentProps) => {
    switch (iconType) {
        case 'AddEmoji':
            return <AddEmoji {...svgProps}/>;
        case 'AddFill':
            return <AddFill {...svgProps}/>;
        case 'AddLine':
            return <AddLine {...svgProps}/>;
        case 'AddPhoto':
            return <AddPhoto {...svgProps}/>;
        case 'AddRing':
            return <AddRing {...svgProps}/>;
        case 'Alarm':
            return <Alarm {...svgProps}/>;
        case 'AlarmDisabled':
            return <AlarmDisabled {...svgProps}/>;
        case 'ArcticonsSpotistats':
            return <ArcticonsSpotistats {...svgProps}/>;
        case 'Book':
            return <Book {...svgProps}/>;
        case 'BookmarkFill':
            return <BookmarkFill {...svgProps}/>;
        case 'BookmarkLine':
            return <BookmarkLine {...svgProps}/>;
        case 'Brush':
            return <Brush {...svgProps}/>;
        case 'Calendar':
            return <Calendar {...svgProps}/>;
        case 'CalendarLine':
            return <CalendarLine {...svgProps}/>;
        case 'Call':
            return <Call {...svgProps}/>;
        case 'Camera':
            return <Camera {...svgProps}/>;
        case 'Chat':
            return <Chat {...svgProps}/>;
        case 'CheckFill':
            return <CheckFill {...svgProps}/>;
        case 'CheckLine':
            return <CheckLine {...svgProps}/>;
        case 'CheckRing':
            return <CheckRing {...svgProps}/>;
        case 'CirclePlay':
            return <CirclePlay {...svgProps}/>;
        case 'Clipboard':
            return <Clipboard {...svgProps}/>;
        case 'Clock':
            return <Clock {...svgProps}/>;
        case 'Copy':
            return <Copy {...svgProps}/>;
        case 'CrossFill':
            return <CrossFill {...svgProps}/>;
        case 'CrossLine':
            return <CrossLine {...svgProps}/>;
        case 'CrossRing':
            return <CrossRing {...svgProps}/>;
        case 'Crown':
            return <Crown {...svgProps}/>;
        case 'CurveArrow':
            return <CurveArrow {...svgProps}/>;
        case 'Detail':
            return <Detail {...svgProps}/>;
        case 'DoubleArrowLeft':
            return <DoubleArrowLeft {...svgProps}/>;
        case 'Edit':
            return <Edit {...svgProps}/>;
        case 'EmailOpen':
            return <EmailOpen {...svgProps}/>;
        case 'Envelope':
            return <Envelope {...svgProps}/>;
        case 'ExclamationFill':
            return <ExclamationFill {...svgProps}/>;
        case 'ExclamationLine':
            return <ExclamationLine {...svgProps}/>;
        case 'ExpandArrow':
            return <ExpandArrow {...svgProps}/>;
        case 'ExternalLink':
            return <ExternalLink {...svgProps}/>;
        case 'File':
            return <File {...svgProps}/>;
        case 'Hamburger':
            return <Hamburger {...svgProps}/>;
        case 'HeartFill':
            return <HeartFill {...svgProps}/>;
        case 'HeartLine':
            return <HeartLine {...svgProps}/>;
        case 'Hide':
            return <Hide {...svgProps}/>;
        case 'Home':
            return <Home {...svgProps}/>;
        case 'Kakao':
            return <Kakao {...svgProps}/>;
        case 'Link':
            return <Link {...svgProps}/>;
        case 'LocationPoint':
            return <LocationPoint {...svgProps}/>;
        case 'Logout':
            return <Logout {...svgProps}/>;
        case 'LoudSpeaker':
            return <LoudSpeaker {...svgProps}/>;
        case 'Manage':
            return <Manage {...svgProps}/>;
        case 'Money':
            return <Money {...svgProps}/>;
        case 'Moon':
            return <Moon {...svgProps}/>;
        case 'NormalArrow':
            return <NormalArrow {...svgProps}/>;
        case 'Note':
            return <Note {...svgProps}/>;
        case 'Pause':
            return <Pause {...svgProps}/>;
        case 'PenFill':
            return <PenFill {...svgProps}/>;
        case 'PenLine':
            return <PenLine {...svgProps}/>;
        case 'PersonFill':
            return <PersonFill {...svgProps}/>;
        case 'PersonLine':
            return <PersonLine {...svgProps}/>;
        case 'Phone':
            return <Phone {...svgProps}/>;
        case 'Photo':
            return <Photo {...svgProps}/>;
        case 'Photo2':
            return <Photo2 {...svgProps}/>;
        case 'Ping':
            return <Ping {...svgProps}/>;
        case 'Play':
            return <Play {...svgProps}/>;
        case 'RadioFill':
            return <RadioFill {...svgProps}/>;
        case 'RadioLine':
            return <RadioLine {...svgProps}/>;
        case 'Search':
            return <Search {...svgProps}/>;
        case 'Send':
            return <Send {...svgProps}/>;
        case 'SendLine':
            return <SendLine {...svgProps}/>;
        case 'Setting':
            return <Setting {...svgProps}/>;
        case 'Share':
            return <Share {...svgProps}/>;
        case 'ShareLine':
            return <ShareLine {...svgProps}/>;
        case 'Show':
            return <Show {...svgProps}/>;
        case 'Star':
            return <Star {...svgProps}/>;
        case 'Stat':
            return <Stat {...svgProps}/>;
        case 'Statistics':
            return <Statistics {...svgProps}/>;
        case 'StopArrow':
            return <StopArrow {...svgProps}/>;
        case 'StopArrowDown':
            return <StopArrowDown {...svgProps}/>;
        case 'Substack':
            return <Substack {...svgProps}/>;
        case 'Trash':
            return <Trash {...svgProps}/>;
        case 'Utensils':
            return <Utensils {...svgProps}/>;
        case 'Video':
            return <Video {...svgProps}/>;
        case 'Write':
            return <Write {...svgProps}/>;
    }
}

export default Icon;
