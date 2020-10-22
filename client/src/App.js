import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";
function App() {
  return (
    <BrowserRouter>
      <div className="card">
        <Nav />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
          <Route exact path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
