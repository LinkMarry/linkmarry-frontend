import {httpClient} from "~/api/index.ts";
import type {ResponseData} from "~/api/value/Response.ts";
import type {PosterPreset} from "~/api/value/PosterPreset.ts";

const PATH = "/poster";

export async function getPosterPresets() {
    const {data} = await httpClient.get<ResponseData<PosterPreset[]>>(`${PATH}/presets`);
    return data;
}
