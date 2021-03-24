import React from 'react';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div>
                <HooksCakeContainer/>
                <CakeContainer/>
            </div>
        </Provider>
    )
}

export default App;
