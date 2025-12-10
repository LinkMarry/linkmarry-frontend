import fileApi from "@src/infrastructure/network/api/file-api";
import {useCallback} from "react";
import Upload from "@src/infrastructure/network/value/Upload";

export default function useUpload() {
    const uploadFile = useCallback(async (file: File, url: string): Promise<Upload> => {
        const {data} = await fileApi.upload(file, url);
        return data;
    }, []);

    const uploadFiles = useCallback(async (files: FileList, url: string): Promise<Upload[]> => {
        const uploadPromises = Array.from(files).map(file => fileApi.upload(file, url));
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
