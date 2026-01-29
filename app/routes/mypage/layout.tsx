import MainWrapper from "~/userinterface/pattern/header/MainWrapper.tsx";
import {Outlet} from "react-router";
import {css} from "@linaria/core";
import {responsive} from "~/hook/ResponsiveSwitch.tsx";
import View from "~/userinterface/core/View.tsx";


function Layout() {
    return (
        <MainWrapper>
            <View ui={css`
                flex-direction: row !important;
                flex: 1;
                justify-content: center;
                align-items: flex-start;
                overflow-y: scroll;
                padding: 72px 24px 0 24px;
                
                ${responsive.mobile} {
                    align-items: stretch;
                    padding: 24px 16px 0 16px;
                }
            `}>
                <View ui={css`
                    flex-direction: row !important;
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
    );
}

export default Layout;
