import { ThemeProvider, Typography } from '@mui/material';
import { Box, createTheme } from '@mui/system';
import * as React from 'react';

function MainMovie({ item = [] }) {
    const theme = createTheme({
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });

    let age = '';
    let ageColor = '';
    if (typeof item.movieAge === 'string') {
        if (item.movieAge.length === 5) {
            age = 'All';
            ageColor = '#299B2D';
        } else {
            age = item.movieAge.slice(0, -4);
            if (age === '19') {
                ageColor = '#CF5E53';
            } else {
                ageColor = '#F2CB05';
            }
        }
    } else {
    }
    return (
        <ThemeProvider theme={{ theme }}>
            <Box
                sx={{
                    width: '16.3125rem',
                    height: '13.75rem',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        width: '16.3125rem',
                        height: '10.5rem',
                        backgroundImage: `url(${item.moviePoster})`,
                        borderRadius: '0.75rem',
                        backgroundSize: '261px 168px',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '0.625rem',
                            width: '2.5rem',
                            height: '2.875rem',
                            backgroundColor: `${ageColor}`,
                            borderRadius: '0px 0px 20px 20px',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontStyle: 'italic',
                                fontWeight: '800',
                                fontSize: '1.375rem',
                                mt: 0.7,
                                mr: 0.3,
                            }}
                        >
                            {age}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        height: '2.5625rem',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <a href={`/movie-info/${item.movieId}`}>
                        <Typography
                            sx={{
                                fontSize: '1rem',
                                fontWeight: '600',
                                color: '#ffff',
                                '&:hover,&.Mui-focusVisible': {
                                    textDecoration: 'underline',
                                },
                            }}
                            align="left"
                        >
                            {item.movieTitle}
                        </Typography>
                    </a>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
export default MainMovie;
