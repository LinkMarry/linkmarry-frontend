import {httpClient} from "~/api/index.ts";
import {type ResponseVoid} from "~/api/value/Response.ts";

const PATH = "naver";

export async function order(tel: string): Promise<ResponseVoid> {
    const {data} = await httpClient.post(`${PATH}/order?tel=${tel}`);
    return data;
}
