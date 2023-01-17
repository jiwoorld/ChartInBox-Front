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
import Review from '../../components/movieinfo/Review';
import dummydata from '../../dummydata/movieInfo.json';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MovieInfo() {
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
    const [reviewButton, setReviewButton] = React.useState(1);
    const [info, setInfo] = React.useState({});

    const handleReview = () => {
        setReviewButton(reviewButton + 1);
    };
    useEffect(() => {
        setInfo(dummydata);
    }, []);

    let mvRating = '';
    if (typeof info.mvRating === 'string') {
        mvRating = info.mvRating.slice(0, -3);
    } else {
        console.log('string 아님');
    }
    // const { movieId } = useParams();
    // console.log(movieId);
    // const url = `/movie-info/${movieId}`;
    // useEffect(() => {
    //   axios
    //     .get(url)
    //     .then(function (response) {
    //       setInfo(response.data);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }, [url]);

    return (
        <ThemeProvider theme={theme}>
            <MenuBarMovie />
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

                            {reviewButton % 2 === 0 ? (
                                <Box
                                    sx={{
                                        height: '1.5rem',
                                        display: 'flex',
                                        marginTop: '0.8rem',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            mr: '0.7rem',
                                        }}
                                    >
                                        <Review></Review>
                                        <Review></Review>
                                        <Review></Review>
                                        <Review></Review>
                                        <Review></Review>
                                    </Box>
                                    <Button
                                        sx={{
                                            width: '3.2rem',
                                            height: '1.3rem',
                                            padding: '0px',
                                            backgroundColor: '#FFE171',
                                            color: '#333D41',
                                            fontWeight: '600',
                                            fontSize: '0.7rem',
                                            '&:hover': {
                                                backgroundColor: '#f2cb05',
                                            },
                                        }}
                                        onClick={handleReview}
                                    >
                                        평점등록
                                    </Button>
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        height: '1.5rem',
                                        display: 'flex',
                                        marginTop: '0.8rem',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            mr: '0.7rem',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <img
                                            src="../../image/good.png"
                                            alt="좋아요"
                                            width="20px"
                                            height="18px"
                                        ></img>
                                        <Typography
                                            sx={{
                                                marginLeft: '0.4rem',
                                                width: '2rem',
                                                fontWeight: 600,
                                                fontSize: '1.3rem',
                                                color: '#F2CB05',
                                            }}
                                        >
                                            3.4
                                        </Typography>
                                    </Box>
                                    <Button
                                        sx={{
                                            width: '3.2rem',
                                            height: '1.3rem',
                                            padding: '0px',
                                            backgroundColor: 'white',
                                            color: '#333D41',
                                            fontWeight: '600',
                                            fontSize: '0.7rem',
                                            '&:hover': {
                                                backgroundColor: '#fff',
                                            },
                                        }}
                                        onClick={handleReview}
                                    >
                                        평점주기
                                    </Button>
                                </Box>
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
                ></MovieTable>
                <MovieTable
                    tableName={'Q&A'}
                    buttonName={'Q&A 쓰러가기'}
                ></MovieTable>
            </Paper>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default MovieInfo;
