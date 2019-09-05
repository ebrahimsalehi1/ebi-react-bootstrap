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
      <Tabs
        id={"controls-tab1"}
        activeKey={key}
        onSelect={k => {
          setKey(k);
        }}
      >
        <Tab eventKey={"home"} title="home">
          <Login />
        </Tab>
        <Tab eventKey={"employees-info-1"} title="employees 1">
          <FormEmployeesInfo1 />
        </Tab>
      </Tabs>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Ebrahim Salehi Demo for Bootstrap</h1>
      <MainForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
