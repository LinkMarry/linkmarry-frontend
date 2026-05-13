import {type ResponseData, type Upload, type Music, type FileType} from "~/domain";
import {httpClient} from "~/api/index.ts";

const PATH = "file";

function validateImageSize(file: File, maxSizeMB: number = 20) {
    const fileSizeMB = file.size / (1024 * 1024);

    // 20MB 이하이거나, 리사이즈가 적절치 않은 형식(GIF, SVG 등)은 원본 반환
    if (fileSizeMB <= maxSizeMB || !["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
        return;
    }

    alert("이미지가 너무 큽니다. 20MB 이하의 이미지를 업로드 해주세요.");
}

export async function upload(file: File, url: string, type: FileType) {
    validateImageSize(file, 20);

    const {data} = await httpClient.postForm<ResponseData<Upload>>(`${PATH}/upload`, {
        file,
        url,
        type,
    });
    return data;
}

export async function getMusics() {
    const {data} = await httpClient.get<ResponseData<Music[]>>(`${PATH}/music`);
    return data;
}
