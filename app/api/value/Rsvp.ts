export default interface Rsvp {
    // 제목
    rsvpTitle: string;

    // 내용
    rsvpContent: string;

    // 참석 수집 여부
    attendStatus: boolean;

    // 식사 수집 여부
    attendMealStatus: boolean;

    // 참석자 수 수집 여부
    attendGuestCntStatus: boolean;

    // 연락처 수집 여부
    attendPhoneStatus: boolean;

    // 버스 탑성 수집 여부
    attendBusStatus: boolean;

    // 추가 전달 사항 수집여부
    attendEtcStatus: boolean;

    // 청첩장 열 때 팝업 여부
    startPopupStatus: boolean;

    // RSVP 활성화 여부
    rsvpActivate: boolean;
}

export const defaultRsvp: Rsvp = {
    rsvpTitle: "",
    rsvpContent: "",
    attendStatus: false,
    attendMealStatus: false,
    attendGuestCntStatus: false,
    attendPhoneStatus: false,
    attendBusStatus: false,
    attendEtcStatus: false,
    startPopupStatus: false,
    rsvpActivate: true,
}

export const dummyRsvp: Rsvp = {
    rsvpTitle: "RSVP",
    rsvpContent: "참석의사를 알려주세요!",
    attendStatus: false,
    attendMealStatus: true,
    attendGuestCntStatus: true,
    attendPhoneStatus: true,
    attendBusStatus: true,
    attendEtcStatus: true,
    startPopupStatus: true,
    rsvpActivate: true
};

