import {type ResponseData, type ResponseVoid} from "~/api/value/Response.ts";
import index from "~/api/index.ts";
import type InfoMember from "~/api/value/InfoMember.ts";
import type EditMemberRequest from "~/api/value/request/EditMemberRequest.ts";

const PATH = 'member';

async function refresh(token: string): Promise<ResponseData<string>> {
    const {data} = await index.get(`${PATH}/refresh?token=${token}`, {
        shouldAuthorizeRequest: false
    });
    return data;
}

async function getMyProfile(): Promise<ResponseData<InfoMember>> {
    const {data} = await index.get(`${PATH}/info`);
    return data;
}

async function editMyProfile(req: EditMemberRequest): Promise<ResponseVoid> {
    const {data} = await index.patch(`${PATH}/edit`, req);
    return data;
}

async function removeMember(): Promise<ResponseVoid> {
    const {data} = await index.delete(`${PATH}/remove`);
    return data;
}

const memberApi = {
    refresh,
    getMyProfile,
    editMyProfile,
    removeMember
};

export default memberApi;
