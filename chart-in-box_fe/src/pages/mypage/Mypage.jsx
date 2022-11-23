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

function Mypage() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                my page
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

/*const useStyles = makeStyles({

})*/
const cards = [1, 2];

const theme = createTheme();

export default function Album() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar></MenuBar>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        px: 32,
                        pb: 10,
                        mt: 10,
                        direction: 'column',
                        align: 'center',
                        justifyContent: 'space-around',
                        borderBottom: 1,
                        borderBottomColor: 'grey.500',
                    }}
                >
                    {/* <Container maxWidth="550px"> */}
                    <Button
                        sx={{
                            align: 'left',
                            fontFamily: 'Pretendard',
                            fontWeight: '600',
                            fontSize: '21px',
                            lineHeight: '25px',
                            color: 'text.primary',
                            ml: '-30em',
                        }}
                    >
                        내프로필
                    </Button>
                    <Button
                        href="/changeinfo"
                        sx={{
                            width: '161px',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '1.125rem',
                            color: '#757575',
                        }}
                    >
                        {' '}
                        개인정보수정{' '}
                    </Button>
                    <Grid container spacing={0.5}>
                        <Grid item xs={12} sm={6}>
                            <Box
                                sx={{
                                    ml: '5em',
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
                            <Box sx={{ ml: '5em', mt: '5em' }}>
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
                </Box>

                <Container
                    sx={{ py: 10, leftMargin: '200%' }}
                    paddingLeft="20%"
                >
                    <Box sx={{ p: '10px', ml: '10%' }}>
                        <Grid container spacing={4} sx={{ ml: '2em' }}>
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
                                            내 글 >
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: 'grey.500',
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
                                            borderColor: 'grey.500',
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
                                            borderColor: 'grey.500',
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
                                            borderColor: 'grey.500',
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
                                        sx={{
                                            color: '#CF5E53',
                                        }}
                                    >
                                        See more
                                    </Button>
                                </CardActions>
                            </Grid>

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
                                            내 글 >
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: 'grey.500',
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
                                            borderColor: 'grey.500',
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
                                            borderColor: 'grey.500',
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
                                            borderColor: 'grey.500',
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
                {/*                <Copyright />*/}
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}
/*export default Mypage;*/
