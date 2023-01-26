import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function MovieInformation() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#333D41',
            },
            secondary: {
                main: '#757575',
            },
            line: {
                main: '#C2C2C2',
            },
            text: {
                primary: '#1A1A1A',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '59.5rem',
                    height: '6.688rem',
                    backgroundColor: '#F5F5F5',
                    direction: 'row',
                    alignItems: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        width: '3.375rem',
                        height: '4.497rem',
                        backgroundColor: 'black',
                        m: 'auto',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            width: '1.375rem',
                            height: '1.497rem',
                            backgroundColor: 'blue',
                            m: 'auto',
                        }}
                    ></Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
export default MovieInformation;
