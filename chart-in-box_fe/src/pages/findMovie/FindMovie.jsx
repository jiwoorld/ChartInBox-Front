import {
    createTheme,
    CssBaseline,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import MenuBarMovie from '../../components/menubar/MenuBarMovie';
import CurationPageMovie from '../../components/curationpage/CurationPageMoive';

function FindMovie({ isLogin, setIsLogin }) {
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
    const [data, setData] = React.useState({});
    const mvTitle = useParams();
    const url = mvTitle.mvTitle;
    React.useEffect(() => {
        axios
            .get(`http://localhost:8080/movie-search/${url}`)
            // .get('/dummydata/moviesearch.json')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [url]);
    const searchList = data?.searchList ?? [];
    const searchTitle = data?.searchTitle ?? '';
    return (
        <ThemeProvider theme={theme}>
            <MenuBarMovie isLogin={isLogin} setIsLogin={setIsLogin} />
            <Typography
                sx={{
                    fontWeight: '500',
                    fontSize: '1.3125rem',
                    height: '1.5625rem',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    ml: '11rem',
                    mt: '7rem',
                }}
            >
                {`'${searchTitle}'  검색결과`}
            </Typography>
            {searchList.length === 0 ? (
                <Box
                    sx={{
                        width: '68rem',
                        height: '16.4rem',
                        ml: '15rem',
                        mt: '8rem',
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: '500',
                            fontSize: '1.6rem',
                        }}
                    >
                        찾아보신 내용이 존재하지 않습니다
                    </Typography>
                </Box>
            ) : (
                <Box
                    sx={{
                        maxWidth: '80rem',
                        height: '16.4rem',
                        ml: '15rem',
                        mt: '4rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                    }}
                >
                    {searchList.map(movie => (
                        <Box sx={{ mr: '2rem', mb: '2rem' }}>
                            <CurationPageMovie
                                mvTitle={movie.mvTitle}
                                mvPoster={movie.mvPoster}
                                mvId={movie.mvId}
                            ></CurationPageMovie>
                        </Box>
                    ))}
                </Box>
            )}

            <CssBaseline />
        </ThemeProvider>
    );
}

export default FindMovie;
