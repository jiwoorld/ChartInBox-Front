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

function Mypost() {
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
                        mt: 10,
                        direction: 'column',
                        align: 'center',
                        justifyContent: 'space-around',
                    }}
                >
                    <Button
                        sx={{
                            align: 'left',
                            fontFamily: 'Pretendard',
                            fontWeight: '600',
                            fontSize: '1.313rem',
                            lineHeight: '25px',
                            color: '#CF5E53',
                            ml: '-35em',
                        }}
                    >
                        내글
                    </Button>
                    <Button
                        href="mycomment"
                        sx={{
                            width: '161px',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '1.313rem',
                            color: 'black',
                        }}
                    >
                        {' '}
                        내댓글{' '}
                    </Button>
                </Box>
                <Box
                    sx={{
                        align: 'center',
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            borderTopColor: 'black',
                            mx: 38,
                            height: '2.5em',
                            mt: 4,
                            align: 'center',
                            borderTop: 1,
                        }}
                    >
                        제목
                    </Box>
                    <Box
                        sx={{
                            bgcolor: 'background.paper',

                            mt: 0,
                            height: '2.5em',
                            mx: 38,
                            align: 'center',
                            borderTop: 1,
                            borderBotton: 1,
                            borderTopColor: 'grey.500',
                            borderBottomColor: 'grey.500',
                        }}
                    >
                        게시글이 들어갈 칸입니다.
                    </Box>
                    <Box
                        sx={{
                            bgcolor: 'background.paper',

                            mt: 0,
                            mx: 38,
                            height: '2.5em',
                            align: 'center',
                            borderTop: 1,
                            borderBotton: 1,
                            borderTopColor: 'grey.500',
                            borderBottomColor: 'grey.500',
                        }}
                    >
                        게시글이 들어갈 칸입니다.
                    </Box>
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            mt: 0,
                            mx: 38,
                            height: '2.5em',
                            align: 'center',
                            borderTop: 1,
                            borderBotton: 1,
                            borderTopColor: 'grey.500',
                            borderBottomColor: 'grey.500',
                        }}
                    >
                        게시글이 들어갈 칸입니다.
                    </Box>
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            mt: 0,
                            height: '2.5em',
                            mx: 38,
                            align: 'center',
                            borderTop: 1,
                            borderBotton: 1,
                            borderTopColor: 'grey.500',
                            borderBottomColor: 'grey.500',
                        }}
                    >
                        게시글이 들어갈 칸입니다.
                    </Box>
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            mt: 0,
                            height: '2.5em',
                            mx: 38,
                            align: 'center',
                            borderTop: 1,
                            borderBotton: 1,
                            borderTopColor: 'grey.500',
                            borderBottomColor: 'grey.500',
                        }}
                    >
                        게시글이 들어갈 칸입니다.
                    </Box>
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            mt: 0,
                            height: '2.5em',
                            mx: 38,
                            align: 'center',
                            borderTop: 1,
                            borderBotton: 1,
                            borderTopColor: 'grey.500',
                            borderBottomColor: 'grey.500',
                        }}
                    >
                        게시글이 들어갈 칸입니다.
                    </Box>
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            mt: 0,
                            height: '2.5em',
                            mx: 38,
                            align: 'center',
                            borderTop: 1,
                            borderBotton: 1,
                            borderTopColor: 'grey.500',
                            borderBottomColor: 'grey.500',
                        }}
                    ></Box>
                </Box>

                <Button
                    size="medium"
                    sx={{
                        color: 'black',
                    }}
                >
                    삭제하기
                </Button>
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
            </Box>
        </ThemeProvider>
    );
}
