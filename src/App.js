import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import NoPage from "./Pages/NoPage";
import About from "./Pages/About";
import LoginPop from "./Pages/LoginPop";
import RegisterPop from "./Pages/RegisterPop";
import Feedback from "./Pages/Feedback";
import HomePage from "./Pages/Vegetables";
import Vegetables from "./Pages/Vegetables";
import Fruits from "./Pages/Fruits";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="registerPop" element={<RegisterPop />} />
          <Route path="login" element={<Login />} />
          <Route path="loginPop" element={<LoginPop />} />
          <Route path="about" element={<About />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="vegetables" element={<Vegetables />} />
          <Route path="fruits" element={<Fruits />} />
          <Route path="*" element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
