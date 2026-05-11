import {httpClient} from "~/api/index.ts";
import type {Jwt, ResponseData} from "~/domain";

const PATH = "kakao";

export async function authorize(code: string) {
    const {data} = await httpClient.get<ResponseData<Jwt>>(PATH, {
        params: {
            code,
        },
        shouldAuthorizeRequest: false,
    });
    return data;
}
