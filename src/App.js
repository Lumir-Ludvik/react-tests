import './App.css';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SimpleTableComponent} from "./components/simple-table/simple-table";
import {SimpleFormComponent} from "./components/simple-form/simple-form.component";
import React from "react";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPageComponent/>}/>
                    <Route path="table" element={<SimpleTableComponent/>}/>
                    <Route path="form" element={<SimpleFormComponent/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
