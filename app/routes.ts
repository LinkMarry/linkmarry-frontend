import {type RouteConfig, index, route, layout, prefix} from "@react-router/dev/routes";

const routes = [
    layout("routes/providers.tsx", [
        index("routes/home.tsx"),
        route("sign-in", "routes/sign-in.tsx"),
        route("login/oauth2/code/kakao", "routes/kakao-redirect.tsx"),
        route("wedding/:url", "routes/wedding.tsx"),
        route("sample", "routes/sample.tsx"),
        route("link", "routes/link.tsx"),
        route("notification", "routes/notification.tsx"),
        route("question", "routes/question.tsx"),
        layout("routes/private-route.tsx", [
            layout("routes/mypage/my-page-layout.tsx", prefix("mypage", [
                layout("routes/mypage/index/my-page-index-layout.tsx", [
                    route("wedding", "routes/mypage/index/wedding/my-page-wedding.tsx"),
                    route("info", "routes/mypage/index/info/my-page-info.tsx"),
                ]),
                layout("routes/mypage/detail/my-page-detail-layout.tsx", [
                    route("wedding/:url", "routes/mypage/detail/stat/my-page-stat.tsx")
                ])
            ])),
            route("editor/:url?", "routes/editor.tsx"),
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