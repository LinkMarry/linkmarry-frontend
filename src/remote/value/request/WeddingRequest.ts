import Device from "@remote/enumeration/Device";

export default interface WeddingRequest {
    deviceType: Device; // 모바일, 데탑 여부
    firstVisitor: boolean; // 첫 접속 여부
}