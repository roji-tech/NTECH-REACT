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

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/game" element={<Game />} />
        <Route path="/myform" element={<MyForm />} />
        <Route path="/success" element={<MyForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
