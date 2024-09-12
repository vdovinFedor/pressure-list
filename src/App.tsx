import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import FormContainer from './containers/FormContainer';

import store from './store';
import ListContainer from './containers/ListContainer';
import Header from './components/Header';
import TwoElementLayout from './components/TwoElementLayout';

const queryClient = new QueryClient();
/* <div className="flex justify-center mt-6"> */
/*    <h1 className="text-3xl font-bold underline">test</h1> */
/* </div> */
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <div className="App">
                    <Header />
                    <TwoElementLayout
                        leftComponent={<FormContainer />}
                        rightComponent={<ListContainer />}
                    />
                </div>
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
