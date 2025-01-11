import {ResponseData} from "@remote/value/Response";
import Upload from "@remote/value/Upload";
import customApi from "@remote/api/foundation/customApi";

class FileApi {
    static PATH = 'file';

    async upload(file: File): Promise<ResponseData<Upload>> {
        const formData = new FormData();
        formData.append('file', file);

        const {data} = await customApi.post(`${FileApi.PATH}/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return data;
    }
}

const fileApi = new FileApi();

export default fileApi;