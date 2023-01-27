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
                    width: '16.625rem',
                    height: '16.625rem',
                    //border: 2,
                }}
            >
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '2.5rem',
                        borderTop: '1px solid #C2C2C2',
                        borderBottom: '1px solid #C2C2C2',
                        textAlign: 'left',
                    }}
                >
                    <Button
                        className="menuButton"
                        onClick={handletotalBoard}
                        sx={{
                            pl: '1rem',
                            pt: '0.5rem',
                            width: '15.125rem',
                            fontWeight: 400,
                            fontSize: '0.875rem',
                        }}
                    >
                        전체글
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '2.5rem',
                        borderBottom: '1px solid #C2C2C2',
                        textAlign: 'left',
                    }}
                >
                    <Button
                        className="menuButton"
                        onClick={handlenetflexBoard}
                        sx={{
                            pl: '1rem',
                            pt: '0.5rem',
                            width: '15.125rem',
                            fontWeight: 400,
                            fontSize: '0.875rem',
                        }}
                    >
                        넷플릭스{' '}
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '2.5rem',
                        borderBottom: '1px solid #C2C2C2',
                        textAlign: 'left',
                    }}
                >
                    <Button
                        className="menuButton"
                        onClick={handlewatchaBoard}
                        sx={{
                            pl: '1rem',
                            fontWeight: 400,
                            pt: '0.5rem',
                            width: '15.125rem',
                            fontSize: '0.875rem',
                        }}
                    >
                        왓챠
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '2.5rem',
                        borderBottom: '1px solid #C2C2C2',
                        textAlign: 'left',
                    }}
                >
                    <Button
                        className="menuButton"
                        onClick={handletvingBoard}
                        sx={{
                            pl: '1rem',
                            fontWeight: 400,
                            width: '15.125rem',
                            pt: '0.5rem',
                            fontSize: '0.875rem',
                        }}
                    >
                        티빙
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '2.5rem',
                        borderBottom: '1px solid #C2C2C2',
                        textAlign: 'left',
                    }}
                >
                    <Button
                        className="menuButton"
                        onClick={handlewaveBoard}
                        sx={{
                            pl: '1rem',
                            fontWeight: 400,
                            width: '15.125rem',
                            pt: '0.5rem',
                            fontSize: '0.875rem',
                        }}
                    >
                        웨이브
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '2.5rem',
                        borderBottom: '1px solid #C2C2C2',
                        textAlign: 'left',
                    }}
                >
                    <Button
                        className="menuButton"
                        onClick={handledisneyBoard}
                        sx={{
                            pl: '1rem',
                            fontWeight: 400,
                            width: '15.125rem',
                            pt: '0.5rem',
                            fontSize: '0.875rem',
                        }}
                    >
                        디즈니
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '2.5rem',
                        borderBottom: '1px solid #C2C2C2',
                        textAlign: 'left',
                    }}
                >
                    <Button
                        className="menuButton"
                        onClick={handleetcBoard}
                        sx={{
                            pl: '1rem',
                            fontWeight: 400,
                            width: '15.125rem',
                            pt: '0.5rem',
                            fontSize: '0.875rem',
                        }}
                    >
                        기타
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default NBoardSubBar;
