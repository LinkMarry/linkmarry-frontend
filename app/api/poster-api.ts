import api from "~/api/index.ts";
import type {ResponseData} from "~/api/value/Response.ts";
import type {PosterPreset} from "~/api/value/PosterPreset.ts";

const PATH = '/poster';

async function getPosterPresets() {
    const {data} = await api.get<ResponseData<PosterPreset[]>>(`${PATH}/presets`);
    return data;
}

const posterApi = {
    getPosterPresets,
};

export default posterApi;
