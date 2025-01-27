export enum OptionType {
    Template,
    BaseInfo,
    BaseMusic,
    LinkShare,
    WeddingSchedule,
    WeddingPlace,
    Greeting,
    GuestComment,
    MoneyInfo,
    Video,
    Phone,
    Rsvp,
    Gallery
}

export const optionRecord: Record<OptionType, {
    index: number;
    title: string;
    draggable: boolean;
}> = {
    [OptionType.Template]: {
        index: 0,
        title: '템플릿',
        draggable: false
    },
    [OptionType.BaseInfo]: {
        index: 1,
        title: '기본 정보',
        draggable: false
    },
    [OptionType.WeddingSchedule]: {
        index: 2,
        title: '예식 일시',
        draggable: true
    },
    [OptionType.WeddingPlace]: {
        index: 3,
        title: '예식 장소',
        draggable: true
    },
    [OptionType.Greeting]: {
        index: 4,
        title: '인사말',
        draggable: true
    },
    [OptionType.GuestComment]: {
        index: 5,
        title: '방명록',
        draggable: true
    },
    [OptionType.BaseMusic]: {
        index: 6,
        title: '배경음악',
        draggable: false
    },
    [OptionType.LinkShare]: {
        index: 7,
        title: '링크 공유',
        draggable: false
    },
    [OptionType.MoneyInfo]: {
        index: 8,
        title: '축의금',
        draggable: true
    },
    [OptionType.Video]: {
        index: 9,
        title: '동영상',
        draggable: true
    },
    [OptionType.Phone]: {
        index: 10,
        title: '연락처',
        draggable: true
    },
    [OptionType.Rsvp]: {
        index: 11,
        title: '참석 의사',
        draggable: true
    },
    [OptionType.Gallery]: {
        index: 12,
        title: '갤러리',
        draggable: true
    }
}