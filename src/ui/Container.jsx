import styled from "styled-components";

const Display = styled.div`
  padding: 5rem 2rem 5rem 5rem;
`;

// eslint-disable-next-line react/prop-types
function Container({ children }) {
  return <Display>{children}</Display>;
}

export default Container;
