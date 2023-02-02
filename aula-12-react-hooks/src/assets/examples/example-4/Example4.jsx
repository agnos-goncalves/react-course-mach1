import { useEffect, useMemo, useRef, useState } from "react";

function Example4() {
  const [numbers] = useState([1, 2, 3, 4]);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const sum = useMemo(
    () => numbers.reduce((prev, current) => prev + current, 0),
    [numbers]
  );
  return (
    <div>
      {numbers.map((number) => (
        <div>
          <span onClick={() => setSelectedNumber(number)}>{number}</span>
        </div>
      ))}
      <br />
      <span>
        <strong>Selecionado:</strong> {selectedNumber}
        <br />
        <strong>Soma:</strong> {sum}
      </span>
    </div>
  );
}

export default Example4;
