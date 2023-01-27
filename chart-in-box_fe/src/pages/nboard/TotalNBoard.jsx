import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBar from '../../components/menubar/MenuBar';
import BoardNTable from './BoardNTable';
import NBoardMenuBar from '../../components/menubar/NBoardMenuBar';
import NBoardSubBar from '../../components/menubar/NBoardSubBar';
import { useNavigate } from 'react-router-dom';
import MyInformation from '../../components/board/MyInformation';
import axios from 'axios';
import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';

/* const data = {
    total: {
        name: '전체글',
    },
    disney: {
        name: '디즈니',
    },
    etc: {
        name: '기타',
    },
    netflex: {
        name: '넷플릭스',
    },
    tving: {
        name: '티빙',
    },
    watcha: {
        name: '왓차',
    },
    wave: {
        name: '웨이브',
    },
}; */

function TotalNBoard({ isLogin, setIsLogin }) {
    const [boardName, setBoardName] = React.useState('전체글');
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
    useEffect(() => {
        axios
            .get('/dummydata/nparty.json')
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
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar isLogin={isLogin} setIsLogin={setIsLogin}></MenuBar>
            <NBoardMenuBar setBoardName={setBoardName}></NBoardMenuBar>
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
                                mb: 3,
                            }}
                        >
                            <MyInformation></MyInformation>
                        </Box>
                        <Button
                            href="../nwriting"
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
                        <NBoardSubBar
                            setBoardName={setBoardName}
                        ></NBoardSubBar>
                    </Box>
                    <Box
                        sx={{
                            width: '59.5rem',
                            height: '50rem',
                            display: 'flex',
                            p: 1,
                        }}
                    >
                        <BoardNTable
                            boardlist={boardlist}
                            boardName={boardName}
                        ></BoardNTable>
                    </Box>
                </Container>
            </main>
            <Footer></Footer>
        </ThemeProvider>
    );
}
export default TotalNBoard;
