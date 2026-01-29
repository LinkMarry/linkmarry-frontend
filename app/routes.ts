import {type RouteConfig, index, route, layout, prefix} from "@react-router/dev/routes";

const routes = [
    layout("routes/providers.tsx", [
        index("routes/home/index.tsx"),
        route("sign-in", "routes/sign-in.tsx"),
        route("login/oauth2/code/kakao", "routes/kakao-redirect.tsx"),
        route("wedding/:url", "routes/wedding.tsx"),
        route("sample", "routes/sample.tsx"),
        route("link", "routes/link.tsx"),
        ...prefix("notification", [
            index("routes/notification.tsx"),
            route(":id", "routes/notification-detail.tsx")
        ]),
        route("privacy-policy/:date?", "routes/privacy-policy.tsx"),
        route("terms/:date?", "routes/terms.tsx"),
        layout("routes/private-route.tsx", [
            layout("routes/mypage/layout.tsx", prefix("mypage", [
                layout("routes/mypage/index/layout.tsx", [
                    route("wedding", "routes/mypage/index/wedding/index.tsx"),
                    route("info", "routes/mypage/index/info/index.tsx"),
                ]),
                layout("routes/mypage/detail/layout.tsx", [
                    route("wedding/:url", "routes/mypage/detail/stat/index.tsx")
                ])
            ])),
            route("editor/:url?", "routes/editor/index.tsx"),
        ]),
        // layout("routes/admin-route.tsx", []),

    ])
] satisfies RouteConfig;

if (import.meta.env.DEV) {
    routes.push(
        ...prefix("development", [
            route("foundation", "routes/foundation-demo.tsx"),
            route("component", "routes/component-demo.tsx")
        ]),
    );
}

export default routes;
