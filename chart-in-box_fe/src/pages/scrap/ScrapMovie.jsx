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
import CurationPageMovie from '../../components/curationpage/CurationPageMoive';

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
                        〈 스크랩한 영화
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
                                        <Box>
                                            <CurationPageMovie></CurationPageMovie>
                                            <Button
                                                sx={{
                                                    backgroundColor: '#E0E0E0',
                                                    fontWeight: '500',
                                                    fontSize: '0.75rem',
                                                    mt: 1,
                                                    color: '#1A1A1A',
                                                    width: '3.906rem',
                                                    height: '1.563rem',
                                                    borderRadius: '0.25rem',
                                                    opacity: '70%',
                                                }}
                                            >
                                                취소하기
                                            </Button>
                                            {/* <Box
                                                sx={{
                                                    m: 1,
                                                }}
                                            >
                                                <Button> 버튼 구현 예정</Button>
                                            </Box> */}
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
