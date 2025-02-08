import React from 'react';
import HasHeader from "@designsystem/component/header/hasHeader";
import Footer from "@src/component/Footer";
import HomeSlide1 from "@page/home/component/HomeSlide1";
import HomeSlide2 from "@page/home/component/HomeSlide2";
import HomeSlide3 from "@page/home/component/HomeSlide3";
import HomeSlide4 from "@page/home/component/HomeSlide4";
import HomeSlide5 from "@page/home/component/HomeSlide5";
import {Column} from "@designsystem/component/FlexLayout";
import {css} from "styled-components";

function HomePage() {
    return (
        <HasHeader>
            <Column $customStyle={css`
                overflow-y: scroll;
                align-items: stretch;
            `}>
                <HomeSlide1/>
                <HomeSlide2/>
                <HomeSlide3/>
                <HomeSlide4/>
                <HomeSlide5/>
                {/*<HomeSlide6/>*/}
                <Footer/>
            </Column>
        </HasHeader>
    );
}

export default HomePage;