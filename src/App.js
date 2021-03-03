import React, { Component } from 'react';
import { Footer } from './components/shared';
import './App.css';
import HomePage from './containers/HomePage/HomePage';
import CategoryPage from './containers/CategoryPage/CategoryPage';
import CartPage from './containers/CartPage/CartPage';
import FormLogin from './components/Form/FomLogin';
import FormRegister from './components/Form/FormRegister';
import ProductPage from "./containers/ProductPage/ProductPage";
import { Router, Route, Switch } from 'react-router-dom';
import TopNavigation from './components/shared/layouts/Header/TopNavigation';
import MainNavigation from './components/shared/layouts/Header/MainNavigation';
import history from './history';
import Order from './components/CartPage/Order/Order';
import Contact from './components/HomePage/Contact/Contact';
import Blog from './components/Blog/Blog';
class App extends Component {
  render() {
    return (
      <div>
        <header className="header trans_300">
          <TopNavigation />
          <MainNavigation />
        </header>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories" component={CategoryPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/login" component={FormLogin} />
          <Route path="/register" component={FormRegister} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/order" component={Order} />
          <Route path="/blog" component={Blog} />
        </Switch>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
