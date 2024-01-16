import { createContext, useState } from "react";

// 1. Create a context
const CounterContext = createContext();

// 2. Create a parent component
function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return <span>Counter</span>;
}

// 3. Create child components to help implementing the common task

// 4. Add child components as properties to the parent component
export default Counter;
