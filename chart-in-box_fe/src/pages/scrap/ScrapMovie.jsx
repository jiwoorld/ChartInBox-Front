import {
    Button,
    createTheme,
    CssBaseline,
    Grid,
    Paper,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import MenuBar from '../../components/menubar/MenuBar';
import axios from 'axios';
import { useEffect } from 'react';
import Scrap from '../../components/scrap/Scrap';

function ScrapMovie() {
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
            .get('http://localhost:8080/my-page/scrap')
            // .get('/dummydata/mypagedata.json')
            .then(function (response) {
                console.log(response);
                setScraplist(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
    const [scraplist, setScraplist] = React.useState('');

    return (
        <ThemeProvider theme={theme}>
            <MenuBar></MenuBar>
            <Paper
                sx={{
                    height: '76.25rem',
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '72.325rem',
                        height: '59rem',
                        mt: '5.6875rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                    }}
                >
                    <Typography
                        sx={{
                            width: '10.5rem',
                            height: '1.75rem',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            mb: 8,
                        }}
                    >
                        〈 스크랩한 영화
                    </Typography>
                    {
                        <Box>
                            <Grid
                                container
                                spacing={3}
                                sx={{
                                    display: 'flex',
                                    justifyItems: 'center',
                                    justifyContent: 'flex-start',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                {scraplist &&
                                    scraplist.map(item => (
                                        <Grid key={item.mvId} item={5}>
                                            <Box>
                                                <Scrap
                                                    mvTitle={item.mvTitle}
                                                    mvId={item.mvId}
                                                    mvPoster={item.mvPoster}
                                                ></Scrap>
                                            </Box>
                                        </Grid>
                                    ))}
                            </Grid>
                        </Box>
                    }
                </Box>
            </Paper>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default ScrapMovie;