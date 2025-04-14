import api from "@src/infrastructure/network/api/foundation/api";
import {ResponseVoid} from "@src/infrastructure/network/value/Response";

const PATH = 'naver';

async function order(tel: string): Promise<ResponseVoid> {
    const {data} = await api.post(`${PATH}/order?tel=${tel}`);
    return data;
}

const naverApi = {
    order
};

export default naverApi;
