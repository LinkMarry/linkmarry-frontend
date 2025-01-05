import UserRole from "@remote/enumeration/UserRole";

export default interface InfoMember {
    // 프사
    picture: string;
    
    // 이름
    name: string;
    
    // 이메일
    email: string;
    
    // 유저 역할
    role: UserRole;
}