import GuestType from "@remote/enumeration/GuestType";

export default interface RsvpRequest {
    // 청첩장 URL
    url: string;
    
    // 참석자 측 (신랑,신부)
    guestType: GuestType;
    
    // 참석 여부
    isAttend: boolean;
    
    // 식사 여부
    isMeal: boolean;
    
    // 참석자 이름
    guestName: string;
    
    // 참석자 전번
    guestPhone: string;
    
    // 참석자 수
    guestCnt: number;
    
    // 남기고 싶은 말
    guestComment: string;
}