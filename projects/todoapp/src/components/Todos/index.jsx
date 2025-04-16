import React, { useEffect, useReducer } from "react";
import { TodosWrapper } from "./counter.style";
import { Link } from "react-router-dom";

const ACTIONS = {
  CREATE_TODO: "CREATE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  DELETE_TODO: "DELETE_TODO",
  MARK_TODO: "MARK_TODO",
  TOGGLE_LOADING: "TOGGLE_LOADING",
};

const initialData = {
  todos: [],
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_TODO:
      break;

    case ACTIONS.UPDATE_TODO:
      break;

    case ACTIONS.DELETE_TODO:
      break;

    case ACTIONS.MARK_TODO:
      break;

    case ACTIONS.TOGGLE_LOADING:
      return (state.loading = !state.loading);

    default:
      break;
  }
};

const Todos = ({ isLoggedIn }) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const user = JSON.parse(sessionStorage.getItem("user"));

  return isLoggedIn ? (
    <TodosWrapper>
      <h1>Welcome {user.username}</h1>
    </TodosWrapper>
  ) : (
    <div>
      <h1>Please Login</h1>
      <Link to="/">Login</Link>
    </div>
  );
};

export default Todos;
