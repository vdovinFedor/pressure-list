import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import store from './store';
import Header from './components/Header';
import PressureMeasurements from './components/PressureMeasurements';
import Diary from './components/Diary';
import HomePage from './components/HomePage';

const queryClient = new QueryClient();
/* <div className="flex justify-center mt-6"> */
/*    <h1 className="text-3xl font-bold underline">test</h1> */
/* </div> */
function App() {
    const homePage = (
        <>
            <Header title="HomePage" />
            <HomePage />
        </>
    );
    const pressureMeasurementsPage = (
        <>
            <Header title="Давление" returnButton />
            <PressureMeasurements />
        </>
    );
    const diaryPage = (
        <>
            <Header title="Дневник" returnButton />
            <Diary />
        </>
    );
    return (
        <Router>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <div className="App">
                        <Routes>
                            <Route path="/:userUuid" element={homePage} />
                            <Route path="/:userUuid/measurements" element={pressureMeasurementsPage} />
                            <Route path="/:userUuid/diary" element={diaryPage} />
                        </Routes>
                    </div>
                </Provider>
            </QueryClientProvider>
        </Router>
    );
}

export default App;
