import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
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
import { borderBottom } from '@mui/system';
import BoardTable from './BoardTable';
import MovietalkMenuBar from '../../components/menubar/MovietalkMenuBar';
import MovietalkSubBar from '../../components/menubar/MovietalkSubBar';

const data = {
    totalboard: {
        name: '전체글',
    },
    freeboard: {
        name: '자유',
    },
    reviewboard: {
        name: '리뷰',
    },
    qnaboard: {
        name: 'Q&A',
    },
};

function TotalBoard({ match }) {
    const { boardname } = useParams();
    const board = data[boardname];
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

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar></MenuBar>
            <MovietalkMenuBar></MovietalkMenuBar>
            <main>
                <Container
                    maxWidth="70rem"
                    sx={{
                        ml: '8rem',
                        mt: '1.4rem',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Box sx={{ p: 1 }}>
                        <Box
                            sx={{
                                width: '15.125rem',
                                height: '14rem',
                                border: 0.4,
                                borderColor: 'line.main',
                                mb: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    height: '9rem',
                                    p: '2rem',
                                    borderColor: 'line.main',
                                    borderWidth: '0.031rem',
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: 'black',
                                        fontSize: '0.938rem',
                                        textAlign: 'left',
                                        fontWeight: 600,
                                        mb: '1rem',
                                    }}
                                >
                                    잇타2피님, 오늘도 좋은 하루 되세요 :)
                                    {boardname}은 ({board.name})입니다
                                </Typography>
                                <Button
                                    size="small"
                                    href="../changeinfo"
                                    sx={{
                                        ml: '-2.2rem',
                                        color: '#9E9E9E',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    회원정보 수정
                                </Button>
                                <Button
                                    size="small"
                                    href="../Mypost"
                                    sx={{
                                        color: '#9E9E9E',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    로그아웃
                                </Button>
                            </Box>
                            <Box
                                sx={{
                                    height: '2.5rem',
                                    borderTop: 0.4,
                                    textAlign: 'left',
                                    borderColor: 'line.main',
                                }}
                            >
                                <Button
                                    href="../mypost"
                                    sx={{
                                        color: 'black',
                                        fontWeight: 400,
                                        pl: 2.2,
                                        fontSize: '0.938rem',
                                        textAlign: 'left',
                                    }}
                                >
                                    작성한 글
                                </Button>
                            </Box>
                            <Box
                                sx={{
                                    height: '2.5rem',
                                    textAlign: 'left',
                                    borderTop: 0.4,
                                    borderColor: 'line.main',
                                }}
                            >
                                <Button
                                    href="../mycomment"
                                    sx={{
                                        color: 'black',
                                        fontSize: '0.938rem',
                                        fontWeight: 400,
                                        pl: 2.2,
                                        textAlign: 'left',
                                    }}
                                >
                                    작성한 댓글
                                </Button>
                            </Box>
                        </Box>
                        <Button
                            href="../writing"
                            sx={{
                                width: '15.125rem',
                                fontSize: '0.938rem',
                                fontWeight: 800,
                                backgroundColor: '#EDEDED',
                                Color: 'black',
                                ml: '-1.4rem',
                                mb: '1.5rem',
                            }}
                        >
                            글쓰기
                        </Button>
                        <Box
                            sx={{
                                width: '16.625rem',
                                height: '16.625rem',
                                //border: 2,
                            }}
                        >
                            <MovietalkSubBar></MovietalkSubBar>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '59.5rem',
                            height: '50rem',
                            //border: 2,
                            display: 'flex',
                            p: 1,
                        }}
                    >
                        <BoardTable tableName={board.name}></BoardTable>
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
            </Box>
        </ThemeProvider>
    );
}
export default TotalBoard;
