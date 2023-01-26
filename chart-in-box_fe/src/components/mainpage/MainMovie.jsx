import { ThemeProvider, Typography } from '@mui/material';
import { Box, createTheme } from '@mui/system';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function MainMovie(props) {
    const theme = createTheme({
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    const navigate = useNavigate();
    const handlePage = () => {
        navigate('/curation');
    };
    const isDisplay = props.isDisplay;
    const title = props.title;

    return (
        <ThemeProvider theme={{ theme }}>
            <Box
                sx={{
                    width: '16.3125rem',
                    height: '13.75rem',
                    position: 'relative',
                }}
                onClick={handlePage}
            >
                <Box
                    sx={{
                        width: '16.3125rem',
                        height: '10.5rem',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '0.625rem',
                            width: '2.5rem',
                            height: '2.875rem',
                            backgroundColor: '#F2CB05',
                            borderRadius: '0px 0px 20px 20px',
                            display: isDisplay,
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
                            15
                        </Typography>
                    </Box>
                    <img
                        src="../../image/example.png"
                        width="100%"
                        alt="영화 이미지"
                        class="mainMovieImg"
                    ></img>
                </Box>
                <Box
                    sx={{
                        height: '2.5625rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '1rem',
                            fontWeight: '600',
                            '&:hover,&.Mui-focusVisible': {
                                textDecoration: 'underline',
                            },
                        }}
                        align="left"
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
export default MainMovie;
