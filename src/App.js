import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import News from "./pages/News";
import Error from "./pages/Error";
import { Navigate } from "react-router-dom";

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = localStorage.getItem('dummyToken');
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/news"
          element={
            // Good! Do your composition here instead of wrapping <Route>.
            // This is really just inverting the wrapping, but it's a lot
            // more clear which components expect which props.
            <RequireAuth redirectTo="/">
              <News />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
