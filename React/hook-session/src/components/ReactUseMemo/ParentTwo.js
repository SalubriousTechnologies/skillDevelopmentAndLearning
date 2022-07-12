/** @format */

import React, { useState, useMemo, useEffect } from "react";

export function ParentTwo() {
  const [number, setNumber] = useState(1);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const doubleNum = useMemo(() => slowProcess(number), [number]);

  const theme = useMemo(() => {
    return {
      backgroundColor: isDarkTheme ? "#333" : "#FFF",
      color: isDarkTheme ? "#FFF" : "#333",
    };
  }, [isDarkTheme]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [theme]);

  return (
    <div>
      {number}
      <input
        type="number"
        value={number}
        className="border border-gray-600"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br /> <br />
      <div style={theme}>
        {doubleNum}
        <br />
        <br />
        <button onClick={() => setIsDarkTheme((prev) => !prev)}>
          Change Theme
        </button>
      </div>
    </div>
  );
}

function slowProcess(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
