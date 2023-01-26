import { ThemeProvider, Typography } from '@mui/material';
import { Box, createTheme } from '@mui/system';
import * as React from 'react';

function CurationPageMovie({ mvTitle, mvPoster, mvId }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#fff',
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
                default: '#F2CB05',
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
                    width: '12.125rem',
                    height: '266px',
                    background: `linear-gradient(180deg, rgba(217, 217, 217, 0) 41.67%, rgba(0, 0, 0, 0.4) 67.19%, rgba(0, 0, 0, 0.8) 100%), url(${mvPoster})`,
                    mr: 0.5,
                    mt: 1,
                    borderRadius: '0.75rem',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'flex-start',
                        mr: '1rem',
                    }}
                >
                    <a href={`/movie-info/${mvId}`}>
                        <Typography
                            sx={{
                                '&:hover,&.Mui-focusVisible': {
                                    textDecoration: 'underline',
                                },
                                color: 'primary.main',
                                mb: '1rem',
                                textAlign: 'left',
                            }}
                        >
                            {mvTitle}
                        </Typography>
                    </a>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default CurationPageMovie;
