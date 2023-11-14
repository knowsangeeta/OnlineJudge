
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={currentUser ? <Home /> : <Register />}
        />
        <Route
          path="/login"
          element={currentUser ? <Home /> : <Login />}
        />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />
      </Routes>
    </Router>
  );
}



export default App;

