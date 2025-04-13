import fileApi from "@src/infrastructure/network/api/FileApi";
import {useCallback} from "react";
import Upload from "@src/infrastructure/network/value/Upload";

export default function useUpload() {
    const uploadFile = useCallback(async (file: File): Promise<Upload> => {
        const {data} = await fileApi.upload(file);
        return data;
    }, []);

    const uploadFiles = useCallback(async (files: FileList): Promise<Upload[]> => {
        const uploadPromises = Array.from(files).map(file => fileApi.upload(file));
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
