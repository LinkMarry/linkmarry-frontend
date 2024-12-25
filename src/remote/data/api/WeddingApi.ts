import Wedding from "../value/Wedding";
import customApi from "./foundation/customApi";
import {ResponseData} from "../value/Response";

class WeddingApi {
    private static PATH = 'wedding';
    
    async checkUrlConflict(url: string): Promise<Response> {
        const {data} = await customApi.post(`${WeddingApi.PATH}/${url}`);
        return data;
    }

    async getWedding(url: string): Promise<ResponseData<Wedding>> {
        const {data} = await customApi.get(`${WeddingApi.PATH}/${url}`);
        return data;
    }

    async createWedding(req: Wedding): Promise<Response> {
        const {data} = await customApi.post(WeddingApi.PATH, req);
        return data;
    }

    async editWedding(req: Wedding): Promise<Response> {
        const {data} = await customApi.put(WeddingApi.PATH, req);
        return data;
    }
}

const weddingApi = new WeddingApi();

export default weddingApi;