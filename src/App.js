import React from "react";
import "./App.scss";
import { Navigation } from "./components/header";
import { Homepage } from "./components/homepage";
import { Article } from "./components/article";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { NotFound } from "./components/404";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" exact component={() => <Homepage />} />
          <Route exact path="/article" exact component={() => <Article />} />
          <Route exact path="/contact" exact component={() => <Contact />} />
          <Route exact path="/404" component={() => <NotFound />} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
