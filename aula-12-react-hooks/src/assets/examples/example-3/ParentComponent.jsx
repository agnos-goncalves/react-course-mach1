import { useCallback, useState } from "react";
import ChildrenComponent from "./ChildrenComponent";
function ParentComponent() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  };
  const onHandleClick = useCallback(() => {
    alert("clicked children component");
  }, [count]);

  return (
    <div>
      {count}
      <button onClick={updateCount}>update parent component</button>
      <ChildrenComponent onClick={onHandleClick} />
    </div>
  );
}

export default ParentComponent;
