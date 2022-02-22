import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Result from "./components/Result";

function App() {
  return (
    <main>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/searchResults/:id" component={Result} />
    </main>
  );
}

export default App;
