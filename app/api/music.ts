import {type ResponseData,Music} from "~/domain";
import {httpClient} from "~/api/index.ts";

const PATH = "music";

export async function getMusics(): Promise<ResponseData<Music[]>> {
    const {data} = await httpClient.get(`${PATH}`);
    return data;
}
