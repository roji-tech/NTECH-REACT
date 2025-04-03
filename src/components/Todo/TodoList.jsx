import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todoUrl = "http://localhost:3000/todos";

      try {
        const response = await fetch(todoUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleComplete = async (id) => {
    const todoUrl = "http://localhost:3000/todos";

    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    const updatedTodo = updatedTodos.find((todo) => todo.id === id);

    try {
      await fetch(`${todoUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });

      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const addNewTodo = async () => {
    const newTodo = {
      id: `${todos.length + 1}`,
      task: "New Task",
      completed: false,
    };

    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error("Failed to add new todo");
      }

      const savedTodo = await response.json();
      setTodos((prevTodos) => [...prevTodos, savedTodo]);
    } catch (error) {
      console.error("Error adding new todo:", error);
    }
  };

  return (
    <div>
      <button onClick={addNewTodo}> Add New Todo </button>
      <br />

      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <ol>
            <h2> Completed Todos</h2>
            {todos.map(
              (todo, ind) =>
                todo.completed && (
                  <li
                    key={todo.id}
                    style={{
                      backgroundColor: "lightgreen",
                      marginBottom: "10px",
                    }}
                  >
                    {ind}:: {todo.task} (Completed)&nbsp; &nbsp;
                    <button onClick={() => handleComplete(todo.id)}>
                      UnMark
                    </button>
                  </li>
                )
            )}{" "}
          </ol>
          <br />
          <ol>
            <h2> InCompleted Todos</h2>

            {todos.map(
              (todo, ind) =>
                !todo.completed && (
                  <li key={todo.id}>
                    {ind}:: {todo.task} "(Pending)" &nbsp; &nbsp;
                    <button onClick={() => handleComplete(todo.id)}>
                      Mark
                    </button>
                  </li>
                )
            )}
          </ol>{" "}
        </>
      )}
    </div>
  );
};

export default TodoList;
