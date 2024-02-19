import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;

  & > h1 {
    font-size: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }

  & > span {
    font-size: 1rem;
    color: #333;
  }
`;

const BackButton = styled(Link)`
  text-decoration: none;
  border: 1px solid orangered;
  padding: 1rem 3rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: orangered;
`;

function ErrorElement() {
  const error = useRouteError();

  console.error(error);
  return (
    <ErrorPage>
      <h1>🤦‍♂️ That was unexpected</h1>
      <span> {error.message || error.data}</span>

      <BackButton to={-1}>Back</BackButton>
    </ErrorPage>
  );
}

export default ErrorElement;
