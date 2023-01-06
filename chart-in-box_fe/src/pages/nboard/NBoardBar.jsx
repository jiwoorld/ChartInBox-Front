import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function NBoardBar() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#333D41',
                darker: '#1A1A1A',
            },
            secondary: {
                main: '#CF5E53',
            },
            third: {
                main: '#D9D9D9',
            },
            text: {
                default: '#fff',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    }); // 색 지정

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    height: '60px',
                    width: '100%',
                    alignItems: 'left',
                    justifyContent: 'space-around',
                    borderTop: '0.063rem solid #D9D9D9',
                    borderBottom: '0.063rem solid #D9D9D9',
                }}
            >
                <Box
                    sx={{
                        ml: '8rem',
                        display: 'flex',
                        width: '55rem',
                        height: '60px',
                        justifyContent: 'space-around',
                    }}
                >
                    <Button
                        href="../totalnboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '1.125rem',
                            color: 'primary.main',
                        }}
                    >
                        {' '}
                        전체글{' '}
                    </Button>
                    <Button
                        href="../netflexnboard"
                        sx={{
                            width: '31.25rem',
                            mr: '1rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            //fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '1.125rem',
                            color: 'secondary.main',
                        }}
                    >
                        {' '}
                        넷플릭스{' '}
                    </Button>
                    <Button
                        href="../disneynboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '1.125rem',
                            color: 'secondary.main',
                        }}
                    >
                        {' '}
                        왓차{' '}
                    </Button>
                    <Button
                        href="../tivingnboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            color: 'secondary.main',
                            fontSize: '1.125rem',
                        }}
                    >
                        {' '}
                        티빙{' '}
                    </Button>
                    <Button
                        href="../wavenboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            color: 'secondary.main',
                            fontSize: '1.125rem',
                        }}
                    >
                        {' '}
                        웨이브{' '}
                    </Button>
                    <Button
                        href="../watchanboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            color: 'secondary.main',
                            fontSize: '1.125rem',
                        }}
                    >
                        {' '}
                        디즈니{' '}
                    </Button>
                    <Button
                        href="../etcnboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            color: 'secondary.main',
                            fontSize: '1.125rem',
                        }}
                    >
                        {' '}
                        기타{' '}
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default NBoardBar;
