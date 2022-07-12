/** @format */

import React, { memo } from "react";

function Child() {
  console.log("Child Component Renders");

  return <div></div>;
}

export default memo(Child);
