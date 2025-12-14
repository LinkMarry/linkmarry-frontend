import api from "~/infrastructure/network/api/foundation/api";
import {type ResponseVoid} from "~/infrastructure/network/value/Response";

const PATH = 'naver';

async function order(tel: string): Promise<ResponseVoid> {
    const {data} = await api.post(`${PATH}/order?tel=${tel}`);
    return data;
}

const naverApi = {
    order
};

export default naverApi;
