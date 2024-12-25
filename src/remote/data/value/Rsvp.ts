export default interface Rsvp {
    rsvpTitle: string; // 제목
    rsvpContent: string; // 내용
    attendStatus: boolean; // 참석 수집 여부
    attendMealStatus: boolean; // 식사 수집 여부
    attendGuestCntStatus: boolean; // 참석자 수 수집 여부
    attendPhoneStatus: boolean; // 연락처 수집 여부
    attendEtcStatus: boolean; // 추가 전달 사항 수집여부
    startPopupStatus: boolean; // 청첩장 열 때 팝업 여부
    startPopupMessage: string; // 청첩장 열 때 팝업에 메시지
}