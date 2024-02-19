import { Link, NavLink, useLoaderData } from "react-router-dom";
import styled from "styled-components";

import { loadCategories } from "../services/apiRequest";

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 5rem 3rem;
`;

const List = styled.ul`
  list-style-type: none;
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
  font-variant: small-caps;
`;

const Header = styled.h1`
  font-size: 3rem;
  margin-top: 0.75rem;

  & > a {
    letter-spacing: 3px;
    text-decoration: none;
    font-weight: bold;
    font-variant: small-caps;
    color: orangered;
  }
`;

const Alink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 1rem;
  display: inline-block;
  margin-bottom: 0.25rem;
  border:1px solid transparent;
  &:hover {
    /* background-color: orangered;
    color: #fff; */
    border:1px solid orangered;
  }

  &.active {
    background-color: orangered;
    color: #fff;
  }
`;

function SideNav() {
  const data = useLoaderData();

  return (
    <Navigation>
      <Header>
        <Link to="/store">StoreZen</Link>
      </Header>
      <List>
        {data?.map((item) => (
          <ListItem key={item}>
            <Alink to={`/store/${item}`} state={item}>
              {item}
            </Alink>
          </ListItem>
        ))}
      </List>
    </Navigation>
  );
}

export default SideNav;

export async function loader() {
  const data = await loadCategories();
  return data;
}
