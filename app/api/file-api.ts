import {type ResponseData} from "~/api/value/Response.ts";
import type Upload from "~/api/value/Upload.ts";
import index from "~/api/index.ts";
import type Music from "~/api/value/Music.ts";
import type {FileType} from "~/api/enumeration/FileType.ts";

const PATH = 'file';

async function upload(file: File, url: string, type: FileType): Promise<ResponseData<Upload>> {
    const {data} = await index.postForm(`${PATH}/upload`, {
        file,
        url,
        type,
    });
    return data;
}

async function getMusics(): Promise<ResponseData<Music[]>> {
    const {data} = await index.get(`${PATH}/music`);
    return data;
}

const fileApi = {
    upload,
    getMusics
}

export default fileApi;
