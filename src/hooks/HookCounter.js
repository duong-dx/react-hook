import React, { useState } from "react";

export default function HookCounter(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click hear !!!!!!</button>
      <div>
        <h1>{count}</h1>
      </div>
    </div>
  );
}
