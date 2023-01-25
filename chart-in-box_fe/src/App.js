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
import Posting from './pages/board/Posting';
import TotalNBoard from './pages/nboard/TotalNBoard';
import Writing from './pages/Writing/Writing';
import NWriting from './pages/Writing/NWriting';
import MovieSearch from './pages/search/MovieSearch';
import ShowingBoard from './pages/board/ShowingBoard';
import ScrapMovie from './pages/scrap/ScrapMovie';
import FindMovie from './pages/findMovie/FindMovie';

function App() {
    const [isLogin, setIsLogin] = React.useState(false);
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainPage
                                isLogin={isLogin}
                                setIsLogin={setIsLogin}
                            ></MainPage>
                        }
                    />
                    <Route path="/terms" element={<Terms></Terms>} />
                    <Route path="/privatepolicy" element={<PrivatePolicy />} />
                    <Route path="/mypage" element={<Mypage />} />
                    <Route
                        path="/movie-talk"
                        element={
                            <TotalBoard
                                isLogin={isLogin}
                                setIsLogin={setIsLogin}
                            />
                        }
                    />
                    <Route path="/posting" element={<Posting />} />
                    <Route path="/scrapmovie" element={<ScrapMovie />} />
                    <Route
                        path="/movie-info/:id"
                        element={
                            <MovieInfo
                                isLogin={isLogin}
                                setIsLogin={setIsLogin}
                            ></MovieInfo>
                        }
                    />
                    <Route path="/my-page" element={<Mypage></Mypage>} />
                    <Route path="/my-page/post" element={<Mypost></Mypost>} />
                    <Route
                        path="/my-page/comment"
                        element={<Mycomment></Mycomment>}
                    />
                    <Route
                        path="/my-page/edit"
                        element={<ChangeInfo></ChangeInfo>}
                    />
                    <Route
                        path="/curation"
                        element={
                            <CurationPage
                                isLogin={isLogin}
                                setIsLogin={setIsLogin}
                            ></CurationPage>
                        }
                    />
                    <Route path="/writing" element={<Writing></Writing>} />
                    <Route path="/nwriting" element={<NWriting></NWriting>} />
                    <Route
                        path="/moviesearch"
                        element={
                            <MovieSearch
                                isLogin={isLogin}
                                setIsLogin={setIsLogin}
                            ></MovieSearch>
                        }
                    />
                    <Route
                        path="/movie-talk"
                        element={<TotalBoard></TotalBoard>}
                    />
                    <Route
                        path="/movie-talk/:id"
                        element={<ShowingBoard></ShowingBoard>}
                    />
                    <Route
                        path="/n-party/:nboardname"
                        element={<TotalNBoard></TotalNBoard>}
                    />
                    <Route
                        path="/movie-search/:mvTitle"
                        element={
                            <FindMovie
                                isLogin={isLogin}
                                setIsLogin={setIsLogin}
                            ></FindMovie>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
