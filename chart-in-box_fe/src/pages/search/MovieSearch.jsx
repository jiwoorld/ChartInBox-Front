import {
    createTheme,
    CssBaseline,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import MenuBarMovie from '../../components/menubar/MenuBarMovie';
import Selected from '../../components/moviesearch/Selected';

function MovieSearch() {
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

    return (
        <ThemeProvider theme={theme}>
            <MenuBarMovie></MenuBarMovie>
            <Box
                sx={{
                    width: '100vw',
                    height: '14.625rem',
                    border: '1px solid red',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography
                    sx={{
                        fontWeight: '600',
                        fontSize: '1.5rem',
                        ml: '8.625rem',
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
                    <Selected></Selected>
                    <Selected></Selected>
                    <Selected></Selected>
                    <Selected></Selected>
                </Box>
            </Box>

            <CssBaseline />
        </ThemeProvider>
    );
}

export default MovieSearch;
