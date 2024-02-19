import { CiShoppingCart } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";

import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Rating from "../ui/Rating";

const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
`;

const ImageHolder = styled.div`
  width: 100%;
  padding: 2rem;
`;
const Image = styled.img`
  background-size: contain;
  width: 100%;
`;

const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const ProductTitle = styled.div`
  font-size: 2rem;
  padding: 0 2rem 2rem 0;
  font-variant: small-caps;
`;
const ProductRating = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  margin-bottom: 0.75rem;

  & > span:first-of-type {
    font-size: 0.8rem;
    display: inline-block;
    border: 1px solid orangered;
    padding: 0.5rem 1rem;
    margin-right: 0.75rem;
  }
`;

const ProductDescription = styled.p`
  line-height: 1.7;
  margin-bottom: 0.75rem;
`;

const ProductPricing = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  width: 100%;
  /* margin-bottom: 0.75rem; */
  text-align: right;

  & > span:first-of-type {
    font-size: 0.8rem;
    display: inline-block;
    border: 1px solid orangered;
    padding: 0.5rem 1rem;
    margin-right: 0.75rem;
  }
`;
const Button = styled.button`
  margin-top: 0.75rem;

  background-color: orangered;
  padding: 0.5rem 2rem;
  width: 30%;
  align-self: flex-end;

  border: 0;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  transition:transform 200ms;

  &:hover {
    transform: scaleX(110%);
  }
`;

const ShoppingCart = styled(CiShoppingCart)`
  align-self: flex-end;
  margin-left: 0.75rem;

  color: #fff;
`;

function ProductDetails() {
  const location = useLocation();

  const product = location.state;

  //   const data = location.state;
  //   console.log("🚀 ~ ProductDetails ~ data:", data);

  return (
    <ProductDetail>
      <ImageHolder>
        <Image src={product.image} alt="" />
      </ImageHolder>
      <ProductBody>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductRating>
          <span>Rating</span>
          <Rating rating={product.rating.rate} />
        </ProductRating>
        <ProductPricing>
          <span>Price</span>
          <span>
            <FaDollarSign />
            {product.price}
          </span>
        </ProductPricing>
        <Button>
          <span> Add to cart </span>
          <ShoppingCart />
        </Button>
      </ProductBody>
    </ProductDetail>
  );
}

export default ProductDetails;
