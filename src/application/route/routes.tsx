import React from 'react';
import {Navigate} from "react-router-dom";
import HomePage from "@src/feature/home/HomePage";
import SignInPage from "@src/feature/SignInPage";
import KakaoRedirectPage from "@src/feature/KakaoRedirectPage";
import PrivateRoute from "@src/application/route/PrivateRoute";
import MyPageLayout from "@src/feature/mypage/MyPageLayout";
import MyPageIndexLayout from "@src/feature/mypage/index/MyPageIndexLayout";
import MyPageWeddingPage from "@src/feature/mypage/index/wedding/MyPageWeddingPage";
import MyPageInfoPage from "@src/feature/mypage/index/info/MyPageInfoPage";
import MyPageDetailLayout from "@src/feature/mypage/detail/MyPageDetailLayout";
import MyPageStatPage from "@src/feature/mypage/detail/stat/MyPageStatPage";
import EditorPage from "@src/feature/editor/EditorPage";
import WeddingPage from "@src/feature/wedding/WeddingPage";
import AiCustomPage from "@src/ai/AICustomPage";
import AdminRoute from "@src/application/route/AdminRoute";
import FoundationDemo from "@src/userinterface/demo/FoundationDemo";
import ComponentDemo from "@src/userinterface/demo/ComponentDemo";
import DevelopmentRoute from "@src/application/route/DevelopmentRoute";
import {k as RouteObject} from "react-router/dist/development/route-data-CGHGzi13";
import Providers from "@src/application/Providers";
import SamplePage from "@src/feature/sample/SamplePage";

const routes: RouteObject[] = [
    {
        path: '',
        element: <HomePage/>,
    },
    {
        path: 'sign-in',
        element: <SignInPage/>,
    },
    {
        path: 'login/oauth2/code/kakao',
        element: <KakaoRedirectPage/>,
    },
    {
        path: 'wedding/:url',
        element: <WeddingPage/>,
    },
    {
        path: 'sample',
        element: <SamplePage/>,
    },
    {
        path: 'ai-custom',
        element: <AiCustomPage/>,
    },
    {
        element: <PrivateRoute/>,
        children: [
            {
                path: 'mypage',
                element: <MyPageLayout/>,
                children: [
                    {
                        element: <MyPageIndexLayout/>,
                        children: [
                            {
                                path: 'wedding',
                                element: <MyPageWeddingPage/>,
                            },
                            {
                                path: 'info',
                                element: <MyPageInfoPage/>,
                            }
                        ]
                    },
                    {
                        element: <MyPageDetailLayout/>,
                        children: [
                            {
                                path: 'wedding/:url',
                                element: <MyPageStatPage/>,
                            }
                        ]
                    }
                ]
            },
            {
                path: 'editor/:url?',
                element: <EditorPage/>,
            }
        ]
    },
    {
        element: <AdminRoute/>,
    },
    {
        element: <DevelopmentRoute/>,
        children: [
            {
                path: 'design-system',
                children: [
                    {
                        path: 'foundation',
                        element: <FoundationDemo/>,
                    },
                    {
                        path: 'component',
                        element: <ComponentDemo/>,
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to={'/'}/>,
    }
];

const routesWithProviders: RouteObject[] = [
    {
        element: <Providers/>,
        children: routes
    }
];

export default routesWithProviders;
