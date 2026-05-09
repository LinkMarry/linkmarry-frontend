import MainWrapper from "~/components/MainWrapper";
import {Outlet} from "react-router";
import {css} from "@linaria/core";
import {responsive} from "~/components/responsive.tsx";
import View from "~/components/core/View.tsx";

const Layout = () => {
    return (
        <MainWrapper>
            <View
                flexDirection={"row"}
                ui={css`
                    flex: 1;
                    justify-content: center;
                    align-items: flex-start;
                    overflow-y: scroll;
                    padding: 72px 24px 0 24px;

                    ${responsive.mobile} {
                        align-items: stretch;
                        padding: 24px 16px 0 16px;
                    }
                `}
            >
                <View
                    flexDirection={"row"}
                    ui={css`
                        gap: 32px;
                        flex: 1;
                        align-items: flex-start;
                        max-width: 1100px;
                        min-width: 0;
                    `}
                >
                    <Outlet />
                </View>
            </View>
        </MainWrapper>
    );
};

export default Layout;
