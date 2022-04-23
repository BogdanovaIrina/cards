import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Login} from "./ui/Login";
import {Registr} from "./ui/Registr";
import {Profile} from "./ui/Profile";
import {Password} from "./ui/Password";
import {Error} from "./ui/Error";
import {NewPassword} from "./ui/NewPassword";
import {TestPage} from "./ui/TestPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/registr"} element={<Registr />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/404"} element={<Error />} />
        <Route path={"/password"} element={<Password />} />
        <Route path={"/new-password"} element={<NewPassword />} />
        <Route path={"/test"} element={<TestPage />} />
      </Routes>
    </div>
  )
}

export default App
