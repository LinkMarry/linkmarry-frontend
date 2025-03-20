import {ResponseData} from "@remote/value/Response";
import Upload from "@remote/value/Upload";
import api from "@remote/api/foundation/api";
import Music from "@remote/value/Music";

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
