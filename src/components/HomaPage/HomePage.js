import React from 'react';
import homeImg from 'assets/images/homeimage.jpeg';
import styled from 'styled-components/macro';

function HomePage() {
    return (
        <HomeSection>
            <HomeImg src={homeImg} alt={'HomeImg'} />
        </HomeSection>
    );
}

const HomeSection = styled.section`
    width: 100vw;
    height: 100vh;
`;

const HomeImg = styled.img`
    width: 100%;
    height: 100%;
`;

export default HomePage;
