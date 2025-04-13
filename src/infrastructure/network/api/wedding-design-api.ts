import CreateWeddingDesignRequest from "@src/infrastructure/network/value/request/admin/CreateWeddingDesignRequest";
import {ResponseData, ResponseVoid} from "@src/infrastructure/network/value/Response";
import api from "@src/infrastructure/network/api/foundation/api";
import PatchWeddingDesignRequest from "@src/infrastructure/network/value/request/admin/PatchWeddingDesignRequest";
import WeddingDesignPreset from "@src/infrastructure/network/value/WeddingDesignPreset";

const PATH = 'wedding-design-preset';

async function createWeddingDesign(request: CreateWeddingDesignRequest): Promise<ResponseVoid> {
    const {data} = await api.post(`${PATH}`, request);
    return data;
}

async function patchWeddingDesign(request: PatchWeddingDesignRequest): Promise<ResponseVoid> {
    const {data} = await api.patch(`${PATH}`, request);
    return data;
}

async function getWeddingDesignPresets(): Promise<ResponseData<WeddingDesignPreset[]>> {
    const {data} = await api.get(`${PATH}`);
    return data;
}

async function removeWeddingDesign(id: number): Promise<ResponseVoid> {
    const {data} = await api.delete(`${PATH}/${id}`);
    return data;
}

const weddingDesignApi = {
    createWeddingDesign,
    patchWeddingDesign,
    getWeddingDesignPresets,
    removeWeddingDesign
}

export default weddingDesignApi;
