import {type ResponseData, type Music} from "~/domain";
import {httpClient} from "~/api/index.ts";

const PATH = "music";

export async function getMusics() {
    const {data} = await httpClient.get<ResponseData<Music[]>>(`${PATH}`);
    return data;
}
