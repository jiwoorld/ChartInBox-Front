import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Terms from './pages/agree/Terms';
import PrivatePolicy from './pages/agree/PrivatePolicy';
import Mypage from './pages/mypage/Mypage';
import MovieInfo from './pages/movieinfo/MovieInfo';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/terms" element={<Terms></Terms>} />
                    <Route path="/privatepolicy" element={<PrivatePolicy />} />
                    <Route path="/mypage" element={<Mypage />} />
                    <Route
                        path="/movieinfo"
                        element={<MovieInfo></MovieInfo>}
                    />
                    <Route path="/mypage" element={<Mypage></Mypage>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
