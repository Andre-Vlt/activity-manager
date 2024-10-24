import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import actIcon from "../../assets/icons/ActivityIcon.png";


const Nav = styled.nav`
margin: 0;
background-color: #272727;
height: 100vh;
width: 400px;
display: flex;
flex-direction: column;
gap: 20px;
;
`;

const Icon = styled.img`
height: 100px;
width: 100px;`;


const Container = styled.div`
display: flex;
justify-content: center;`;

const Ul = styled.ul`
list-style: none;
padding: 0;
margin: 0;
display: flex;
flex-direction: column;
`;


const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

`;

const Li = styled.li`
padding: 40px;
border-bottom: 1px solid #373535;
display: flex;
justify-content: center;
align-items: center;
color: #E7E247;
font-family: "Rakkas", serif;


&:hover {
    background-color: #0e0d0d;
    cursor: pointer;
    transition: 1s ease;
}
`;

const MenuContainer = styled.div`
display: flex;
flex-direction: column;
`;
const Menu: React.FC = () => {
    return (
        <Nav>
            <Ul>
            
            <MenuContainer>
            <StyledLink to = "/">
                <Li>Home</Li>
            </StyledLink>
            </MenuContainer>
            
            <StyledLink to = "/create-activity">
                <Li>Inserir atividade</Li>
            </StyledLink>
            
            <StyledLink to = "/pendent">
                <Li>Atividades pendentes</Li>
            </StyledLink>
            
            <StyledLink to = "/completed">
                <Li>Atividades concluídas</Li>
            </StyledLink>
            </Ul>
            <Container>
            <Icon src={actIcon} alt="Activity Icon" />
            </Container>
        </Nav>

    );
}

export default Menu;