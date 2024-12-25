import customApi from "./foundation/customApi";
import Jwt from "../value/Jwt";
import {ResponseData} from "../value/Response";

class KakaoApi {
    private static PATH = 'kakao'
    
    async authorize(code: string): Promise<ResponseData<Jwt>> {
        const {data} = await customApi.get(KakaoApi.PATH, {
            params: {
                code
            }
        })
        return data;
    }
}

const kakaoApi = new KakaoApi();

export default kakaoApi;