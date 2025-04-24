import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Todos from "./components/Todos";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import NotFound from "./components/NotFound";
import CreateBlog from "./pages/CreateBlog";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON?.parse(sessionStorage?.getItem("isLoggedIn") || false)
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route
          path="/settings"
          element={
            <ProtectedRoute isAuthenticated={isLoggedIn}>
              <Todos isLoggedIn={isLoggedIn} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createblog"
          element={
            <ProtectedRoute isAuthenticated={isLoggedIn}>
              <CreateBlog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs/:id"
          element={
            <ProtectedRoute isAuthenticated={isLoggedIn}>
              <SingleBlog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog/:id/edit"
          element={
            <ProtectedRoute isAuthenticated={isLoggedIn}>
              <Todos isLoggedIn={isLoggedIn} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound isLoggedIn={isLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
