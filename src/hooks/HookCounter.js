import React, { useState } from "react";
import DisplayText from "./DisplayText";

export default function HookCounter(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click hear !!!!!!</button>
      <div>
        <h1>{count}</h1>
      </div>
        <DisplayText name={"XIN CHAO CHAOCHAOCHAOCHAOCHAOCHAOCHAOCHAOCHAO !!!!!!!!!!"}/>
    </div>
  );
}
