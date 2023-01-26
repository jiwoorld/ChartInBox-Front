import { ThemeProvider, Typography } from '@mui/material';
import { Box, createTheme } from '@mui/system';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import MainMovie from './MainMovie';

function MainCuration({ curationList, curationInfo }) {
    const theme = createTheme({
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    const navigate = useNavigate();
    const handlePage = () => {
        navigate(`${curationInfo.curationLink}`);
    };

    return (
        <ThemeProvider theme={{ theme }}>
            <Box
                sx={{
                    width: '76.125rem',
                    height: '13.75rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '17.875rem',
                        height: '10rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        sx={{
                            width: '5.0625rem',
                            height: '1.1875rem',
                            fontWeight: '400',
                            fontSize: '1rem',
                        }}
                    >
                        이건 어때요?
                    </Typography>
                    <Box
                        sx={{
                            width: '17.875rem',
                            height: '4.8125rem',
                        }}
                    >
                        <Typography
                            sx={{
                                width: '17rem',
                                height: '3.375rem',
                                fontSize: '1.3125rem',
                                lineHeight: '1.5rem',
                                fontWeight: 500,
                            }}
                            align="left"
                        >
                            {curationInfo.curationTitle}
                            <Typography
                                sx={{
                                    mt: 1,
                                    width: '2.9rem',
                                    height: '0.875rem',
                                    fontSize: '0.7rem',
                                    fontWeight: 300,
                                    '&:hover,&.Mui-focusVisible': {
                                        textDecoration: 'underline',
                                        fontSize: '0.8rem',
                                    },
                                }}
                                onClick={handlePage}
                            >
                                전체보기
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '54.0625rem',
                        height: '13.75rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    {curationList.map(item => (
                        <MainMovie item={item}></MainMovie>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
}
export default MainCuration;
