import CreateWeddingDesignRequest from "@remote/value/request/admin/CreateWeddingDesignRequest";
import {ResponseVoid} from "@remote/value/Response";
import api from "@remote/api/foundation/api";
import PatchWeddingDesignRequest from "@remote/value/request/admin/PatchWeddingDesignRequest";

class WeddingDesignApi {
    static PATH = 'weddingdesign';

    async createWeddingDesign(request: CreateWeddingDesignRequest): Promise<ResponseVoid> {
        const {data} = await api.post(`${WeddingDesignApi.PATH}`, request);
        return data;
    }

    async patchWeddingDesign(request: PatchWeddingDesignRequest): Promise<ResponseVoid> {
        const {data} = await api.patch(`${WeddingDesignApi.PATH}`, request);
        return data;
    }

    async getWeddingDesign(category: string): Promise<ResponseVoid> {
        const {data} = await api.get(`${WeddingDesignApi.PATH}/${category}`);
        return data;
    }

    async removeWeddingDesign(id: number): Promise<ResponseVoid> {
        const {data} = await api.delete(`${WeddingDesignApi.PATH}/${id}`);
        return data;
    }
}

const weddingDesignApi = new WeddingDesignApi();

export default weddingDesignApi;
