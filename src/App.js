import React from 'react';
import store from './store/index';
import {HashRouter, Route} from 'react-router-dom';
import Order from './pages/Order/index';
import {Provider} from 'react-redux';
import Header from './common/Header';
import Login from "./pages/Login";
import Management from "./pages/Management";
import ManagementCommodity from './pages/ManagementCommodity';
import AddCommodity from './pages/AddCommodity';
import WinnerList from './pages/WinnerList';
import Checkout from "./pages/Checkout/index";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <HashRouter>
                    <Header/>
                    <Route path='/' exact component={Order} />
                    <Route path='/Checkout' exact component={Checkout} />
                    <Route path='/management/login' exact component={Login} />
                    <Route path='/management' exact component={Management} />
                    <Route path='/management/commodity' exact component={ManagementCommodity} />
                    <Route path='/management/addcommodity' exact component={AddCommodity} />
                    <Route path='/management/winnerlist' exact component={WinnerList}/>
                </HashRouter>
            </Provider>
        </div>
    );
}

export default App;
