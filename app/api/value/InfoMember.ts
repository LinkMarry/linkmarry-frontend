import {type UserRole} from "~/api/enumeration/UserRole.ts";

export default interface InfoMember {
    // 프사
    picture: string;

    // 이름
    name: string;

    // 이메일
    email: string;

    // 유저 역할
    role: UserRole;

    // 포스터 결제 여부(기본값 false)
    accessPoster: boolean;
}
