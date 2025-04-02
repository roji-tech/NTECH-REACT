import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Profile } from "./components/Profile";
import { About } from "./components/About";
import Hero from "./components/Hero";
import Todo from "./components/Todo";
import { Counter } from "./components/Counter";
import Form from "./components/ChatApp";
import Game from "./components/TicTacToe";
import MyForm from "./components/Form";

function App() {
  return (
    <div>
      {/* <center>My First React</center> */}
      {/* <About /> */}
      {/* <Profile />
        <About />
        <Hero /> */}

      {/* <Counter />
      <Todo /> */}

      {/* <Form /> */}

      <MyForm />
    </div>
  );
}

export default App;
