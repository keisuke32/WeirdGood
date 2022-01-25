import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Footer from './layout/footer';
import Home from './view/dashboard';

const App = () => {
  return (
      <Provider store={store}>
        <Router>
          <Home />
          <Footer />
        </Router>
      </Provider>
  );
}

export default App;
