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
            <AppBar position="relative">
                <Toolbar>
                    {/* <CameraIcon sx={{ mr: 2 }} />*/}
                    <Typography variant="h6" color="inherit" noWrap>
                        위에 상단바 들어갈 칸 ~.~
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                        paddingLeft: '25%',
                        borderBottom: 1,
                        borderBottomColor: 'grey.500',
                    }}
                >
                    <Container maxWidth="550px">
                        <Typography
                            component="h1"
                            //variant="h2"
                            align="left"
                            height="50px"
                            color="text.primary"
                            fontSize="1.75rem"
                            fontWeight="1500px"
                            maxWidth="200px"
                            gutterBottom
                        >
                            내 프로필
                            <CardActions>
                                <Button size="medium">개인정보수정</Button>
                            </CardActions>
                        </Typography>

                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    fontSize="1rem"
                                    textAlign="left"
                                >
                                    닉네임
                                </Typography>
                                <Typography
                                    textAlign="left"
                                    fontSize="1.75rem"
                                    fontWeight="700"
                                >
                                    잇타2피
                                </Typography>
                            </CardContent>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    fontSize="1rem"
                                    textAlign="left"
                                >
                                    이메일
                                </Typography>
                                <Typography
                                    textAlign="left"
                                    fontSize="1.75rem"
                                    fontWeight="700"
                                >
                                    chartinbox@gmail.com
                                </Typography>
                            </CardContent>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 10 }} paddingLeft="20%">
                    <Box sx={{ padding: '10px', leftMargin: '30px' }}>
                        <Grid container spacing={2}>
                            <Grid
                                card
                                xs={3.5}
                                sx={{
                                    border: 1,
                                    margin: '1em',
                                    borderColor: 'white',
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Box sx={{ paddingBottom: '30px' }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            textAlign="left"
                                            fontSize="1.5rem"
                                            fontWeight="530"
                                        >
                                            내 글
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
                                    <Button size="medium">See more</Button>
                                </CardActions>
                            </Grid>
                            <Grid
                                card
                                xs={3.5}
                                sx={{
                                    border: 1,
                                    margin: '1em',
                                    borderColor: 'white',
                                }}
                            >
                                {/*<card>xs=4</card>*/}
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Box sx={{ paddingBottom: '30px' }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            textAlign="left"
                                        >
                                            내 댓글
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
                                    <Button size="medium">See more</Button>
                                </CardActions>
                            </Grid>
                            <Grid
                                card
                                xs={3.5}
                                sx={{
                                    border: 1,
                                    margin: '1em',
                                    borderColor: 'white',
                                }}
                            >
                                {/*<card>xs=4</card>*/}
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Box sx={{ paddingBottom: '30px' }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            textAlign="left"
                                        >
                                            마음함
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
                                    <Button size="medium">See more</Button>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </main>
            {/* Footer */}
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
