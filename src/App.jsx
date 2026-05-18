import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProtectedRoute from "./components/common/ProtectedRoute";

export default function App() {
  return (
    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}