import { useLoaderData, useLocation } from "react-router-dom";
import styled from "styled-components";
import { loadDataBtCategory } from "../services/apiRequest";
import ProductListing from "../ui/ProductListing";

const Heading = styled.h4`
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
`;
const CategoryDisplay = styled.div`
  height: 100%;
`;

function CategoryListings() {
  const location = useLocation();
  const data = useLoaderData();

  return (
    <CategoryDisplay>
      <Heading>{location.state}</Heading>
      <ProductListing data={data} />
    </CategoryDisplay>
  );
}

export default CategoryListings;

export async function loader({ params }) {
  const data = await loadDataBtCategory(params.category);

  console.log(data);
  return data;
}
