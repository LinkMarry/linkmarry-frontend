import {ResponseData} from "@remote/value/Response";
import Music from "@remote/value/Music";
import api from "@remote/api/foundation/api";

class MusicApi {
    static PATH = 'music';

    async getMusics(): Promise<ResponseData<Music[]>> {
        const {data} = await api.get(`${MusicApi.PATH}`);
        return data;
    }
}

const musicApi = new MusicApi();

export default musicApi;
