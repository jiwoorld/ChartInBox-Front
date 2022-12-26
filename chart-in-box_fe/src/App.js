import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Terms from './pages/agree/Terms';
import PrivatePolicy from './pages/agree/PrivatePolicy';
import Mypage from './pages/mypage/Mypage';
import Mypost from './pages/mypage/Mypost';
import Mycomment from './pages/mypage/Mycomment';
import MovieInfo from './pages/movieinfo/MovieInfo';
import ChangeInfo from './pages/mypage/ChangeInfo';
import MainPage from './pages/main/MainPage';
import CurationPage from './pages/CurationPage/CurationPage';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage></MainPage>} />
                    <Route path="/terms" element={<Terms></Terms>} />
                    <Route path="/privatepolicy" element={<PrivatePolicy />} />
                    <Route path="/mypage" element={<Mypage />} />
                    <Route
                        path="/movieinfo"
                        element={<MovieInfo></MovieInfo>}
                    />
                    <Route path="/mypage" element={<Mypage></Mypage>} />
                    <Route path="/mypost" element={<Mypost></Mypost>} />
                    <Route
                        path="/mycomment"
                        element={<Mycomment></Mycomment>}
                    />
                    <Route
                        path="/changeinfo"
                        element={<ChangeInfo></ChangeInfo>}
                    />
                    <Route
                        path="/curation"
                        element={<CurationPage></CurationPage>}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
