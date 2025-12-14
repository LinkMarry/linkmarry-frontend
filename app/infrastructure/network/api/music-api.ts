import {type ResponseData} from "~/infrastructure/network/value/Response";
import type Music from "~/infrastructure/network/value/Music";
import api from "~/infrastructure/network/api/foundation/api";

const PATH = 'music';

async function getMusics(): Promise<ResponseData<Music[]>> {
    const {data} = await api.get(`${PATH}`);
    return data;
}

const musicApi = {
    getMusics
};

export default musicApi;
