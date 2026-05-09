import {httpClient} from "~/api/index.ts";
import type {Jwt,type ResponseData} from "~/domain";

const PATH = "kakao";

export async function authorize(code: string): Promise<ResponseData<Jwt>> {
    const {data} = await httpClient.get(PATH, {
        params: {
            code,
        },
        shouldAuthorizeRequest: false,
    });
    return data;
}
