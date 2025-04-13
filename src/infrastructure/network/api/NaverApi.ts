import api from "@src/infrastructure/network/api/foundation/api";
import {ResponseVoid} from "@src/infrastructure/network/value/Response";

class NaverApi {
    static PATH = 'naver';

    async order(tel: string): Promise<ResponseVoid> {
        const {data} = await api.post(`${NaverApi.PATH}/order?tel=${tel}`);
        return data;
    }
}

const naverApi = new NaverApi();

export default naverApi;
