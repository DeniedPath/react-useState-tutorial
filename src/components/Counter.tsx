import { Dispatch, SetStateAction } from "react";

interface CounterProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

function Counter({ count, setCount }: CounterProps) {
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;