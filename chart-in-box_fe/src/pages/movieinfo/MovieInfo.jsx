import {
    Button,
    createTheme,
    CssBaseline,
    Paper,
    ThemeProvider,
    Typography,
    Box,
} from '@mui/material';
import * as React from 'react';
import MenuBarMovie from '../../components/menubar/MenuBarMovie';
import MovieCuration from '../../components/carousel/MovieCuration';
import MovieTable from '../../components/movieinfo/MovieTable';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function MovieInfo({ isLogin, setIsLogin }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#333D41',
            },
            secondary: {
                main: '#CF5E53',
            },
            third: {
                main: '#001F28',
            },
            background: {
                default: '#001F28',
            },
            text: {
                primary: '#fff',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    const [allData, setAllData] = React.useState({});
    const movieId = useParams();
    const url = movieId.id;
    let scrap = false;
    useEffect(() => {
        axios
            // .get(`/movie-info/${url}`)
            .get('/dummydata/movieinfo.json')
            .then(function (response) {
                setAllData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [url, scrap]);

    const handleScrap = () => {
        axios
            // .get(`/movie-info/${url}`)
            .post(`/movie-info/${url}/scrap`)
            .then(function (response) {
                scrap = !scrap;
            })
            .catch(function (error) {
                if (error.response.data === false) {
                    Swal.fire({
                        width: 460,
                        height: 260,
                        html: '<b> 스크랩 실패</b><br><br>로그인 후 진행해주세요',

                        showConfirmButton: false,
                        cancelButtonText: '확인',
                        cancelButtonColor: '#CF5E53',
                        showCancelButton: true,
                    });
                }
            });
    };

    const info = allData?.movieDetail ?? [];
    const reviewBoard = allData?.reviewBoardList ?? [];
    const qnaBoard = allData?.qnaBoardList ?? [];
    scrap = allData?.movieScrap;
    let mvRating = '';
    if (typeof info.mvRating === 'string') {
        mvRating = info.mvRating.slice(0, -3);
    } else {
        console.log('string 아님');
    }

    return (
        <ThemeProvider theme={theme}>
            <MenuBarMovie isLogin={isLogin} setIsLogin={setIsLogin} />
            <Paper
                sx={{
                    width: '54rem',
                    height: '127.5rem',
                    position: 'absolute',
                    top: '11rem',
                    left: '25%',
                    backgroundColor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingBottom: '16.5rem',
                }}
            >
                <Box
                    sx={{
                        height: '21.6rem',
                        display: 'flex',
                    }}
                >
                    <Box
                        sx={{
                            width: '16rem',
                            height: '100%',
                            marginRight: '0.75rem',
                        }}
                    >
                        <img
                            src={info.mvPoster}
                            alt="영화이미지"
                            width="256px"
                            class="movieInfo"
                        ></img>
                    </Box>
                    <Box
                        sx={{
                            marginTop: '3.3rem',
                            height: '18.2rem',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                height: '3.5rem',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box
                                sx={{
                                    height: '100%',

                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography
                                    sx={{
                                        textAlign: 'left',
                                        fontWeight: '600',
                                        fontSize: '1.5rem',
                                        width: '13.3rem',
                                        height: '1.9rem',
                                    }}
                                >
                                    {info.mvTitle}
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        paddingLeft: '0px',
                                        mt: '2px',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            height: '0.9rem',
                                            fontWeight: '400',
                                            fontSize: '0.75rem',
                                            pr: 1,
                                            borderRight: '1px solid white',
                                        }}
                                    >
                                        {info.mvGenre}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            width: '3.6rem',
                                            height: '0.9rem',
                                            fontWeight: '400',
                                            fontSize: '0.75rem',
                                            borderRight: '1px solid white',
                                        }}
                                    >
                                        {info.mvRuntime + '분'}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            width: '3.6rem',
                                            height: '0.9rem',
                                            fontWeight: '400',
                                            fontSize: '0.75rem',
                                            borderRight: '1px solid white',
                                        }}
                                    >
                                        {mvRating}
                                    </Typography>
                                </Box>
                            </Box>
                            {scrap ? (
                                <Button
                                    sx={{
                                        width: '95px',
                                        height: '32px',
                                        backgroundColor: '#CF5E53',
                                        display: 'flex',
                                        '&:hover,&.Mui-focusVisible': {
                                            backgroundColor: '#C2C2C2',
                                        },
                                    }}
                                    onClick={handleScrap}
                                >
                                    <img
                                        src="../../image/scrap.png"
                                        alt="스크랩"
                                        width="11px"
                                        height="15px"
                                    ></img>
                                    <Typography
                                        sx={{
                                            width: '3.125rem',
                                            height: '1.25rem',
                                            fontSize: '0.75rem',
                                            fontWeight: '500',
                                            ml: '0.375rem',
                                            mt: '0.0938rem',
                                            color: '#ffff',
                                            '&:hover,&.Mui-focusVisible': {
                                                color: ' #616161',
                                            },
                                        }}
                                    >
                                        스크랩
                                    </Typography>
                                </Button>
                            ) : (
                                <Button
                                    sx={{
                                        width: '95px',
                                        height: '32px',
                                        backgroundColor: '#C2C2C2',
                                        display: 'flex',
                                        '&:hover,&.Mui-focusVisible': {
                                            backgroundColor: '#CF5E53',
                                        },
                                    }}
                                    onClick={handleScrap}
                                >
                                    <img
                                        src="../../image/notScrap.png"
                                        alt="스크랩"
                                        width="11px"
                                        height="15px"
                                    ></img>
                                    <Typography
                                        sx={{
                                            width: '3.125rem',
                                            height: '1.25rem',
                                            fontSize: '0.75rem',
                                            fontWeight: '500',
                                            ml: '0.375rem',
                                            mt: '0.0938rem',
                                            '&:hover,&.Mui-focusVisible': {
                                                color: ' #ffff',
                                            },
                                        }}
                                    >
                                        스크랩
                                    </Typography>
                                </Button>
                            )}
                        </Box>

                        <Box
                            sx={{
                                color: 'white',
                                width: '100%',
                                height: '6rem',
                                fontWeight: '400',
                                fontSize: '0.8rem',
                                textAlign: 'left',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {info.mvPlot}
                        </Box>
                        <Box
                            sx={{
                                height: '5.5rem',
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: '400',
                                    fontSize: '0.875rem',
                                    display: 'flex',
                                }}
                            >
                                {info.mvTitleOrg
                                    ? '원제 ' + info.mvTitleOrg
                                    : '원제 -'}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: '400px',
                                    fontSize: '0.875rem',
                                    display: 'flex',
                                }}
                            >
                                {'개요 ' +
                                    info.mvNation +
                                    ' ' +
                                    info.mvProdYear}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: '400',
                                    fontSize: '0.875rem',
                                    display: 'flex',
                                }}
                            >
                                {'감독 ' + info.mvDirector}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: '400',
                                    fontSize: '0.875rem',
                                    display: 'flex',
                                }}
                            >
                                {'출연 ' + info.mvActor}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        height: '12.6rem',
                        width: '100%',
                    }}
                >
                    <Box
                        sx={{
                            width: '8rem',
                            height: '2.5rem',
                            fontSize: '1.3rem',
                            borderBottom: '1px solid white',
                            marginBottom: '1rem',
                        }}
                    >
                        큐레이션
                    </Box>
                    <MovieCuration></MovieCuration>
                </Box>
                <MovieTable
                    tableName={'Review'}
                    buttonName={'리뷰쓰러가기'}
                    Board={reviewBoard}
                ></MovieTable>
                <MovieTable
                    tableName={'Q&A'}
                    buttonName={'Q&A 쓰러가기'}
                    Board={qnaBoard}
                ></MovieTable>
            </Paper>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default MovieInfo;
