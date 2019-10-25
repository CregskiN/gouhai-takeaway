import React from 'react';
import store from './store/index';
import {BrowserRouter, Route} from 'react-router-dom';
import Order from './pages/Order/index';
import {Provider} from 'react-redux';
import Header from './common/Header';
import Management from "./pages/Management";
import ManagementCommodity from './pages/ManagementCommodity';
import Checkout from "./pages/Checkout/index"

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <Route path='/' exact component={Order} />
                    <Route path='/Checkout' exact component={Checkout} />
                    <Route path='/management' exact component={Management} />
                    <Route path='/management/commodity' exact component={ManagementCommodity} />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
