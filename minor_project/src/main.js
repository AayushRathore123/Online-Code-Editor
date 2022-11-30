import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

import  Login from "./components/Login";
import Problem from "./components/Problem";
import  Register  from "./components/Register";

function Main() {
  const [user, setLoginUser] = useState({})
  return (
<Routes>
<Route path="/" element={<App/>} />
  <Route path="/Login" element={<Login setLoginUser={setLoginUser} />} />
  <Route path="/Register" element={<Register />} />
  <Route path="/Home" element={<Home />} />
  <Route path="/Dashboard" element={<Dashboard/>}/>
  <Route path="/Problem" element={<Problem/>}/>
</Routes>
  
    );
  }
  
  export default Main;