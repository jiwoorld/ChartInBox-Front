import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function MovieInformation(props) {
    const [info, setInfo] = React.useState({});
    const url = movieId.id;
    const movieId = useParams();

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
    useEffect(() => {
        axios
            .get('/dummydata/showingboarddata.json')
            .then(function (response) {
                setInfo(response.data.movieInfo);
                console.log(info.mvTitle);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [url]);
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '59.5rem',
                    height: '6.688rem',
                    backgroundColor: '#F5F5F5',
                    direction: 'row',
                    alignItems: 'space-between',
                    display: 'flex',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        width: '3.375rem',
                        height: '4.497rem',
                        backgroundColor: 'black',
                        mt: 2,
                        ml: 3,
                    }}
                ></Box>
                <Box
                    sx={{
                        width: '50%',
                        display: 'flex',
                        mt: 3.5,
                        flexDirection: 'column',
                        alignItems: 'column',
                        textAlign: 'left',
                        pl: 3,
                    }}
                >
                    <Box sx={{ fontSize: '0.875rem', fontWeight: 600, pb: 1 }}>
                        {info.mvTitle}
                    </Box>
                    <Box sx={{ fontSize: '0.625rem', fontWeight: 400 }}>
                        뮤지컬 | 144분 | 12세 | 34
                    </Box>
                </Box>
                <Button
                    align="left"
                    variant="contained"
                    endIcon={<ThumbUpAltIcon />}
                    sx={{
                        mr: -10,
                        backgroundColor: '#F2CB05',
                        height: '2rem',
                        display: 'flex',
                        margin: 'auto',
                        width: '9.375rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.65rem',
                    }}
                >
                    이 영화를 추천합니다
                </Button>
            </Box>
        </ThemeProvider>
    );
}
export default MovieInformation;
