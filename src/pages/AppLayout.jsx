import { CiShoppingCart } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import SideNav from "../ui/SideNav";
import Container from "../ui/Container";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  background-color: lightgray;
  height: 100vh;
  width: 100dvw;
  overflow: hidden;
`;

const Main = styled.main`
  background-color: #fff;
  overflow-y: auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2.5rem 1rem;
  position: fixed;
  /* width:100%; */
  right: 0;
  background-color: lightgray;
  z-index: 100;
`;

const ShoppingCart = styled(CiShoppingCart)`
  font-size: 2rem;
`;

const Cart = styled.div`
  position: relative;
`;

const CartItemCount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.8rem;
  height: 1rem;
  width: 1rem;
  z-index: 20;
  border-radius: 100%;
  color: white;
  background-color: orangered;

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /* &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 100%;
    color: white;
    background-color: orangered;
    z-index: 10;
  } */
`;

function AppLayout() {
  return (
    <Layout>
      <SideNav />
      <Main>
        <Header>
          <Link to="/cart">
            <Cart>
              <CartItemCount>
                <span>0</span>
              </CartItemCount>
              <ShoppingCart />
            </Cart>
          </Link>
        </Header>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </Layout>
  );
}

export default AppLayout;
