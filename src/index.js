import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login/Login";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FormEmployeesInfo1 from "./FormEmployeesInfo1/FormEmployeesInfo1";
function MainForm() {
  const [key, setKey] = useState("home");
  return (
    <>
      <Login />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <MainForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
