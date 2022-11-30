import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

import  Login from "./components/Login";
import Logout from "./components/Logout";
import Problem from "./components/Problem";
import Q1 from "./components/Question/Q1";
import Q2 from "./components/Question/Q2"
import  Register  from "./components/Register";
import Compiler from "./components/Compiler";

function Main() {
  const [user, setLoginUser] = useState({})
  return (
<Routes>
<Route path="/" element={<App/>} />
  <Route path="/Login" element={<Login setLoginUser={setLoginUser} />} />
  <Route path="/Register" element={<Register />} />
  <Route path="/Home" element={<Home setLoginUser={setLoginUser}/>} />
  <Route path="/Dashboard" element={<Dashboard/>}/>
  <Route path="/Compiler" element={<Compiler/>}/>
  <Route path="/Problem" element={<Problem/>}/>
  <Route path="/" element={<Logout/>}/>
  <Route path="/Q1" element={<Q1/>}/>
  <Route path="/Q2" element={<Q2/>}/>
</Routes>
  
    );
  }
  
  export default Main;