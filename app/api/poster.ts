import {httpClient} from "~/api/index.ts";
import type {ResponseData, PosterPreset} from "~/domain";

const PATH = "/poster";

export async function getPosterPresets() {
    const {data} = await httpClient.get<ResponseData<PosterPreset[]>>(`${PATH}/presets`);
    return data;
}
