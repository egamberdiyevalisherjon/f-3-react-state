import React from "react";
import "./App.css";
import Clicker from "./Components/Clicker";
import Todo from "./Components/Todo";

function App() {
  return (
    <div>
      <h1>Hammaga Salom!</h1>
      <Todo />
      <Clicker />
    </div>
  );
}

export default App;
