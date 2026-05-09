import type {
    CreateWeddingDesignRequest,
    ResponseData,
    ResponseVoid,
    PatchWeddingDesignRequest,
    WeddingDesignPreset,
} from "~/domain";
import {httpClient} from "~/api/index.ts";

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
