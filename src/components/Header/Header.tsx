import React from "react";
import styled from "styled-components";
import bg from "../../assets/images/HeaderBG.png";


const Header = styled.header`
    background-image: url(${bg}); 
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #272727;
    color: #E7E247;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    height: 60px;
    `;

const Title = styled.h1`
    border:none;
    padding: 10px;
    border-radius: 30px;
    font-size: 3em;
    background-color: transparent;
    z-index: 1;
    color: #E7E247;
    font-family: "Rakkas", serif;
    `;

const HeaderComponent: React.FC = () => {
    return (


        <Header>
            <Title>
            ATIVIDADES
            </Title>
        </Header>

    );
}

export default HeaderComponent;