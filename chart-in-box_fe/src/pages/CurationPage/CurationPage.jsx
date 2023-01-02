import {
    Box,
    createTheme,
    CssBaseline,
    Grid,
    Paper,
    ThemeProvider,
    Typography,
} from '@mui/material';
import * as React from 'react';
import CurationPageMovie from '../../components/curationpage/CurationPageMoive';
import MenuBarMovie from '../../components/menubar/MenuBarMovie';

function CurationPage() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#333D41',
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
            },
            box: {
                default: '#1A1A1A',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    const [moives, setMovies] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [likes, setLikes] = React.useState([]);

    return (
        <ThemeProvider theme={theme}>
            <MenuBarMovie></MenuBarMovie>
            <Box
                sx={{
                    width: '100vw',
                    height: '12.125rem',
                    backgroundImage: 'url(../../image/curationExample.png)',
                    display: 'flex',
                    alignItems: 'flex-end',
                }}
            >
                <Box
                    sx={{
                        width: '36.1875rem',
                        height: '3.9375rem',
                        ml: '6.87rem',
                        mb: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                    }}
                >
                    <Typography
                        sx={{
                            height: '1.8125rem',
                            fontSize: '1.5rem',
                            fontWeight: '500',
                        }}
                    >
                        캐롤 들으면서 보는 크리스마스 영화
                    </Typography>
                    <Typography
                        sx={{
                            height: '1.25rem',
                            fontSize: '1.06rem',
                            fontWeight: '300',
                        }}
                    >
                        이번 한 해동안의 당신은 어땠나요? 달달한 영화들과 함께
                        행복한 연말이 되길 바랄게요.
                    </Typography>
                </Box>
            </Box>
            <Paper
                sx={{
                    width: '100vw',
                    height: '50.3125rem',
                    backgroundColor: 'background.default',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '66.4375rem',
                        height: '37.625rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Grid container spacing={2}>
                        {moives.map(movie => (
                            <Grid key={movie.id} item={5}>
                                <CurationPageMovie></CurationPageMovie>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <CssBaseline />
            </Paper>
        </ThemeProvider>
    );
}
export default CurationPage;
