import type {ResponseData, InfoMember} from "~/domain";
import type {EditMemberRequest} from "~/api/request";

import {httpClient} from "~/api/index.ts";

const PATH = "member";

export async function refresh(token: string) {
    const {data} = await httpClient.get<ResponseData<string>>(`${PATH}/refresh?token=${token}`, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

export async function getMyProfile() {
    const {data} = await httpClient.get<ResponseData<InfoMember>>(`${PATH}/info`);
    return data;
}

export async function editMyProfile(req: EditMemberRequest) {
    const {data} = await httpClient.patch<ResponseData>(`${PATH}/edit`, req);
    return data;
}

export async function removeMember() {
    const {data} = await httpClient.delete<ResponseData>(`${PATH}/remove`);
    return data;
}
