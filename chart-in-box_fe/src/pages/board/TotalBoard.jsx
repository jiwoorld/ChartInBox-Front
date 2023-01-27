import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBar from '../../components/menubar/MenuBar';
import BoardTable from './BoardTable';
import MovietalkMenuBar from '../../components/menubar/MovietalkMenuBar';
import MovietalkSubBar from '../../components/menubar/MovietalkSubBar';
import MyInformation from '../../components/board/MyInformation';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

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
function TotalBoard({ match, isLogin, setIsLogin }) {
    useEffect(() => {
        axios
            .get("http://localhost:8080/movie-talk")
            // .get('/dummydata/freeboarddata.json')
            .then(function (response) {
                setBoardList(response.data.boardList);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    const [boardlist, setBoardList] = React.useState([]);
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
    /* useEffect(() => {
        axios
            .get('/dummydata/freeboarddata.json')
            .then(function (response) {
                setBoardlist(response.data.boardList);
                //setuserNickname(response.data.userNickname);
            })
            .catch(function (error) {
                console.log(error);
            });
    });

    const [boardlist, setBoardlist] = React.useState('');
    //const [usernickname, setuserNickname] = React.useState('');
 */
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar isLogin={isLogin} setIsLogin={setIsLogin}></MenuBar>
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
                        <MyInformation></MyInformation>
                        <Button
                            href="../write"
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
                            display: 'flex',
                            p: 1,
                        }}
                    >
                        <BoardTable
                            data={boardlist}
                            tableName="전체게시판"
                        ></BoardTable>
                    </Box>
                </Container>
            </main>
            <Footer></Footer>
        </ThemeProvider>
    );
}
export default TotalBoard;
