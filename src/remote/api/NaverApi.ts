import customApi from "@remote/api/foundation/customApi";
import {ResponseVoid} from "@remote/value/Response";

class NaverApi {
    static PATH = 'naver';
    
    async order(tel: string): Promise<ResponseVoid> {
        const {data} = await customApi.post(`${NaverApi.PATH}/order?tel=${tel}`);
        return data;
    }
}

const naverApi = new NaverApi();

export default naverApi;