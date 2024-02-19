/* eslint-disable react/prop-types */
import styled from "styled-components"; 
import ProductItem from "./ProductItem";

const Products = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
`;
const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
`;

// const Input = styled.input < { $inputColor: "string", }>`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${props => props.$inputColor || "#BF4F74"};
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;



function ProductListing ({data})
{
    return (
      <Products>
        <ProductList>
          {data?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ProductList>
      </Products>
    );
  }



  export default ProductListing