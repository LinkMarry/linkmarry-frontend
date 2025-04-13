import CreateWeddingDesignRequest from "@src/infrastructure/network/value/request/admin/CreateWeddingDesignRequest";
import {ResponseData, ResponseVoid} from "@src/infrastructure/network/value/Response";
import api from "@src/infrastructure/network/api/foundation/api";
import PatchWeddingDesignRequest from "@src/infrastructure/network/value/request/admin/PatchWeddingDesignRequest";
import WeddingDesignPreset from "@src/infrastructure/network/value/WeddingDesignPreset";

class WeddingDesignApi {
    static PATH = 'wedding-design-preset';

    async createWeddingDesign(request: CreateWeddingDesignRequest): Promise<ResponseVoid> {
        const {data} = await api.post(`${WeddingDesignApi.PATH}`, request);
        return data;
    }

    async patchWeddingDesign(request: PatchWeddingDesignRequest): Promise<ResponseVoid> {
        const {data} = await api.patch(`${WeddingDesignApi.PATH}`, request);
        return data;
    }

    async getWeddingDesignPresets(): Promise<ResponseData<WeddingDesignPreset[]>> {
        const {data} = await api.get(`${WeddingDesignApi.PATH}`);
        return data;
    }

    async removeWeddingDesign(id: number): Promise<ResponseVoid> {
        const {data} = await api.delete(`${WeddingDesignApi.PATH}/${id}`);
        return data;
    }
}

const weddingDesignApi = new WeddingDesignApi();

export default weddingDesignApi;
