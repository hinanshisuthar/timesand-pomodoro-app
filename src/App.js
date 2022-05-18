import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import {Routes, Route} from 'react-router-dom';
import { Login } from "./pages/Authentication/Login";
import { Signup } from "./pages/Authentication/Signup";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
