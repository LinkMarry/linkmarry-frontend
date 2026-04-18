import index from "~/api/index.ts";
import type Jwt from "~/api/value/Jwt.ts";
import {type ResponseData} from "~/api/value/Response.ts";

const PATH = 'kakao';

async function authorize(code: string): Promise<ResponseData<Jwt>> {
    const {data} = await index.get(PATH, {
        params: {
            code
        },
        shouldAuthorizeRequest: false
    });
    return data;
}

const kakaoApi = {
    authorize
};

export default kakaoApi;
