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
import * as React from 'react';
import CurationPageMovie from '../../components/curationpage/CurationPageMoive';
import MainMovie from '../../components/mainpage/MainMovie';
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
    const sortItems = ['평점 순', '게시글 순'];
    const [moives, setMovies] = React.useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
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
                    <Selected title="장르" items={genreItems}></Selected>
                    <Selected
                        title="개봉년도"
                        items={realizeYearItems}
                    ></Selected>
                    <Selected title="국가" items={nationItems}></Selected>
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
                    >
                        조회{' '}
                    </Button>
                </Box>
            </Box>

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
                            {moives.map(movie => (
                                <Grid key={movie.id} item={5}>
                                    <CurationPageMovie></CurationPageMovie>
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
