import CounterProvider from "./context";
import Wrapper from "./Wrapper";
function Example1() {
  return (
    <CounterProvider>
      <Wrapper />
    </CounterProvider>
  );
}
export default Example1;
