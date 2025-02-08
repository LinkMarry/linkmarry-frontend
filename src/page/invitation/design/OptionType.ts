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

export type OptionTypeMode = 'static' | 'draggable' | 'toggle';

export const optionRecord: Record<OptionType, {
    index: number;
    title: string;
    mode: OptionTypeMode;
}> = {
    [OptionType.Template]: {
        index: 0,
        title: '템플릿',
        mode: 'static'
    },
    [OptionType.BaseInfo]: {
        index: 1,
        title: '기본 정보',
        mode: 'static'
    },
    [OptionType.WeddingSchedule]: {
        index: 2,
        title: '예식 일시',
        mode: 'draggable'
    },
    [OptionType.WeddingPlace]: {
        index: 3,
        title: '예식 장소',
        mode: 'draggable'
    },
    [OptionType.Greeting]: {
        index: 4,
        title: '인사말',
        mode: 'draggable'
    },
    [OptionType.GuestComment]: {
        index: 5,
        title: '방명록',
        mode: 'draggable'
    },
    [OptionType.BaseMusic]: {
        index: 6,
        title: '배경음악',
        mode: 'static'
    },
    [OptionType.LinkShare]: {
        index: 7,
        title: '링크 공유',
        mode: 'static'
    },
    [OptionType.MoneyInfo]: {
        index: 8,
        title: '축의금',
        mode: 'draggable'
    },
    [OptionType.Video]: {
        index: 9,
        title: '동영상',
        mode: 'draggable'
    },
    [OptionType.Phone]: {
        index: 10,
        title: '연락처',
        mode: 'draggable'
    },
    [OptionType.Rsvp]: {
        index: 11,
        title: '참석 의사',
        mode: 'draggable'
    },
    [OptionType.Gallery]: {
        index: 12,
        title: '갤러리',
        mode: 'draggable'
    }
}