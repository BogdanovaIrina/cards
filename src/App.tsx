import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import {Login} from "./ui/Login";
import {Registr} from "./ui/Registr";
import {Profile} from "./ui/Profile";
import {Password} from "./ui/Password";
import {Error} from "./ui/Error";
import {NewPassword} from "./ui/NewPassword";
import {TestPage} from "./ui/TestPage";
import {useDispatch} from "react-redux";

const App = () => {

  const dispatch = useDispatch()

  return (
    <div className="App">
        <div>
            <NavLink className={({isActive}) => (isActive ? 'active' : 'item')} to={'/'}>Profile</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'active' : 'item')} to={'/login'}>Login</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'active' : 'item')} to={'/test'}>Test</NavLink>
        </div>
      <Routes>
        <Route path={"/"} element={<Profile/>} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/test"} element={<TestPage />} />
      </Routes>
    </div>
  )
}

export default App
