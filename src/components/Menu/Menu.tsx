import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import logo from "../../assets/images/Logo.png";


const Nav = styled.nav`
margin: 0;
background-color: #272727;
height: 100vh;
width: 300px;
display: flex;
flex-direction: column;

@media (min-width: 1365) {
    width: 250px;
}
`;

const Logo = styled.img`
width: 100%;
height: 100%;
margin: 0;

@media (max-height: 768px) {`;

const CheckIcon = styled(FaCheck)`
color: #E7E247;
padding-right: 10px;
font-size: 2em;`;

const ClockIcon = styled(CiClock1)`
color: #E7E247;
padding-right: 10px;
font-size: 2.2em;`;

const HomeIcon = styled(IoHomeOutline)`
color: #E7E247;
padding-right: 10px;
font-size: 1.5em;`;

const AddIcon = styled(CiCirclePlus)`
color: #E7E247;
padding-right: 10px;
font-size: 2em;`;


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;`;

const ItensContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`;

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
padding: 25px;
border-bottom: 1px solid #373535;
display: flex;
justify-content: center;
align-items: center;
color: #E7E247;
font-family: "Rakkas", serif;
font-size: 1.5em;


&:hover {
    background-color: #0e0d0d;
    cursor: pointer;
    transition: 1s ease;
}


@media (max-height: 768px){
    padding: 10px;}
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
                <Li>
                    <ItensContainer>
                        <HomeIcon />
                        Home
                    </ItensContainer>
                </Li>
            </StyledLink>
            </MenuContainer>
            
            <StyledLink to = "/create-activity">
                <Li>
                    <ItensContainer>
                        <AddIcon />
                        Criar atividade
                    </ItensContainer>
                    </Li>
            </StyledLink>
            
            <StyledLink to = "/pendent">
                <Li>
                    <ItensContainer>
                        <ClockIcon />
                        Pendentes
                    </ItensContainer>
                </Li>
            </StyledLink>
            
            <StyledLink to = "/completed">
                <Li>
                    <ItensContainer>
                        <CheckIcon />
                        Concluídas
                    </ItensContainer>
                </Li>
            </StyledLink>
            </Ul>
            <Container>
                <Logo src={logo} alt="Logo" />
            </Container>
        </Nav>

    );
}

export default Menu;