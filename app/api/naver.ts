import {httpClient} from "~/api/index.ts";
import {type ResponseData} from "~/domain";

const PATH = "naver";

export async function order(tel: string) {
    const {data} = await httpClient.post<ResponseData>(`${PATH}/order?tel=${tel}`);
    return data;
}
