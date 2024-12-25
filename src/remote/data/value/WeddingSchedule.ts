import DisplayType from "../enumeration/DisplayType";

export default interface WeddingSchedule {
    weddingDate: String; //예식 일시
    weddingTime: String; // 예식 시간 (21:30 형태)
    displayType: DisplayType; // 표시 상태
}