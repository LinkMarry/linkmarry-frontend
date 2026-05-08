import type CreateWeddingDesignRequest from "~/api/value/request/admin/CreateWeddingDesignRequest.ts";
import {type ResponseData, type ResponseVoid} from "~/api/value/Response.ts";
import {httpClient} from "~/api/index.ts";
import type PatchWeddingDesignRequest from "~/api/value/request/admin/PatchWeddingDesignRequest.ts";
import type WeddingDesignPreset from "~/api/value/WeddingDesignPreset.ts";

const PATH = "wedding-design-preset";

export async function createWeddingDesign(request: CreateWeddingDesignRequest): Promise<ResponseVoid> {
    const {data} = await httpClient.post(`${PATH}`, request);
    return data;
}

export async function patchWeddingDesign(request: PatchWeddingDesignRequest): Promise<ResponseVoid> {
    const {data} = await httpClient.patch(`${PATH}`, request);
    return data;
}

export async function getWeddingDesignPresets(): Promise<ResponseData<WeddingDesignPreset[]>> {
    const {data} = await httpClient.get(`${PATH}`);
    return data;
}

export async function removeWeddingDesign(id: number): Promise<ResponseVoid> {
    const {data} = await httpClient.delete(`${PATH}/${id}`);
    return data;
}
