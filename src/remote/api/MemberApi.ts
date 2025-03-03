import {ResponseData, ResponseVoid} from "@remote/value/Response";
import api from "@remote/api/foundation/api";
import InfoMember from "@remote/value/InfoMember";
import EditMemberRequest from "@remote/value/request/EditMemberRequest";

class MemberApi {
    static PATH = 'member';

    /**
     * 토큰 refresh
     */
    async refresh(token: string): Promise<ResponseData<string>> {
        const {data} = await api.get(`${MemberApi.PATH}/refresh?token=${token}`, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 자신의 프로필 불러오기
     */
    async getMyProfile(): Promise<ResponseData<InfoMember>> {
        const {data} = await api.get(`${MemberApi.PATH}/info`);
        return data;
    }

    /**
     * 프로필 수정
     */
    async editMyProfile(req: EditMemberRequest): Promise<ResponseVoid> {
        const {data} = await api.patch(`${MemberApi.PATH}/edit`, req);
        return data;
    }

    /**
     * 멤버 탈퇴(삭제)
     */
    async removeMember(): Promise<ResponseVoid> {
        const {data} = await api.delete(`${MemberApi.PATH}/remove`);
        return data;
    }
}

const memberApi = new MemberApi();

export default memberApi;
