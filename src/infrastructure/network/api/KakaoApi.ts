import api from "@src/infrastructure/network/api/foundation/api";
import Jwt from "@src/infrastructure/network/value/Jwt";
import {ResponseData} from "@src/infrastructure/network/value/Response";

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
