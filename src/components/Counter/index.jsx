import React, { useState, useReducer } from "react";

export const PrevCounter = () => {
  const [count, setCount] = useState(0);

  const btnStyle = {
    border: "1px solid #000",
    padding: "5px",
    margin: "5px",
    cursor: "pointer",
    fontSize: "2.5rem",
  };

  return (
    <div>
      <h1>Counter </h1>
      <button style={btnStyle} onClick={() => setCount(count + 1)}>
        +
      </button>
      <span style={{ fontSize: "3rem" }}>{count}</span>
      <button style={btnStyle} onClick={() => count > 0 && setCount(count - 1)}>
        -
      </button>
    </div>
  );
};

// TYPES
const ACTION_TYPES = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREMENT_WITH_5: "incrementWith5",
  DECREMENT_WITH_5: "decrementWith5",
  INCREMENT_WITH_10: "incrementWith10",
  DECREMENT_WITH_10: "decrementWith10",
};

// Define the initial state
const initialState = { count: 0, isLoading: false };

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      console.log(action);
      return { ...state, count: state.count + 1 };
    case ACTION_TYPES.DECREMENT:
      return { count: state.count - 1 };
    case ACTION_TYPES.INCREMENT_WITH_5:
      return { count: state.count + 5 };
    case ACTION_TYPES.DECREMENT_WITH_5:
      return { count: state.count - 5 };
    case ACTION_TYPES.INCREMENT_WITH_10:
      return { count: state.count + 10 };
    case ACTION_TYPES.DECREMENT_WITH_10:
      return { count: state.count - 10 };
    default:
      throw new Error("Unknown action type");
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button
        onClick={() =>
          dispatch({
            type: ACTION_TYPES.INCREMENT,
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTION_TYPES.DECREMENT,
          })
        }
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
