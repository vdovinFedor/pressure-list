import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import store from './store';
import Header from './components/Header';
import PressureMeasurements from './components/PressureMeasurements';

const queryClient = new QueryClient();
/* <div className="flex justify-center mt-6"> */
/*    <h1 className="text-3xl font-bold underline">test</h1> */
/* </div> */
function App() {
    return (
        <Router>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <div className="App">
                        <Header />
                        <Routes>
                            <Route path="/measurements" element={<PressureMeasurements />} />
                        </Routes>
                    </div>
                </Provider>
            </QueryClientProvider>
        </Router>
    );
}

export default App;
