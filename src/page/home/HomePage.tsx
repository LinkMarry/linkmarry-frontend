import React from 'react';
import S from '@page/home/HomePage.style';
import HasHeader from "@designsystem/component/header/hasHeader";
import Footer from "@src/component/Footer";

function HomePage() {
    return (
        <HasHeader>
            <S.container>
                HomePage
                <Footer/>
            </S.container>
        </HasHeader>
    );
}

export default HomePage;