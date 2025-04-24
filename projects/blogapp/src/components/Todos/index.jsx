import React, { useEffect, useReducer, useState } from "react";
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
      return {
        ...state,
        loading: !state.loading,
      };
    case ACTIONS.FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    default:
      break;
  }
};

const Todos = ({ isLoggedIn }) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setcompleted] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const fetchTodos = async () => {
    dispatch({ type: ACTIONS.TOGGLE_LOADING });
    console.log(
      "Fetching todos...",
      "http://localhost:3000/todos?userId=" + user.id
    );

    const response = await fetch(
      "http://localhost:3000/todos?userId=" + user.id
    );
    const data = await response.json();

    if (!response.ok) {
      dispatch({ type: ACTIONS.TOGGLE_LOADING });
      console.error("Error fetching todos:", response.statusText);
      return;
    }

    if (data.length === 0) {
      dispatch({ type: ACTIONS.TOGGLE_LOADING });
      console.log("No todos found");
      return;
    }

    console.log("Todos", data);

    dispatch({ type: ACTIONS.FETCH_TODOS, payload: data });
    dispatch({ type: ACTIONS.TOGGLE_LOADING });
  };

  const addTodo = async () => {
    if (!title || !description) {
      console.error("Title and description are required");
      return;
    }

    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        completed,
        userId: user.id,
      }),
    });

    if (!response.ok) {
      console.error("Error creating todo:", response.statusText);

      return;
    }

    const data = await response.json();
    console.log("Todo created:", data);
    fetchTodos();
    alert("Todo created successfully");
  };

  const deleteTodo = async (id) => {
    const response = await fetch("http://localhost:3000/todos/" + id, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Error deleting todo:", response.statusText);
      return;
    }

    fetchTodos();
  };

  const markTodo = async (id) => {
    const todo = state.todos.find((todo) => todo.id === id);
    const response = await fetch("http://localhost:3000/todos/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !todo.completed,
      }),
    });

    if (!response.ok) {
      console.error("Error marking todo:", response.statusText);
      return;
    }

    fetchTodos();
  };

  const stageForEdit = (todo) => {
    setCurrentId(todo.id);
    setTitle(todo.title);
    setDescription(todo.description);
    setcompleted(todo.completed);
    console.log("Staging for edit:", todo);
  };

  const editTodo = async () => {
    console.log("Editing todo:", currentId);
    const response = await fetch("http://localhost:3000/todos/" + currentId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        completed,
      }),
    });
    if (!response.ok) {
      console.error("Error editing todo:", response.statusText);
      return;
    }
    const data = await response.json();
    console.log("Todo edited:", data);
    fetchTodos();

    clearForm();
    alert("Todo edited successfully");
  };

  const clearForm = () => {
    setCurrentId(null);
    setTitle("");
    setDescription("");
    setcompleted(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodosWrapper>
      {!isLoggedIn ? (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      ) : (
        <div>
          {state.loading ? (
            <div className="loading">
              <p>Loading...</p>
            </div>
          ) : (
            <>
              <h1>Todos</h1>

              <h1>Add Todo</h1>
              <div className="addTodo">
                <input
                  type="text"
                  placeholder="Title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Description"
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
                <div>
                  <label htmlFor="completed">Completed</label> &nbsp;
                  <input
                    type="checkbox"
                    id="completed"
                    onChange={(e) => setcompleted(e.target.checked)}
                    checked={completed}
                  />
                </div>

                <div className="submit">
                  <button onClick={currentId ? editTodo : addTodo}>
                    {currentId ? "Edit Todo" : "Add Todo"}
                  </button>

                  <button onClick={clearForm}>Clear Form</button>
                </div>
              </div>

              <div className="todos">
                {state.todos?.map((todo) => (
                  <div key={todo.id} className="todo">
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>

                    <div className="actions">
                      <button onClick={() => deleteTodo(todo.id)}>
                        Delete
                      </button>

                      <button onClick={() => markTodo(todo.id)}>
                        {todo.completed ? "Undone" : "Done"}
                      </button>

                      <button onClick={() => stageForEdit(todo)}>Edit</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </TodosWrapper>
  );
};

export default Todos;
