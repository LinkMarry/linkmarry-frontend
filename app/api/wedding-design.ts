import type {ResponseData, WeddingDesignPreset} from "~/domain";
import type {CreateWeddingDesignRequest, PatchWeddingDesignRequest} from "~/api/request";

import {httpClient} from "~/api/index.ts";

const PATH = "wedding-design-preset";

export async function createWeddingDesign(request: CreateWeddingDesignRequest) {
    const {data} = await httpClient.post<ResponseData>(`${PATH}`, request);
    return data;
}

export async function patchWeddingDesign(request: PatchWeddingDesignRequest) {
    const {data} = await httpClient.patch<ResponseData>(`${PATH}`, request);
    return data;
}

export async function getWeddingDesignPresets() {
    const {data} = await httpClient.get<ResponseData<WeddingDesignPreset[]>>(`${PATH}`);
    return data;
}

export async function removeWeddingDesign(id: number) {
    const {data} = await httpClient.delete<ResponseData>(`${PATH}/${id}`);
    return data;
}
