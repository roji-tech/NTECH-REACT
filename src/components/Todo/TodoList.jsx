import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Do the laundry", completed: false },
    { id: 2, task: "Clean the house", completed: true },
    { id: 3, task: "Buy groceries", completed: false },
    { id: 4, task: "Prepare dinner", completed: false },
    { id: 5, task: "Read a book", completed: true },
  ]);

  const handleComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const addNewTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      task: "New Task",
      completed: false,
    };

    const newArray = [...todos, newTodo];
    setTodos(newArray);
  };

  return (
    <div>
      {/* <ul>{todos.map(todoMapper)}</ul> */}
      <button onClick={addNewTodo}> Add New Todo </button>
      <br />

      <ol>
        <h2> Completed Todos</h2>
        {todos.map(
          (todo, ind) =>
            todo.completed && (
              <li
                key={todo.id}
                style={{ backgroundColor: "lightgreen", marginBottom: "10px" }}
              >
                {ind}:: {todo.task} (Completed)&nbsp; &nbsp;
                <button onClick={() => handleComplete(todo.id)}>UnMark</button>
              </li>
            )
        )}
      </ol>

      <br />

      <ol>
        <h2> InCompleted Todos</h2>

        {todos.map(
          (todo, ind) =>
            !todo.completed && (
              <li key={todo.id}>
                {ind}:: {todo.task} "(Pending)" &nbsp; &nbsp;
                <button onClick={() => handleComplete(todo.id)}>Mark</button>
              </li>
            )
        )}
      </ol>
    </div>
  );
};

export default TodoList;
