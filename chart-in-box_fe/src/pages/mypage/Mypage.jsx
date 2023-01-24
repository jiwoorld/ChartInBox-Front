import * as React from 'react';
//import CssBaseline from "@material-ui/core/CssBaseline";
//import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
/*import CameraIcon from '@mui/icons-material/PhotoCamera';*/
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBar from '../../components/menubar/MenuBar';
import { Paper } from '@mui/material';
import MyPageTable from '../../components/mypage/MyPageTable';
import MyScrapMovie from '../../components/mypage/MyScrapMovie';

function Mypage() {
    const theme = createTheme({
        // palette: {
        //     primary: {
        //         main: '#fff',
        //     },
        //     secondary: {
        //         main: '#CF5E53',
        //     },
        //     third: {
        //         main: '#001F28',
        //     },
        //     background: {
        //         default: '#001F28',
        //     },
        //     text: {
        //         primary: '#fff',
        //     },
        // },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    const [moives, setMovies] = React.useState([1, 2, 3, 4, 5]);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar></MenuBar>
            <main>
                <Container
                    sx={{
                        bgcolor: 'background.paper',
                        px: 32,
                        pb: 5,
                        mt: 10,
                        direction: 'column',
                        width: '70rem',
                        borderBottomColor: '#757575',
                        align: 'center',
                        justifyContent: 'space-around',
                    }}
                >
                    <Button
                        sx={{
                            align: 'left',
                            width: '8.313rem',
                            height: '2.063rem',
                            fontFamily: 'Pretendard',
                            fontWeight: '400',
                            fontSize: '1.313rem',
                            lineHeight: '25px',
                            color: 'text.primary',
                            ml: '-30em',
                        }}
                    >
                        내 프로필
                    </Button>
                    <Button
                        href="/my-page/edit"
                        sx={{
                            height: '1.375rem',
                            width: '8.303rem',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '1.125rem',
                            color: '#757575',
                        }}
                    >
                        {' '}
                        개인정보 수정{' '}
                    </Button>

                    <Grid container spacing={0.5}>
                        <Grid item xs={12} sm={6}>
                            <Box
                                sx={{
                                    ml: '7em',
                                    mt: '3em',
                                }}
                            >
                                <Typography
                                    gutterBottom
                                    fontSize="1.125rem"
                                    fontWeight="400"
                                    textAlign="left"
                                    color="#757575"
                                >
                                    닉네임
                                </Typography>
                                <Typography
                                    textAlign="left"
                                    fontSize="1.5rem"
                                    fontWeight="600"
                                >
                                    잇타2피
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ ml: '0em', mt: '3em' }}>
                                <Typography
                                    gutterBottom
                                    fontSize="1.125rem"
                                    fontWeight="400"
                                    textAlign="left"
                                    color="#757575"
                                >
                                    이메일
                                </Typography>
                                <Typography
                                    textAlign="left"
                                    fontSize="1.5rem"
                                    fontWeight="600"
                                >
                                    chartinbox@gmail.com
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            height: '1rem',
                            width: '60rem',
                            borderColor: 'black',
                            align: 'center',
                            borderBottom: 1,
                            display: 'flex',
                            mt: 5,
                            ml: 13,
                            borderBottom: '1px solid #757575',
                        }}
                    ></Box>
                </Container>

                <Container sx={{ py: 5, leftMargin: '300%' }} paddingLeft="20%">
                    <Box sx={{ p: '10px', ml: '13%' }}>
                        <Grid container spacing={4} sx={{}}>
                            <Grid
                                card
                                xs={5}
                                sx={{
                                    border: 1,
                                    borderColor: 'white',
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    {
                                        <Box sx={{ paddingBottom: '30px' }}>
                                            <Typography
                                                gutterBottom
                                                textAlign="left"
                                                fontSize="1.313rem"
                                                fontWeight="400"
                                            >
                                                내 글 〉
                                            </Typography>
                                        </Box>
                                    }
                                    <MyPageTable tableName="자유게시판"></MyPageTable>
                                </CardContent>
                            </Grid>
                            <Grid card xs={1}></Grid>
                            <Grid
                                card
                                xs={5}
                                sx={{
                                    border: 1,
                                    borderColor: 'white',
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Box sx={{ paddingBottom: '30px' }}>
                                        <Typography
                                            gutterBottom
                                            textAlign="left"
                                            fontSize="1.313rem"
                                            fontWeight="400"
                                        >
                                            내 댓글 〉
                                        </Typography>
                                    </Box>
                                    <MyPageTable tableName="자유게시판"></MyPageTable>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </main>
            <Box
                sx={{
                    height: '30rem',
                    border: '1px solid black',
                    backgroundColor: '#1A1A1A',
                }}
            >
                <Container>
                    <Box
                        sx={{
                            ml: -4,
                            mt: 5,
                            width: '70rem',
                        }}
                    >
                        <Button
                            href="/changeinfo"
                            sx={{
                                height: '1.375rem',
                                width: '8.303rem',
                                mr: 107,
                                fontFamily: 'Pretendard',
                                textAlign: 'left',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '1.125rem',
                                color: 'white',
                            }}
                        >
                            {' '}
                            스크랩한 영화{' '}
                        </Button>
                        <Button
                            href="/ScrapMovie"
                            sx={{
                                ml: -3,
                                fontWeight: '500',
                                fontSize: '1.063rem',
                                textAlign: 'right',
                                color: '#F5F5F5',
                            }}
                        >
                            전체보기
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            ml: 3,
                            width: '66.4375rem',
                            height: '37.625rem',
                            display: 'flex',
                            align: 'center',
                            justifyContent: 'space-between',
                            mt: 1,
                        }}
                    >
                        <Grid container spacing={2}>
                            {moives.map(movie => (
                                <Grid key={movie.id} item={5}>
                                    <MyScrapMovie movie={movie}></MyScrapMovie>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}
export default Mypage;
