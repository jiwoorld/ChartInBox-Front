import * as React from 'react';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBar from '../../components/menubar/MenuBar';
import MyScrapMovie from '../../components/mypage/MyScrapMovie';
import MyPostTable from '../../components/mypage/MyPostTable';
import MyCommentTable from '../../components/mypage/MyCommentTable';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

function Mypage() {
    const theme = createTheme({
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    const navigate = useNavigate();
    const [moives, setMovies] = React.useState([1]);
    useEffect(() => {
        axios
            .get('/dummydata/mypagedata.json')
            .then(function (response) {
                setEmail(response.data.userEmail);
                setNickname(response.data.userNickname);
                setBoardlist(response.data.boardList);
                setCommentlist(response.data.commentList);
                setScraplist(response.data.scrapList);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
    const [email, setEmail] = React.useState('');
    const [nickname, setNickname] = React.useState('');
    const [boardlist, setBoardlist] = React.useState('');
    const [commentlist, setCommentlist] = React.useState('');
    const [scraplist, setScraplist] = React.useState('');
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
                        className="my"
                        href="/my-page/edit"
                        sx={{
                            height: '1.375rem',
                            width: '8.303rem',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '1.125rem',
                            color: '#757575',
                            fontColor: '#757575',
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
                                    {nickname}
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
                                    //key={mypagedata.userEmail}
                                    textAlign="left"
                                    fontSize="1.5rem"
                                    fontWeight="600"
                                >
                                    {email}
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
                    <Box sx={{ p: '10px', ml: '13%', mb: -30 }}>
                        <Grid container spacing={4} sx={{}}>
                            <Grid
                                card
                                xs={5}
                                sx={{
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
                                    <MyPostTable
                                        data={boardlist}
                                        tableName="자유게시판"
                                    ></MyPostTable>
                                </CardContent>
                            </Grid>
                            <Grid card xs={1}></Grid>
                            <Grid card xs={5} sx={{}}>
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
                                    <MyCommentTable
                                        data={commentlist}
                                        tableName="자유게시판"
                                    ></MyCommentTable>
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
                            className="movieInfoA"
                            sx={{
                                height: '1.375rem',
                                width: '8.303rem',
                                mr: 107,
                                fontFamily: 'Pretendard',
                                textAlign: 'left',
                                fontWeight: '400',
                                fontSize: '1.125rem',
                                color: 'white',
                            }}
                        >
                            {' '}
                            스크랩한 영화{' '}
                        </Button>
                        <Button
                            className="movieInfoA"
                            href="/my-page/scrap"
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
                    {/* <Box
                        sx={{
                            display: 'flex',
                            width: '1040px',
                            height: '300px',
                        }}
                    > */}
                    <MyScrapMovie data={scraplist}></MyScrapMovie>
                </Container>
            </Box>
            <Footer></Footer>
        </ThemeProvider>
    );
}
export default Mypage;
