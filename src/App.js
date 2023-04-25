import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import AddMovie from "./components/AddMovie";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { createContext, useEffect, useState } from "react";
const Appstate = createContext();
const App = () => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <Appstate.Provider value={{ login, userName, setLogin, setUserName }}>
      <div className="App relative">
        <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Appstate.Provider>
  );
};

export default App;
export { Appstate };
