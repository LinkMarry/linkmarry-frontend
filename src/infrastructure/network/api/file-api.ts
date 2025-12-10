import {ResponseData} from "@src/infrastructure/network/value/Response";
import Upload from "@src/infrastructure/network/value/Upload";
import api from "@src/infrastructure/network/api/foundation/api";
import Music from "@src/infrastructure/network/value/Music";

const PATH = 'file';

async function upload(file: File, url: string): Promise<ResponseData<Upload>> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("url", url);

    const {data} = await api.post(`${PATH}/upload`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
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
