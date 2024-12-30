import {ResponseData} from "../value/Response";
import customApi from "./foundation/customApi";

class MemberApi {
    static PATH = 'member';
    
    /**
     * 토큰 refresh
     */
    async refresh(token: string): Promise<ResponseData<string>> {
        const {data} = await customApi.get(`${MemberApi.PATH}/refresh?token=${token}`);
        return data;
    }
}

const memberApi = new MemberApi();

export default memberApi;