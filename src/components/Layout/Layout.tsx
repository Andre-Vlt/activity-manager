import HeaderComponent from "../Header/Header";
import styled from "styled-components";
import Menu from "../Menu/Menu";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;`;

const Div = styled.div`
  background-color: #272727;
  display: flex;
  flex: 1;
  overflow-y: hidden;`;

const Main = styled.div`
  background-color: #0e0d0d;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: hidden;`;
  


const Layout = ({ children }) => {
  return (
    <Container>
        <HeaderComponent></HeaderComponent>
        <Div>
        <Menu></Menu>
        <Main>
           {children}
        </Main>
        </Div>
    </Container>
  );
}

export default Layout;