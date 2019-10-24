import React from 'react';
import store from './store/index';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/Header';
import Order from './pages/Order/index';
import {Provider} from 'react-redux';
import Management from "./pages/Management";
import ManagementCommodity from "./pages/ManagementCommodity";


function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <Route path='/' exact component={Order} />
                    <Route path='/management' exact component={Management} />
                    <Route path='/management/commodity' exact component={ManagementCommodity} />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
