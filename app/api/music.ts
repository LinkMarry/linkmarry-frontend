import {type ResponseData} from "~/api/value/Response.ts";
import type Music from "~/api/value/Music.ts";
import {httpClient} from "~/api/index.ts";

const PATH = "music";

export async function getMusics(): Promise<ResponseData<Music[]>> {
    const {data} = await httpClient.get(`${PATH}`);
    return data;
}
