import {
    createTheme,
    CssBaseline,
    ThemeProvider,
    Typography,
} from '@mui/material';
import * as React from 'react';
import MenuBarMovie from '../../components/menubar/MenuBarMovie';

function FindMovie() {
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
            <MenuBarMovie />

            <Typography
                sx={{
                    fontWeight: '500',
                    fontSize: '1.3125rem',
                    height: '1.5625rem',
                    border: '1px solid red',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    ml: '7rem',
                    mt: '7rem',
                }}
            >
                '퀸카로 살아남는 법' 검색 결과
            </Typography>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default FindMovie;
