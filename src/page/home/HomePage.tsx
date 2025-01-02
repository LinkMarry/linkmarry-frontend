import React from 'react';
import S from '@page/home/HomePage.style';
import HasHeader from "@designsystem/component/header/hasHeader";

function HomePage() {
    return (
        <HasHeader>
            <S.container>
                HomePage
            </S.container>
        </HasHeader>
    );
}

export default HomePage;