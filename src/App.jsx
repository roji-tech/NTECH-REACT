import "./App.css";
import { Profile } from "./components/Profile";
import { About } from "./components/About";
import Hero from "./components/Hero";
import Todos from "./components/Todo";
import { Counter } from "./components/Counter";
import Form from "./components/ChatApp";
import Game from "./components/TicTacToe";
import MyForm from "./components/Form";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbars/Navbar1";
import Users from "./components/users";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (true)
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }, []);

  return isLoading ? (
    <div className="loading" style={{ textAlign: "center", marginTop: "20%" }}>
      <h2>Loading...</h2>
    </div>
  ) : (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todos" element={<Todos />} />
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
