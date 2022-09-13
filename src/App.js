import './App.css';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SimpleTableComponent} from "./components/react-redux-components/simple-table/simple-table.component";
import {SimpleFormComponent} from "./components/react-redux-components/simple-form/simple-form.component";
import React from "react";
import {CustomReducerTableComponent} from "./components/native-reducer-components/custom-reducer-table/custom-reducer-table.component";
import {CustomReducerFormComponent} from "./components/native-reducer-components/custom-reducer-form/custom-reducer-form.component";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPageComponent/>}/>
                    <Route path="table" element={<SimpleTableComponent/>}/>
                    <Route path="custom-table" element={<CustomReducerTableComponent/>}/>
                    <Route path="form" element={<SimpleFormComponent/>}/>
                    <Route path="custom-form" element={<CustomReducerFormComponent/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
