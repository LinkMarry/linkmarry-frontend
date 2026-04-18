import {type ResponseData} from "~/api/value/Response.ts";
import type Music from "~/api/value/Music.ts";
import index from "~/api/index.ts";

const PATH = 'music';

async function getMusics(): Promise<ResponseData<Music[]>> {
    const {data} = await index.get(`${PATH}`);
    return data;
}

const musicApi = {
    getMusics
};

export default musicApi;
