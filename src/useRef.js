import React from "react";
import { useState, useEffect, useRef } from "react";
export default function Ref() {
  const ref = useRef();
  useEffect(() => {
    console.log(ref.current);
  });
  return <h2 ref={ref}>Hello</h2>;
}
