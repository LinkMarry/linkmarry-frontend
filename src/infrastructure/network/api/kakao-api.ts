import api from "@src/infrastructure/network/api/foundation/api";
import Jwt from "@src/infrastructure/network/value/Jwt";
import {ResponseData} from "@src/infrastructure/network/value/Response";

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
