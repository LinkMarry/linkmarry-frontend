import {ResponseData} from "@src/infrastructure/network/value/Response";
import Upload from "@src/infrastructure/network/value/Upload";
import api from "@src/infrastructure/network/api/foundation/api";
import Music from "@src/infrastructure/network/value/Music";

class FileApi {
    static PATH = 'file';

    async upload(file: File): Promise<ResponseData<Upload>> {
        const {data} = await api.postForm(`${FileApi.PATH}/upload`, {
            file
        });
        return data;
    }

    async getMusics(): Promise<ResponseData<Music[]>> {
        const {data} = await api.get(`${FileApi.PATH}/music`);
        return data;
    }
}

const fileApi = new FileApi();

export default fileApi;
