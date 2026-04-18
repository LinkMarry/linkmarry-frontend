import {type ResponseData} from "~/api/value/Response.ts";
import type Upload from "~/api/value/Upload.ts";
import index from "~/api/index.ts";
import type Music from "~/api/value/Music.ts";
import type {FileType} from "~/api/enumeration/FileType.ts";

const PATH = 'file';

function validateImageSize(file: File, maxSizeMB: number = 20) {
    const fileSizeMB = file.size / (1024 * 1024);

    // 20MB 이하이거나, 리사이즈가 적절치 않은 형식(GIF, SVG 등)은 원본 반환
    if (fileSizeMB <= maxSizeMB || !['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        return
    }

    alert('이미지가 너무 큽니다. 20MB 이하의 이미지를 업로드 해주세요.');
}

async function upload(file: File, url: string, type: FileType): Promise<ResponseData<Upload>> {
    validateImageSize(file, 20);

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
