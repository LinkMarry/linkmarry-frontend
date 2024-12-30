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
    Rsvp
}

export const options: {
    [key in OptionType]: {
        title: string;
    }
} = {
    [OptionType.Template]: {
        title: '템플릿',
    },
    [OptionType.BaseInfo]: {
        title: '기본 정보',
    },
    [OptionType.WeddingSchedule]: {
        title: '예식 일시',
    },
    [OptionType.WeddingLocation]: {
        title: '예식 장소',
    },
    [OptionType.Greeting]: {
        title: '인사말',
    },
    [OptionType.GuestComment]: {
        title: '방명록',
    },
    [OptionType.BaseMusic]: {
        title: '배경음악',
    },
    [OptionType.LinkShare]: {
        title: '링크 공유',
    },
    [OptionType.MoneyInfo]: {
        title: '축의금',
    },
    [OptionType.Video]: {
        title: '동영상',
    },
    [OptionType.Phone]: {
        title: '연락처',
    },
    [OptionType.Rsvp]: {
        title: '참석 의사',
    },
}