import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function NBoardSubBar({ setBoardName }) {
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
    }); // 색 지정

    const navigate = useNavigate();
    //navigate 함수  -> 페이지 이동
    const handledisneyBoard = () => {
        setBoardName('디즈니');
    };
    const handletotalBoard = () => {
        setBoardName('전체글');
    };
    const handleetcBoard = () => {
        setBoardName('기타');
    };
    const handlenetflexBoard = () => {
        setBoardName('넷플릭스');
    };
    const handletvingBoard = () => {
        setBoardName('티빙');
    };
    const handlewatchaBoard = () => {
        setBoardName('왓차');
    };
    const handlewaveBoard = () => {
        setBoardName('웨이브');
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    height: '60px',
                    width: '100%',
                    alignItems: 'left',
                    justifyContent: 'space-around',
                    borderTop: '0.063rem solid #D9D9D9',
                    borderBottom: '0.063rem solid #D9D9D9',
                }}
            >
                <Box
                    sx={{
                        ml: '8rem',
                        display: 'flex',
                        width: '55rem',
                        height: '60px',
                        justifyContent: 'space-around',
                    }}
                >
                    <Button
                        className="menuButton"
                        sx={{
                            width: '31.25rem',
                            mr: '1rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            //fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '0.875rem',
                            color: 'secondary.main',
                        }}
                        onClick={handletotalBoard}
                    >
                        {' '}
                        전체글{' '}
                    </Button>
                    <Button
                        className="menuButton"
                        sx={{
                            width: '31.25rem',
                            mr: '1rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            //fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '0.875rem',
                            color: 'secondary.main',
                        }}
                        onClick={handlenetflexBoard}
                    >
                        {' '}
                        넷플릭스{' '}
                    </Button>
                    <Button
                        className="menuButton"
                        onClick={handlewatchaBoard}
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '4500',
                            fontSize: '0.875rem',
                            color: 'secondary.main',
                        }}
                    >
                        {' '}
                        왓차{' '}
                    </Button>
                    <Button
                        className="menuButton"
                        onClick={handletvingBoard}
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            color: 'secondary.main',
                            fontSize: '0.875rem',
                        }}
                    >
                        {' '}
                        티빙{' '}
                    </Button>
                    <Button
                        className="menuButton"
                        onClick={handlewaveBoard}
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            color: 'secondary.main',
                            fontSize: '0.875rem',
                        }}
                    >
                        {' '}
                        웨이브{' '}
                    </Button>
                    <Button
                        className="menuButton"
                        onClick={handledisneyBoard}
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            color: 'secondary.main',
                            fontSize: '0.875rem',
                        }}
                    >
                        {' '}
                        디즈니{' '}
                    </Button>
                    <Button
                        className="menuButton"
                        onClick={handleetcBoard}
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            color: 'secondary.main',
                            fontSize: '0.875rem',
                        }}
                    >
                        {' '}
                        기타{' '}
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default NBoardSubBar;
