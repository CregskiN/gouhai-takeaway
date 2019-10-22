import React from 'react';
import store from './store/index';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/Header';
import Order from './pages/Order/index';
import {Provider} from 'react-redux';


function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <Route path='/' exact component={Order}/>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
