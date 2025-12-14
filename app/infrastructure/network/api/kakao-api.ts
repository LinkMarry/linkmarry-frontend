import api from "~/infrastructure/network/api/foundation/api";
import type Jwt from "~/infrastructure/network/value/Jwt";
import {type ResponseData} from "~/infrastructure/network/value/Response";

const PATH = 'kakao';

async function authorize(code: string): Promise<ResponseData<Jwt>> {
    const {data} = await api.get(PATH, {
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
