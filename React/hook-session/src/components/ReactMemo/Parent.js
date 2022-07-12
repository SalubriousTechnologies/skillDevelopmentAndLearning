/** @format */

import React, { useState, useCallback } from "react";
import Child from "./Child";

export function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  console.log("Parent Component Renders");

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <br />
      <input
        type="text"
        value={name}
        className="border border-gray-600"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <h1>{name}</h1>
      <Child />
    </div>
  );
}
