
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<UpdateProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
