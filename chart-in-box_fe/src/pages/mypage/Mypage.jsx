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
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar></MenuBar>
            <main>
                <Container
                    sx={{
                        bgcolor: 'background.paper',
                        px: 32,
                        pb: 10,
                        mt: 10,
                        direction: 'column',
                        width: '70rem',
                        borderBottom: 1,
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
                        href="/changeinfo"
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
                                    mt: '5em',
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
                            <Box sx={{ ml: '0em', mt: '5em' }}>
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
                </Container>

                <Container
                    sx={{ py: 10, leftMargin: '300%' }}
                    paddingLeft="20%"
                >
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
                                    <Box sx={{ paddingBottom: '30px' }}>
                                        <Typography
                                            gutterBottom
                                            textAlign="left"
                                            fontSize="1.313rem"
                                            fontWeight="400"
                                        >
                                            내 글
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: '#E0E0E0',
                                        }}
                                    >
                                        <Typography
                                            textAlign="left"
                                            margin="20px"
                                        >
                                            각 내용이 들어갈 칸!
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: '#E0E0E0',
                                        }}
                                    >
                                        <Typography
                                            textAlign="left"
                                            margin="20px"
                                        >
                                            각 내용이 들어갈 칸!
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: '#E0E0E0',
                                        }}
                                    >
                                        <Typography
                                            margin="20px"
                                            textAlign="left"
                                        >
                                            각 내용이 들어갈 칸!
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: '#E0E0E0',
                                        }}
                                    >
                                        <Typography
                                            margin="20px"
                                            textAlign="left"
                                        >
                                            각 내용이 들어갈 칸!
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        href="/mypost"
                                        size="medium"
                                        sx={{
                                            color: '#CF5E53',
                                        }}
                                    >
                                        See more
                                    </Button>
                                </CardActions>
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
                                            내 댓글
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: '#E0E0E0',
                                        }}
                                    >
                                        <Typography
                                            textAlign="left"
                                            margin="20px"
                                        >
                                            각 내용이 들어갈 칸!
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: '#E0E0E0',
                                        }}
                                    >
                                        <Typography
                                            textAlign="left"
                                            margin="20px"
                                        >
                                            각 내용이 들어갈 칸!
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: '#E0E0E0',
                                        }}
                                    >
                                        <Typography
                                            margin="20px"
                                            textAlign="left"
                                        >
                                            각 내용이 들어갈 칸!
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: '#E0E0E0',
                                        }}
                                    >
                                        <Typography
                                            margin="20px"
                                            textAlign="left"
                                        >
                                            각 내용이 들어갈 칸!
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="medium"
                                        href="/mycomment"
                                        sx={{
                                            color: '#CF5E53',
                                        }}
                                    >
                                        See more
                                    </Button>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </main>
            <Box
                sx={{
                    height: '30rem',
                    width: '100%',
                    border: '1px solid black',
                    backgroundColor: '#1A1A1A',
                }}
            >
                <Box
                    sx={{
                        mt: 4,
                    }}
                >
                    <Button
                        href="/changeinfo"
                        sx={{
                            height: '1.375rem',
                            width: '8.303rem',
                            mr: 100,
                            fontFamily: 'Pretendard',
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
                        sx={{
                            fontWeight: '500',
                            fontSize: '1.063rem',
                            color: '#F5F5F5',
                        }}
                    >
                        전체보기
                    </Button>
                </Box>
                <Container
                    sx={{
                        height: '20rem',
                        width: '77%',
                        border: '1px solid black',

                        display: 'flex',
                    }}
                >
                    <Box
                        sx={{
                            mt: 3,
                            mx: 2,
                            height: '17rem',
                            width: '12rem',
                            border: '1px solid black',
                        }}
                    >
                        <Box
                            sx={{
                                width: '12rem',
                                height: '80%',
                                marginRight: '0.75rem',
                                border: '1px solid black',
                            }}
                        >
                            이미지 칸
                        </Box>
                        <Typography textAlign="center" color="white">
                            라스트 크리스마스
                        </Typography>
                        <Typography textAlign="center" color="#D9D9D9">
                            평점 4.2/5
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            mt: 3,
                            mx: 2,
                            height: '17rem',
                            width: '12rem',
                            border: '1px solid black',
                        }}
                    >
                        <Box
                            sx={{
                                width: '12rem',
                                height: '80%',
                                marginRight: '0.75rem',
                                border: '1px solid black',
                            }}
                        >
                            이미지 칸
                        </Box>
                        <Typography textAlign="center" color="white">
                            이터널 선샤인
                        </Typography>
                        <Typography textAlign="center" color="#D9D9D9">
                            평점 4.2/5
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            mt: 3,
                            mx: 2,
                            height: '17rem',
                            width: '12rem',
                            border: '1px solid black',
                        }}
                    >
                        <Box
                            sx={{
                                width: '12rem',
                                height: '80%',
                                marginRight: '0.75rem',
                                border: '1px solid black',
                            }}
                        >
                            이미지 칸
                        </Box>
                        <Typography textAlign="center" color="white">
                            러브 액츄얼리
                        </Typography>
                        <Typography textAlign="center" color="#D9D9D9">
                            평점 4.2/5
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            mt: 3,
                            mx: 2,
                            height: '17rem',
                            width: '12rem',
                            border: '1px solid black',
                        }}
                    >
                        <Box
                            sx={{
                                width: '12rem',
                                height: '80%',
                                marginRight: '0.75rem',
                                border: '1px solid black',
                            }}
                        >
                            이미지 칸
                        </Box>
                        <Typography textAlign="center" color="white">
                            퀸카로 살아남는 법
                        </Typography>
                        <Typography textAlign="center" color="#D9D9D9">
                            평점 4.2/5
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            mt: 3,
                            mx: 2,
                            height: '17rem',
                            width: '12rem',
                            border: '1px solid black',
                        }}
                    >
                        <Box
                            sx={{
                                width: '12rem',
                                height: '80%',
                                marginRight: '0.75rem',
                                border: '1px solid black',
                            }}
                        >
                            이미지 칸
                        </Box>
                        <Typography textAlign="center" color="white">
                            라라랜드
                        </Typography>
                        <Typography textAlign="center" color="#D9D9D9">
                            평점 4.2/5
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    푸터가 들어갈 칸입니다
                </Typography>
            </Box>
        </ThemeProvider>
    );
}
export default Mypage;
