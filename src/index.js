import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Login/Login'

function MainForm(){
  return (
          <Login />
  )
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
