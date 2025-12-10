import {ResponseData} from "@src/infrastructure/network/value/Response";
import Upload from "@src/infrastructure/network/value/Upload";
import api from "@src/infrastructure/network/api/foundation/api";
import Music from "@src/infrastructure/network/value/Music";

const PATH = 'file';

async function upload(file: File, url: string): Promise<ResponseData<Upload>> {
    const {data} = await api.postForm(`${PATH}/upload?url=${url}`, {
        file,
    });
    return data;
}

async function getMusics(): Promise<ResponseData<Music[]>> {
    const {data} = await api.get(`${PATH}/music`);
    return data;
}

const fileApi = {
    upload,
    getMusics
}

export default fileApi;
