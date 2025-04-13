import {ResponseData} from "@src/infrastructure/network/value/Response";
import Music from "@src/infrastructure/network/value/Music";
import api from "@src/infrastructure/network/api/foundation/api";

const PATH = 'music';

async function getMusics(): Promise<ResponseData<Music[]>> {
    const {data} = await api.get(`${PATH}`);
    return data;
}

const musicApi = {
    getMusics
};

export default musicApi;
