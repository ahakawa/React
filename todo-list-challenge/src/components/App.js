import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import "../components/styles.css";

const App = () => (
  <div className="div-container-geral">
    <div className="div-header">
      <h1 className="titulo">TASK LIST</h1>
    </div>
    <div className="div-container">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
);

export default App;
