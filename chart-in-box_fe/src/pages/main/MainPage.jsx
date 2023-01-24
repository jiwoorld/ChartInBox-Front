import {
    createTheme,
    CssBaseline,
    Paper,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import * as React from 'react';
import MainCarousel from '../../components/carousel/MainCarousel';
import MainCuration from '../../components/mainpage/MainCuration';
import MainTable from '../../components/mainpage/MainTable';
import MenuBarMovie from '../../components/menubar/MenuBarMovie';

function MainPage() {
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
            box: {
                default: '#1A1A1A',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    const [allData, setAllData] = React.useState({});
    React.useEffect(() => {
        axios
            // .get('/')
            .get('/dummydata/mainpage.json')
            .then(function (response) {
                setAllData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const movies = allData?.mvCharts ?? [];
    const freeBoard = allData?.freeBoardList ?? [];
    const reviewBoard = allData?.reviewBoardList ?? [];
    const npartyBoard = allData?.npartyBoardList ?? [];

    //옵셔널체이닝

    return (
        <ThemeProvider theme={theme}>
            <MenuBarMovie />
            <Paper>
                <Paper
                    sx={{
                        width: '100vw',
                        height: '52.125rem',
                        backgroundColor: 'background.default',
                    }}
                >
                    <Box
                        sx={{
                            width: '100vw',
                            height: '33.6875rem',
                            mt: '2.2rem',
                        }}
                    >
                        <Box
                            sx={{
                                height: '6.75rem',
                                width: '100%',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src="../../image/MovieChart.png"
                                alt="무비차트"
                            ></img>
                        </Box>

                        <Box
                            sx={{
                                width: '100vw',
                                height: '26.3125rem',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: 'box.default',
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100vw',
                                    height: '2.75rem',
                                    borderBottom: '3px solid white',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    src="../../image/rectangle.png"
                                    width="100%"
                                    alt="사각형"
                                ></img>
                            </Box>
                            <Box
                                sx={{
                                    width: '100vw',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '10vw',
                                        height: '17.5625rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        ml: 6,
                                    }}
                                >
                                    <img
                                        src="../../image/ott_chart.png"
                                        width="100%"
                                        alt="ott_chart"
                                    ></img>
                                </Box>
                                <Box sx={{ width: '83vw' }}>
                                    <MainCarousel
                                        movies={movies}
                                    ></MainCarousel>
                                    {/* <MainCarousel ></MainCarousel> */}
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: '100vw',
                                    height: '2.75rem',
                                    borderTop: '3px solid white',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    src="../../image/rectangle.png"
                                    width="100%"
                                    alt="사각형"
                                ></img>
                            </Box>
                        </Box>
                    </Box>
                    <CssBaseline />
                </Paper>
                <Paper
                    sx={{
                        width: '100vw',
                        height: '19.375rem',
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <MainCuration></MainCuration>
                </Paper>
                <Paper
                    sx={{
                        width: '100vw',
                        height: '49rem',
                        backgroundColor: '#EDEBDE',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: '76rem',
                            height: '31.9375rem',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'primary.main',
                                width: '76rem',
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}
                        >
                            커뮤니티
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '76rem',
                                height: '30.375rem',
                            }}
                        >
                            <MainTable
                                tableName="자유게시판"
                                tableLink="/movie-talk/freeboard"
                                Board={freeBoard}
                            ></MainTable>
                            <MainTable
                                tableName="영화리뷰"
                                tableLink="/movie-talk/reviewboard"
                                Board={reviewBoard}
                            ></MainTable>
                            <MainTable
                                tableName="n팟 구함"
                                tableLink="/nboard/total"
                                Board={npartyBoard}
                            ></MainTable>
                        </Box>
                    </Box>
                </Paper>
            </Paper>
        </ThemeProvider>
    );
}

export default MainPage;
