import Device from "@remote/enumeration/Device";

export default interface WeddingRequest {
    // 모바일, 데탑 여부
    deviceType: Device;
    
    // 첫 접속 여부
    firstVisitor: boolean;
}