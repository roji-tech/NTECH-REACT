import styled from "styled-components";

export const TodosWrapper = styled.div`
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 2rem;
    color: #333;
  }

  .addTodo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;

    input {
      margin: 5px 0;
      padding: 10px;
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }
    input[type="text"] {
      width: min(400px, 100%);
    }
    input[type="text"]:focus {
      border-color: #007bff;
      outline: none;
    }
    input[type="checkbox"]:checked {
      background-color: #007bff;
    }
    input[type="checkbox"]:checked:focus {
      outline: none;
    }
    input[type="checkbox"]:checked:hover {
      background-color: #0056b3;
    }
    input[type="text"]:hover {
      border-color: #0056b3;
    }
  }

  .todos {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    padding: 20px;

    .todo {
      border-bottom: 1px solid #ccc;
      padding: 10px 0;

      display: flex;
      justify-content: space-between;
    }

    .todo h2 {
      margin: 0;
    }

    .todo p {
      margin-top: 5px;
    }
  }

  h1 {
    text-align: center;
  }

  button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

// export default CounterWrapper
