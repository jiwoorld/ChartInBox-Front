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
import TotalBoard from './pages/board/TotalBoard';
import FreeBoard from './pages/board/FreeBoard';
import QnaBoard from './pages/board/QnaBoard';
import ReviewBoard from './pages/board/ReviewBoard';
import Posting from './pages/board/Posting';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage></MainPage>} />
                    <Route path="/terms" element={<Terms></Terms>} />
                    <Route path="/privatepolicy" element={<PrivatePolicy />} />
                    <Route path="/mypage" element={<Mypage />} />
                    <Route path="/reviewboard" element={<ReviewBoard />} />
                    <Route path="/freeboard" element={<FreeBoard />} />
                    <Route path="/qnaboard" element={<QnaBoard />} />
                    <Route path="/totalboard" element={<TotalBoard />} />
                    <Route path="/posting" element={<Posting />} />
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
