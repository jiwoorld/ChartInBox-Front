import {
    Button,
    createTheme,
    CssBaseline,
    Grid,
    Paper,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import * as React from 'react';
import CurationPageMovie from '../../components/curationpage/CurationPageMoive';
import SearchCuration from '../../components/curationpage/SearchCuration';
import MenuBarMovie from '../../components/menubar/MenuBarMovie';
import Selected from '../../components/moviesearch/Selected';

function MovieSearch({ isLogin, setIsLogin }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#333D41',
            },
            secondary: {
                main: '#CF5E53',
            },
            third: {
                main: '#0000',
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
    const genreItems = [
        '애니메이션',
        '액션',
        '코미디',
        '로맨스',
        '스릴러',
        '호러',
        'sf',
        '판타지',
        '드라마 장르',
        '범죄',
        '다큐멘터리',
        '음악/뮤지컬',
        '고전',
        '단편 영화',
        '인디',
        '어린이&가족',
    ];
    const realizeYearItems = [
        "1950's",
        "1960's",
        "1970's",
        "1980's",
        "1990's",
        "2000's",
        "2010's",
        "2020's",
    ];
    const nationItems = [
        '한국',
        '일본',
        '미국',
        '프랑스',
        '중국',
        '대만',
        '홍콩',
        '독일',
        '인도',

        '스페인',
        '이탈리아',
        '러시아',
        '아랍',
        '호주',
        '영국',
        '멕시코',
        '태국',
    ];
    const [curationList, setCurationList] = React.useState([]);
    const [movieExploreList, setMovieExploreList] = React.useState([]);
    const [mvGenre, setMvGenre] = React.useState('');
    const [mvNation, setMvNation] = React.useState('');
    const [mvYear, setMvYear] = React.useState('');
    const [isCheck, setIsCheck] = React.useState(false);

    React.useEffect(() => {
        axios
            // .get('/moive-explore')
            .get('/dummydata/explorebefore.json')
            .then(function (response) {
                setCurationList(response.data.curationList);
                setMovieExploreList(response.data.movieExploreList);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    const handleFilter = () => {
        console.log('조회');
        console.log(mvGenre, mvNation, mvYear);
        axios
            // .post('/movie-explore', {
            //     params: {
            //         genre: mvGenre,
            //         nation: mvNation,
            //         year: mvYear,
            //     },
            // })
            .get('/dummydata/explore.json')
            .then(function (response) {
                setMovieExploreList(response.data);
                setIsCheck(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <MenuBarMovie isLogin={isLogin} setIsLogin={setIsLogin} />
            <Box
                sx={{
                    width: '100vw',
                    height: '14.625rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography
                    sx={{
                        fontWeight: '600',
                        fontSize: '1.5rem',
                        ml: '11rem',
                    }}
                >
                    필터를 통해 취향에 맞는 영화를 모아보세요
                </Typography>
                <Box
                    sx={{
                        width: '572px',
                        height: '19px',
                        mr: '3.4375rem',
                        mb: '1rem',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <Selected
                        title="장르"
                        items={genreItems}
                        setValue={setMvGenre}
                    ></Selected>
                    <Selected
                        title="개봉년도"
                        items={realizeYearItems}
                        setValue={setMvYear}
                    ></Selected>
                    <Selected
                        title="국가"
                        items={nationItems}
                        setValue={setMvNation}
                    ></Selected>
                    <Button
                        sx={{
                            width: '2rem',
                            height: '1.5rem',
                            backgroundColor: '#F2CB05',
                            fontWeight: 600,
                            fontSize: '0.8135rem',
                            borderRadius: '0.5rem',
                            mt: 2.8,
                            '&:hover,&.Mui-focusVisible': {
                                backgroundColor: '#F2CB05',
                            },
                        }}
                        onClick={handleFilter}
                    >
                        조회{' '}
                    </Button>
                </Box>
            </Box>
            {!isCheck ? (
                <Box
                    sx={{
                        width: '100vw',
                        height: '22rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            mr: 10,
                            width: '68.5rem',
                            height: '20rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            sx={{
                                width: '9.3125rem',
                                height: '1.75rem',
                                fontSize: '1.3125rem',
                                fontWeight: '600',
                            }}
                        >
                            오늘의 큐레이션
                        </Typography>
                        <Box
                            sx={{
                                height: '14.375rem',
                                width: '68.5rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            {curationList.map(item => (
                                <SearchCuration item={item}></SearchCuration>
                            ))}
                        </Box>
                    </Box>
                </Box>
            ) : (
                <Box
                    sx={{
                        ml: '11rem',
                        maxWidth: '24.25rem',
                        height: '1.9375rem',
                        display: 'flex',
                    }}
                >
                    {mvGenre !== '' && (
                        <Box
                            sx={{
                                width: '6.25rem',
                                height: '1.9375rem',
                                background: 'rgba(255, 255, 255, 0.5)',
                                borderRadius: '0.5625rem',
                                fontWeight: '600',
                                fontSize: '0.875rem',
                                color: '#000',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: '1rem',
                            }}
                        >
                            {mvGenre}
                        </Box>
                    )}
                    {mvYear !== '' && (
                        <Box
                            sx={{
                                width: '6.25rem',
                                height: '1.9375rem',
                                background: 'rgba(255, 255, 255, 0.5)',
                                borderRadius: '0.5625rem',
                                fontWeight: '600',
                                fontSize: '0.875rem',
                                color: '#000',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: '1rem',
                            }}
                        >
                            {mvYear}
                        </Box>
                    )}
                    {mvNation !== '' && (
                        <Box
                            sx={{
                                width: '6.25rem',
                                height: '1.9375rem',
                                background: 'rgba(255, 255, 255, 0.5)',
                                borderRadius: '0.5625rem',
                                fontWeight: '600',
                                fontSize: '0.875rem',
                                color: '#000',
                                display: 'flex',

                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {mvNation}
                        </Box>
                    )}
                </Box>
            )}

            <Paper
                sx={{
                    height: '76.25rem',
                    width: '100vw',
                    backgroundColor: 'background.default',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '72.325rem',
                        height: '59rem',
                        mt: '5.6875rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        sx={{
                            width: '2.5rem',
                            height: '1.75rem',
                            fontSize: '23px',
                            fontWeight: '600',
                        }}
                    >
                        영화
                    </Typography>
                    <Box
                        sx={{
                            height: '54.6875rem',
                        }}
                    >
                        <Grid
                            container
                            spacing={4}
                            sx={{
                                display: 'flex',
                                justifyItems: 'center',
                                justifyContent: 'center',

                                alignContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                            {movieExploreList.map(item => (
                                <Grid key={item.id} item={5}>
                                    <CurationPageMovie
                                        mvTitle={item.mvTitle}
                                        mvPoster={item.mvPoster}
                                        mvId={item.mvId}
                                    ></CurationPageMovie>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Paper>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default MovieSearch;
