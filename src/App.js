import React from 'react';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div>
                <HooksCakeContainer/>
                <CakeContainer/>
                <IceCreamContainer/>
                <NewCakeContainer/>
                <UserContainer/>
            </div>
        </Provider>
    )
}

export default App;
