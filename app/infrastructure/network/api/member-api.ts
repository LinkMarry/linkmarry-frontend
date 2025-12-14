import {type ResponseData, type ResponseVoid} from "~/infrastructure/network/value/Response";
import api from "~/infrastructure/network/api/foundation/api";
import type InfoMember from "~/infrastructure/network/value/InfoMember";
import type EditMemberRequest from "~/infrastructure/network/value/request/EditMemberRequest";

const PATH = 'member';

async function refresh(token: string): Promise<ResponseData<string>> {
    const {data} = await api.get(`${PATH}/refresh?token=${token}`, {
        shouldAuthorizeRequest: false
    });
    return data;
}

async function getMyProfile(): Promise<ResponseData<InfoMember>> {
    const {data} = await api.get(`${PATH}/info`);
    return data;
}

async function editMyProfile(req: EditMemberRequest): Promise<ResponseVoid> {
    const {data} = await api.patch(`${PATH}/edit`, req);
    return data;
}

async function removeMember(): Promise<ResponseVoid> {
    const {data} = await api.delete(`${PATH}/remove`);
    return data;
}

const memberApi = {
    refresh,
    getMyProfile,
    editMyProfile,
    removeMember
};

export default memberApi;
