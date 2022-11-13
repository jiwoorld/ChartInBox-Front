import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Join from './pages/sign/Join';
import Login from './pages/sign/Login';
import ChangePassword from './pages/sign/ChangePassword';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/join" element={<Join></Join>} />
                    <Route path="/log-in" element={<Login />} />
                    <Route
                        path="/log-in/find-pw"
                        element={<ChangePassword />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
