import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import FormContainer from './containers/FormContainer';
import store from './store';

import ListContainer from './containers/ListContainer';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className="flex justify-center mt-6">
                    <h1 className="text-3xl font-bold underline">test</h1>
                </div>

                <FormContainer />
                <ListContainer />
            </div>
        </Provider>
    );
}

export default App;
