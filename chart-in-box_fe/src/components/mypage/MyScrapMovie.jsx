import { ThemeProvider, Typography } from '@mui/material';
import { Box, createTheme } from '@mui/system';
import * as React from 'react';
import mypagedata from '../../testdata/mypagedata.json';

function MyScrapMovie({ data }) {
    const theme = createTheme({
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {data &&
                    data.map(item => (
                        <Box
                            key={item.mvId}
                            sx={{
                                m: 4,
                            }}
                        >
                            <img src={item.mvPoster}></img>
                            <Typography
                                key={item.mvId}
                                sx={{
                                    pt: 1,
                                    '&:hover,&.Mui-focusVisible': {
                                        textDecoration: 'underline',
                                    },
                                    color: 'white',
                                }}
                            >
                                {item.mvTitle}
                            </Typography>
                        </Box>
                    ))}
            </Box>
        </ThemeProvider>
    );
}
export default MyScrapMovie;
