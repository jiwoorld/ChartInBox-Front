import {
    createTheme,
    CssBaseline,
    Grid,
    Paper,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import ScrapMovies from '../../components/scrap/ScrapMovies';
import MenuBar from '../../components/menubar/MenuBar';

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
    const [moives, setMovies] = React.useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
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
                        justifyContent: 'space-between',
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
                        스크랩한 영화
                    </Typography>
                    {
                        <Box
                            sx={
                                {
                                    //height: '64.6875rem',
                                }
                            }
                        >
                            <Grid
                                container
                                spacing={3}
                                sx={{
                                    display: 'flex',
                                    justifyItems: 'center',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                {moives.map(movie => (
                                    <Grid key={movie.id} item={5}>
                                        <ScrapMovies></ScrapMovies>
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
