import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import Cart from "./components/layout/Cart";
import Menu from "./components/layout/Menu";
import Alert from "./components/layout/Alert"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//redux related stuff
import { Provider } from "react-redux";
import store from "./store";
const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Login} />
        <Alert/>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/menu" component={Menu}></Route>
          <Route exact path="/cart" component={Cart}></Route>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
