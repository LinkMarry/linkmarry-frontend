import {type RouteConfig, index, route, layout, prefix} from "@react-router/dev/routes";

const routes = [
    index("routes/home/index.tsx"),
    route("sign-in", "routes/sign-in/index.tsx"),
    route("login/oauth2/code/kakao", "routes/login/oauth2/code/kakao/index.tsx"),
    route("wedding/:url", "routes/wedding/[url]/index.tsx"),
    route("sample", "routes/sample/index.tsx"),
    route("link", "routes/link/index.tsx"),
    ...prefix("notification", [
        index("routes/notification/index.tsx"), 
        route(":id", "routes/notification/[id]/index.tsx")
    ]),
    route("privacy-policy/:date?", "routes/privacy-policy/[date]/index.tsx"),
    route("terms/:date?", "routes/terms/[date]/index.tsx"),
    layout("routes/_private/layout.tsx", [
        layout(
            "routes/mypage/layout.tsx",
            prefix("mypage", [
                layout("routes/mypage/_layout/layout.tsx", [
                    route("wedding", "routes/mypage/wedding/index.tsx"),
                    route("info", "routes/mypage/info/index.tsx"),
                ]),
                layout("routes/mypage/wedding/[url]/layout.tsx", [
                    route("wedding/:url", "routes/mypage/wedding/[url]/index.tsx"),
                ]),
            ]),
        ),
        ...prefix("editor", [
            route("invitation/:url?", "routes/editor/invitation/[url]/index.tsx"),
            route("poster", "routes/editor/poster/index.tsx"),
        ]),
    ]),
] satisfies RouteConfig;

if (import.meta.env.DEV) {
    routes.push(
        ...prefix("development", [
            route("foundation", "routes/development/foundation/index.tsx"),
            route("component", "routes/development/component/index.tsx"),
        ]),
    );
}

export default routes;
