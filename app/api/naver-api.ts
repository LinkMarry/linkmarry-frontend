import index from "~/api/index.ts";
import {type ResponseVoid} from "~/api/value/Response.ts";

const PATH = 'naver';

async function order(tel: string): Promise<ResponseVoid> {
    const {data} = await index.post(`${PATH}/order?tel=${tel}`);
    return data;
}

const naverApi = {
    order
};

export default naverApi;
