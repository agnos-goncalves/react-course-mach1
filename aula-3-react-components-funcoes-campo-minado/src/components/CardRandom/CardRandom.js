import CardBomb from "../CardBomb/CardBomb";
import CardLike from "../CardLike/CardLike";

function CardRandom() {
  const value = Math.floor(Math.random() * 9);
  return value < 5 ? <CardLike /> : <CardBomb />;
}
export default CardRandom;
