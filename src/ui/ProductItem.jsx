/* eslint-disable react/prop-types */
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "./Rating";

const ALink = styled(Link)`
  display: block;
`;

const Item = styled.div`
  height: max-content;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 3rem;
  width: 12rem;
  /* background-color: lightgray; */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`;

const ImageHolder = styled.div`
  position: relative;
  height: 10rem;
  width: 12rem;
  background-size: contain;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  transform: scaleX(70%);
  position: absolute;
  transition: transform 200ms;
  top: 0;
  left: 0;

  &:hover {
    /* transform:scaleX(80%); */
    transform: scaleY(110%);
  }
`;

const ItemBody = styled.div`
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  & > h4 {
    color: #686666;
    font-size: 0.7rem;
  }
`;

const RatingSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.75rem;

  & > span:first-of-type {
    font-size: 0.8rem;
    display: inline-block;
    border: 1px solid orangered;
    padding: 0.5rem 1rem;
  }
`;
const PricingSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
  margin-top: 0.75rem;
  background-color: ${(props) =>
    props.$type == "primary" ? "orangered" : "green"};
  padding: 0.5rem 2rem;
  width: 100%;
  border: 0;
  color: #fff;

  /* ${(props) => {
    switch (props.$type) {
      case "primary":
        return `
        background-color:yellow;
      `;
    }
  }} */
`;
// const Input =
//   styled.input <
//   { $inputColor: string } >
//   `
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${(props) => props.$inputColor || "#BF4F74"};
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

function ProductItem({ product }) {
  console.log(product);
  return (
    <Item>
      <ALink to={`/store/${product.category}/${product.id}`} state={product}>
        <ImageHolder>
          <Image src={product.image} alt="" />
        </ImageHolder>
      </ALink>
      <ItemBody>
        <h4>{product.title}</h4>
      </ItemBody>
      <RatingSection>
        <span>Rating</span>
        <Rating rating={product.rating.rate} />
      </RatingSection>
      <PricingSection>
        <span>Price</span>
        <span>
          <FaDollarSign />
          {product.price}
        </span>
      </PricingSection>
      <Button $type="primary">Add to card</Button>
    </Item>
  );
}

export default ProductItem;
