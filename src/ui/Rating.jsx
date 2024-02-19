import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
import styled from "styled-components";

const StarFull = styled(TiStarFullOutline)`
  color: yellow;
`;

const StartHalfOutline = styled(TiStarHalfOutline)`
  color: yellow;
`;

const Stars = styled.span`
  font-size: 1.2rem;
`;

const OutlineStar = styled(TiStarOutline)`
  color: yellow;
`;
// eslint-disable-next-line react/prop-types
function Rating({ rating }) {
  const stars = [];
  const rem = rating % 10;
  let count = 0;
  if (rem > 0) count = 1;

  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(StarFull);
  }
  if (rem > 0) stars.push(StartHalfOutline);
  for (let i = 0; i < 5 - Math.floor(rating) - count; i++) {
    stars.push(OutlineStar);
  }

  return (
    <Stars>
      {stars.map((Star, id) => (
        <Star key={id} />
      ))}
    </Stars>
  );
}

export default Rating;
