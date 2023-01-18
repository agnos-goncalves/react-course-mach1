import { useState } from "react";
import "./CardLike.css";
function CardLike() {
  const [style, setStyle] = useState("card-like");
  const handleClick = () => {
    setStyle("card-like active");
  };
  return (
    <div className={style} onClick={handleClick}>
      <img src="./like.jpg" alt="" />
    </div>
  );
}
export default CardLike;
