import { Link, useFetcher, useLoaderData } from "react-router-dom";
import styled from "styled-components";

import { useEffect } from "react";
import { loadAllProducts } from "../services/apiRequest";

import ProductListing from "../ui/ProductListing";

const Home = styled.div`
  height: 100vh;
`;

const Heading = styled.h1`
  margin-bottom: 0.75rem;
`;

const Categories = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

const CategoriesList = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;

  & > a {
    margin-right: 0.5rem;
    text-decoration: none;
    padding: 0.8rem 3rem;
    color: #fff;
    background-color: orangered;
  }
`;

function HomePage() {
  const data = useLoaderData();
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state == "idle") {
      fetcher.load("/");
    }
  }, [fetcher]);

  const categories = fetcher.data;
  const isLoading = fetcher.state === "loading";

  return (
    <Home>
      <Heading>
        Welcome to <span>StoreZen</span>
      </Heading>
      <Categories>
        <h3>Categories</h3>
        <CategoriesList>
          {isLoading && <span>categories loading ...</span>}
          {categories?.map((category) => (
            <Link to={`/store/${category}`} key={category} state={category}>
              {category}
            </Link>
          ))}
        </CategoriesList>
      </Categories>

      <ProductListing data={data} />
    </Home>
  );
}

export default HomePage;

export async function loader() {
  const data = await loadAllProducts();
  return data;
}
