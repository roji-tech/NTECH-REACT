import React, { useEffect } from "react";
import { CounterWrapper } from "./counter.style";

const Counter = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <CounterWrapper>hello counter</CounterWrapper>
  ) : (
    "Please log in"
  );
};

export default Counter;
