import api from "@remote/api/foundation/api";
import Jwt from "@remote/value/Jwt";
import {ResponseData} from "@remote/value/Response";

class KakaoApi {
    private static PATH = 'kakao'

    async authorize(code: string): Promise<ResponseData<Jwt>> {
        const {data} = await api.get(KakaoApi.PATH, {
            params: {
                code
            },
            shouldAuthorizeRequest: false
        });
        return data;
    }
}

const kakaoApi = new KakaoApi();

export default kakaoApi;
