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

function MyInformation() {
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
            <Box>
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
            </Box>
        </ThemeProvider>
    );
}
export default MyInformation;
