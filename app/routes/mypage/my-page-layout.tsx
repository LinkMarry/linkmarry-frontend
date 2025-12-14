import MainWrapper from "~/userinterface/pattern/header/MainWrapper.tsx";
import {Outlet} from "react-router";
import {css} from "@linaria/core";
import {mobileStyle, notMobileStyle} from "~/hook/ResponsiveSwitch.tsx";
import View from "~/userinterface/core/View.tsx";

function MyPageLayout() {
    return <>
        <MobileMyPageLayout/>
        <NotMobileMyPageLayout/>
    </>
}

function MobileMyPageLayout() {
    return (
        <MainWrapper ui={mobileStyle}>
            <View ui={css`
                flex-direction: row;
                flex: 1;
                justify-content: center;
                overflow-y: scroll;
                padding: 24px 16px 0 16px;
            `}>
                <View ui={css`
                    flex-direction: row;
                    gap: 32px;
                    flex: 1;
                    align-items: flex-start;
                    max-width: 1100px;
                    min-width: 0;
                `}>
                    <Outlet/>
                </View>
            </View>
        </MainWrapper>
    )
}

function NotMobileMyPageLayout() {
    return (
        <MainWrapper ui={notMobileStyle}>
            <View ui={css`
                flex-direction: row;
                align-items: flex-start;
                justify-content: center;
                flex: 1;
                padding: 72px 24px 0 24px;
                overflow-y: scroll;
            `}>
                <View ui={css`
                    flex-direction: row;
                    align-items: flex-start;
                    flex: 1;
                    gap: 32px;
                    max-width: 1100px;
                    min-width: 0;
                `}>
                    <Outlet/>
                </View>
            </View>
        </MainWrapper>
    );
}

export default MyPageLayout;
