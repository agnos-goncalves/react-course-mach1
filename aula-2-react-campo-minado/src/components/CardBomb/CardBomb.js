import { useState } from "react";
import "./CardBomb.css";

function CardBomb() {
  const [style, setStyle] = useState("card-bomb");
  const handleClick = () => {
    setStyle("card-bomb active");
    alert("game over");
  };
  return (
    <div className={style} onClick={handleClick}>
      <img src="./bomba.jpg" alt="" />
    </div>
  );
}
export default CardBomb;
