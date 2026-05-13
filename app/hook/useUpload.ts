import {useCallback} from "react";
import {api} from "~/api/index.ts";
import {type FileType} from "~/domain";

const useUpload = () => {
    const uploadFile = useCallback(async (file: File, url: string, type: FileType) => {
        const {data} = await api.file.upload(file, url, type);
        return data;
    }, []);

    const uploadFiles = useCallback(async (files: FileList, url: string, type: FileType) => {
        const fileArray = Array.from(files);

        const uploadPromises = fileArray.map(file => api.file.upload(file, url, type));

        const results = await Promise.allSettled(uploadPromises);

        return results.flatMap(result => (result.status === "fulfilled" ? [result.value.data] : []));
    }, []);

    return {
        uploadFile,
        uploadFiles,
    };
};

export default useUpload;
