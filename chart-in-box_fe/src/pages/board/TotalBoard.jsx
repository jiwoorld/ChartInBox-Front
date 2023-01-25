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

function TotalBoard({ isLogin, setIsLogin }) {
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

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar isLogin={isLogin} setIsLogin={setIsLogin}></MenuBar>
            <MovietalkMenuBar setBoardName={setBoardName}></MovietalkMenuBar>
            <main>
                <Container
                    maxWidth="70rem"
                    sx={{
                        ml: '8rem',
                        mt: '1.4rem',
                        display: 'flex',
                        flexDirection: 'row',
                        border: '1px solid red',
                    }}
                >
                    <Box sx={{ p: 1 }}>
                        <MyInformation></MyInformation>
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
                            <MovietalkSubBar
                                setBoardName={setBoardName}
                            ></MovietalkSubBar>
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
                        <BoardTable boardName={boardName}></BoardTable>
                    </Box>
                </Container>
            </main>
        </ThemeProvider>
    );
}
export default TotalBoard;
