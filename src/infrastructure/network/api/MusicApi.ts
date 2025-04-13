import {ResponseData} from "@src/infrastructure/network/value/Response";
import Music from "@src/infrastructure/network/value/Music";
import api from "@src/infrastructure/network/api/foundation/api";

class MusicApi {
    static PATH = 'music';

    async getMusics(): Promise<ResponseData<Music[]>> {
        const {data} = await api.get(`${MusicApi.PATH}`);
        return data;
    }
}

const musicApi = new MusicApi();

export default musicApi;
