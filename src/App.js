import Counter from "./Counter";
import CounterFunctionHook from "./CounterFunctionHook";
function App() {
  return (
    <>
      Counter Class Based
      <Counter initialCount={0}></Counter>
      Counter Hooks Functional
      <CounterFunctionHook initialCount={0}></CounterFunctionHook>
    </>
  );
}

export default App;
