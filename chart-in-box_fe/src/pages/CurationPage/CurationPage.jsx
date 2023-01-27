import {
    Box,
    Button,
    createTheme,
    CssBaseline,
    Grid,
    Paper,
    ThemeProvider,
    Typography,
} from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CurationMovie from '../../components/curationpage/CurationMovie';
import CurationPageMovie from '../../components/curationpage/CurationPageMoive';
import MenuBarMovie from '../../components/menubar/MenuBarMovie';

function CurationPage({ isLogin, setIsLogin }) {
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
    const navigate = useNavigate();
    const handlePage = () => {
        navigate('/');
    };
    const [allData, setAllData] = React.useState({});
    const curation = useParams();
    const url = curation.id;
    React.useEffect(() => {
        axios
            .get(`http://localhost:8080/curation/${url}`)
            // .get('/dummydata/curationdata.json')
            .then(function (response) {
                setAllData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [url]);

    let curationMovie = allData?.curationMovie ?? [];
    let curationInfo = allData?.curationInfo ?? {};
    return (
        <ThemeProvider theme={theme}>
            <MenuBarMovie isLogin={isLogin} setIsLogin={setIsLogin} />
            <Box
                sx={{
                    width: '100vw',
                    height: '12.125rem',
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${curationInfo.curationPoster})`,
                    display: 'flex',
                    backgroundSize: 'cover',
                    alignItems: 'flex-end',
                }}
            >
                <Box
                    sx={{
                        width: '36.1875rem',
                        height: '3.9375rem',
                        ml: '6.87rem',
                        mb: '2rem',
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
                        {curationInfo.curationTitle}
                    </Typography>
                    <Typography
                        sx={{
                            height: '1.25rem',
                            fontSize: '1.06rem',
                            fontWeight: '300',
                            textAlign: 'left',
                        }}
                    >
                        {curationInfo.curationText}
                    </Typography>
                </Box>
            </Box>
            <Paper
                sx={{
                    width: '100vw',
                    height: '50.3125rem',
                    backgroundColor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
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
                        {curationMovie.map(item => (
                            <Grid key={item.id} item={5}>
                                <CurationMovie item={item}></CurationMovie>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Button
                    onClick={handlePage}
                    sx={{
                        mr: 180,
                        position: 'fixed',
                        top: '50rem',
                    }}
                >
                    <img
                        src="../../image/curationButton.png"
                        alt="뒤로가기"
                    ></img>
                </Button>
                <CssBaseline />
            </Paper>
        </ThemeProvider>
    );
}
export default CurationPage;
