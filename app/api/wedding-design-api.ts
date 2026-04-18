import type CreateWeddingDesignRequest from "~/api/value/request/admin/CreateWeddingDesignRequest.ts";
import {type ResponseData, type ResponseVoid} from "~/api/value/Response.ts";
import index from "~/api/index.ts";
import type PatchWeddingDesignRequest from "~/api/value/request/admin/PatchWeddingDesignRequest.ts";
import type WeddingDesignPreset from "~/api/value/WeddingDesignPreset.ts";

const PATH = 'WeddingComponent-design-preset';

async function createWeddingDesign(request: CreateWeddingDesignRequest): Promise<ResponseVoid> {
    const {data} = await index.post(`${PATH}`, request);
    return data;
}

async function patchWeddingDesign(request: PatchWeddingDesignRequest): Promise<ResponseVoid> {
    const {data} = await index.patch(`${PATH}`, request);
    return data;
}

async function getWeddingDesignPresets(): Promise<ResponseData<WeddingDesignPreset[]>> {
    const {data} = await index.get(`${PATH}`);
    return data;
}

async function removeWeddingDesign(id: number): Promise<ResponseVoid> {
    const {data} = await index.delete(`${PATH}/${id}`);
    return data;
}

const weddingDesignApi = {
    createWeddingDesign,
    patchWeddingDesign,
    getWeddingDesignPresets,
    removeWeddingDesign
}

export default weddingDesignApi;
