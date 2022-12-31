import {
    createTheme,
    CssBaseline,
    Paper,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
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

    return (
        <ThemeProvider theme={theme}>
            <MenuBarMovie />
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
                            }}
                        >
                            <Box
                                sx={{
                                    width: '10vw',
                                    height: '17.5625rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    src="../../image/ott_chart.png"
                                    width="100%"
                                    alt="ott_chart"
                                ></img>
                            </Box>
                            <Box sx={{ width: '88vw' }}>
                                <MainCarousel></MainCarousel>
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
                }}
            >
                <Box
                    sx={{
                        width: '76rem',
                        height: '31.9375rem',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid red',
                    }}
                >
                    <Typography>커뮤니티</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '76rem',
                            height: '30.375rem',
                            border: '1px solid blue',
                        }}
                    >
                        <MainTable></MainTable>
                        <MainTable></MainTable>
                        <MainTable></MainTable>
                    </Box>
                </Box>
            </Paper>
        </ThemeProvider>
    );
}

export default MainPage;
