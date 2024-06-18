import { atom, useAtom, useSetAtom } from 'jotai';
import React from 'react'

const counterAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter