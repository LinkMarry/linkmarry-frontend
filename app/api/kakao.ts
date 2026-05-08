import {httpClient} from "~/api/index.ts";
import type Jwt from "~/api/value/Jwt.ts";
import {type ResponseData} from "~/api/value/Response.ts";

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
