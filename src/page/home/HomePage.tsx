import React from 'react';
import S from '@page/home/HomePage.style';
import HasHeader from "@designsystem/component/header/hasHeader";
import Footer from "@src/component/Footer";
import HomeSlide1 from "@page/home/component/HomeSlide1";
import HomeSlide2 from "@page/home/component/HomeSlide2";
import HomeSlide3 from "@page/home/component/HomeSlide3";
import HomeSlide4 from "@page/home/component/HomeSlide4";
import HomeSlide5 from "@page/home/component/HomeSlide5";
import HomeSlide6 from "@page/home/component/HomeSlide6";

function HomePage() {
    return (
        <HasHeader>
            <S.container>
                <HomeSlide1/>
                <HomeSlide2/>
                <HomeSlide3/>
                <HomeSlide4/>
                <HomeSlide5/>
                <HomeSlide6/>
                <Footer/>
            </S.container>
        </HasHeader>
    );
}

export default HomePage;