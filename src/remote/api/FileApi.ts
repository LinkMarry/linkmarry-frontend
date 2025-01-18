import {ResponseData} from "@remote/value/Response";
import Upload from "@remote/value/Upload";
import customApi from "@remote/api/foundation/customApi";

class FileApi {
    static PATH = 'file';

    async upload(file: File): Promise<ResponseData<Upload>> {
        const {data} = await customApi.postForm(`${FileApi.PATH}/upload`, {
            file
        });
        return data;
    }
    
    async getMusics(): Promise<ResponseData<string[]>> {
        const {data} = await customApi.get(`${FileApi.PATH}/music`);
        return data;
    }
}

const fileApi = new FileApi();

export default fileApi;