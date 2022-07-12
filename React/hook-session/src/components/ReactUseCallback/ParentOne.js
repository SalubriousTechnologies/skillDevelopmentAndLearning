/** @format */

import React, { useState, useEffect, useCallback } from "react";

export function ParentOne() {
  const [name, setName] = useState("");
  const [num1] = useState(6);
  const [num2] = useState(8);
  const [check, setCheck] = useState(false);

  const sum = useCallback(() => {
    console.log("Inside Callback");
    return num1 + num2;
  }, [num1, num2]);

  useEffect(() => {
    console.log(`New Sum value : ${sum()}`);
    console.log("UseEffect Called");
  }, [sum, check]);

  return (
    <div>
      <button
        onClick={() => {
          setCheck(check);
          console.log("Button Clicked");
          sum();
        }}
      >
        Sum
      </button>
      <input
        type="text"
        value={name}
        className="border border-gray-600"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
