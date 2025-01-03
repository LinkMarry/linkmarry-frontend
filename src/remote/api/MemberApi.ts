import {ResponseData, ResponseVoid} from "@remote/value/Response";
import customApi from "@remote/api/foundation/customApi";
import InfoMember from "@remote/value/InfoMember";
import EditMemberRequest from "@remote/value/request/EditMemberRequest";

class MemberApi {
    static PATH = 'member';
    
    /**
     * 토큰 refresh
     */
    async refresh(token: string): Promise<ResponseData<string>> {
        const {data} = await customApi.get(`${MemberApi.PATH}/refresh?token=${token}`, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 자신의 프로필 불러오기
     */
    async getMyProfile(): Promise<InfoMember> {
        const {data} = await customApi.get(`${MemberApi.PATH}/info`);
        return data;
    }

    /**
     * 프로필 수정
     */
    async editMyProfile(req: EditMemberRequest): Promise<ResponseVoid> {
        const {data} = await customApi.patch(`${MemberApi.PATH}/edit`, req);
        return data;
    }
}

const memberApi = new MemberApi();

export default memberApi;