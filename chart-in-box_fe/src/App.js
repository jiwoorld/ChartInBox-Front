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
import TotalNBoard from './pages/nboard/TotalNBoard';
import NetflexNBoard from './pages/nboard/NetflexNBoard';
import DisneyNBoard from './pages/nboard/DisneyNBoard';
import TivingNBoard from './pages/nboard/TvingNBoard';
import WaveNBoard from './pages/nboard/WaveNBoard';
import WatchaNBoard from './pages/nboard/WatchaNBoard';
import EtcNBoard from './pages/nboard/EtcNBoard';
import Writing from './pages/Writing/Writing';
import NWriting from './pages/Writing/NWriting';
import MovieSearch from './pages/search/MovieSearch';
import ShowingBoard from './pages/board/ShowingBoard';
import ScrapMovie from './pages/scrap/ScrapMovie';

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
                    <Route path="/totalnboard" element={<TotalNBoard />} />
                    <Route path="/netflexnboard" element={<NetflexNBoard />} />
                    <Route path="/disneynboard" element={<DisneyNBoard />} />
                    <Route path="/tivingnboard" element={<TivingNBoard />} />
                    <Route path="/wavenboard" element={<WaveNBoard />} />
                    <Route path="/watchanboard" element={<WatchaNBoard />} />
                    <Route path="/etcnboard" element={<EtcNBoard />} />
                    <Route path="/scrapmovie" element={<ScrapMovie />} />
                    <Route
                        path="/movie-info/:id"
                        element={<MovieInfo></MovieInfo>}
                    />
                    <Route path="/mypage" element={<Mypage></Mypage>} />
                    <Route
                        path="/showingboard"
                        element={<ShowingBoard></ShowingBoard>}
                    />
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
                    <Route path="/writing" element={<Writing></Writing>} />
                    <Route path="/nwriting" element={<NWriting></NWriting>} />
                    <Route
                        path="/moviesearch"
                        element={<MovieSearch></MovieSearch>}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
