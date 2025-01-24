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
    
    // 추가 전달 사항 수집여부
    attendEtcStatus: boolean;
    
    // 청첩장 열 때 팝업 여부
    startPopupStatus: boolean;
}

export const defaultRsvp: Rsvp = {
    rsvpTitle: "",
    rsvpContent: "",
    attendStatus: false,
    attendMealStatus: false,
    attendGuestCntStatus: false,
    attendPhoneStatus: false,
    attendEtcStatus: false,
    startPopupStatus: false,
}

export const dummyRsvp: Rsvp = {
    rsvpTitle: "와주세여",
    rsvpContent: "제발..................",
    attendStatus: true,
    attendMealStatus: true,
    attendGuestCntStatus: true,
    attendPhoneStatus: true,
    attendEtcStatus: true,
    startPopupStatus: true,
};