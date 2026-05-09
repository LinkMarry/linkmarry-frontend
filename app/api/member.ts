import type {ResponseData, ResponseVoid, InfoMember, EditMemberRequest} from "~/domain";
import {httpClient} from "~/api/index.ts";

const PATH = "member";

export async function refresh(token: string): Promise<ResponseData<string>> {
    const {data} = await httpClient.get(`${PATH}/refresh?token=${token}`, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

export async function getMyProfile(): Promise<ResponseData<InfoMember>> {
    const {data} = await httpClient.get(`${PATH}/info`);
    return data;
}

export async function editMyProfile(req: EditMemberRequest): Promise<ResponseVoid> {
    const {data} = await httpClient.patch(`${PATH}/edit`, req);
    return data;
}

export async function removeMember(): Promise<ResponseVoid> {
    const {data} = await httpClient.delete(`${PATH}/remove`);
    return data;
}
