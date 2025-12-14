import {type ResponseData} from "~/infrastructure/network/value/Response";
import type Upload from "~/infrastructure/network/value/Upload";
import api from "~/infrastructure/network/api/foundation/api";
import type Music from "~/infrastructure/network/value/Music";

const PATH = 'file';

async function upload(file: File): Promise<ResponseData<Upload>> {
    const {data} = await api.postForm(`${PATH}/upload`, {
        file
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
