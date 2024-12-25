import React from "react";
import BaseInfoOption from "./option/BaseInfoOption";
import WeddingScheduleOption from "./option/WeddingScheduleOption";
import WeddingLocationOption from "./option/WeddingLocationOption";
import GreetingOption from "./option/GreetingOption";
import GuestCommentOption from "./option/GuestCommentOption";
import BaseMusicOption from "./option/BaseMusicOption";
import LinkShareOption from "./option/LinkShareOption";
import MoneyInfoOption from "./option/MoneyInfoOption";
import VideoOption from "./option/VideoOption";
import PhoneOption from "./option/PhoneOption";
import RSVPOption from "./option/RSVPOption";

export enum OptionType {
    Template,
    BaseInfo,
    WeddingSchedule,
    WeddingLocation,
    Greeting,
    GuestComment,
    BaseMusic,
    LinkShare,
    MoneyInfo,
    Video,
    Phone,
    RSVP
}

export const options: {
    [key in OptionType]: {
        title: string;
        children: () => React.ReactNode;
    }
} = {
    [OptionType.Template]: {
        title: '템플릿',
        children: () => undefined
    },
    [OptionType.BaseInfo]: {
        title: '기본 정보',
        children: BaseInfoOption
    },
    [OptionType.WeddingSchedule]: {
        title: '예식 일시',
        children: WeddingScheduleOption
    },
    [OptionType.WeddingLocation]: {
        title: '예식 장소',
        children: WeddingLocationOption
    },
    [OptionType.Greeting]: {
        title: '인사말',
        children: GreetingOption
    },
    [OptionType.GuestComment]: {
        title: '방명록',
        children: GuestCommentOption
    },
    [OptionType.BaseMusic]: {
        title: '배경음악',
        children: BaseMusicOption
    },
    [OptionType.LinkShare]: {
        title: '링크 공유',
        children: LinkShareOption
    },
    [OptionType.MoneyInfo]: {
        title: '축의금',
        children: MoneyInfoOption
    },
    [OptionType.Video]: {
        title: '동영상',
        children: VideoOption
    },
    [OptionType.Phone]: {
        title: '연락처',
        children: PhoneOption
    },
    [OptionType.RSVP]: {
        title: '참석 의사',
        children: RSVPOption
    },
}