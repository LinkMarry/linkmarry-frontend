import config from "~/config.ts";
import axios from "axios";

export const httpClient = axios.create({
    baseURL: config.baseUrl,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});

import * as file from "./file.ts";
import * as kakao from "./kakao.ts";
import * as member from "./member.ts";
import * as music from "./music.ts";
import * as naver from "./naver.ts";
import * as notification from "./notification.ts";
import * as poster from "./poster.ts";
import * as wedding from "./wedding.ts";
import * as weddingDesign from "./wedding-design.ts";

export const api = {
    file,
    kakao,
    member,
    music,
    naver,
    notification,
    poster,
    wedding,
    weddingDesign,
};

export {file, kakao, member, music, naver, notification, poster, wedding, weddingDesign};

export default httpClient;
