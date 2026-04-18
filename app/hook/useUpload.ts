import fileApi from "~/api/file-api.ts";
import {useCallback} from "react";
import type Upload from "~/api/value/Upload";
import type {FileType} from "~/api/enumeration/FileType.ts";

export default function useUpload() {
    const uploadFile = useCallback(async (file: File, url: string, type: FileType): Promise<Upload> => {
        const {data} = await fileApi.upload(file, url, type);
        return data;
    }, []);

    const uploadFiles = useCallback(async (files: FileList, url: string, type: FileType): Promise<Upload[]> => {
        const uploadPromises = Array.from(files).map(file => fileApi.upload(file, url, type));
        const results = await Promise.allSettled(uploadPromises);
        return results
            .map(result => result.status === 'fulfilled' ? result.value.data : null)
            .filter((result): result is Upload => result !== null);
    }, []);

    return {
        uploadFile,
        uploadFiles
    }
}
