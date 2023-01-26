import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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

    const [allData, setAllData] = React.useState({});
    useEffect(() => {
        axios
            .get('/dummydata/freeboarddata.json')
            .then(function (response) {
                setAllData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
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
                            {allData.userNickname}님, 오늘도 좋은 하루 되세요 :)
                        </Typography>
                        <Button
                            size="small"
                            href="../my-page/edit"
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
                            href="../my-page/post"
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
                            href="../my-page/comment"
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
