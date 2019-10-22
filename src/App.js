import React from 'react';
import store from './store/index';
import {Router} from 'react-router-dom';
import Header from './common/Header';
import Order from './pages/Order/index';
import {Provider} from 'react-redux';


function App() {
  return (
    <div className="App">

      <Header />
      {/*<Router path='/' exact component={Order} />*/}

    </div>
  );
}

export default App;
