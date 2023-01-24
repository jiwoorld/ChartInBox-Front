import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function MovietalkMenuBar({ setBoardName }) {
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
    const handlefreeBoard = () => {
        setBoardName('자유 게시판');
    };
    const handletotalBoard = () => {
        setBoardName('전체글');
    };
    const handleReviewBoard = () => {
        setBoardName('리뷰 게시판');
    };
    const handleQnaBoard = () => {
        setBoardName(' Q&A');
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
                        width: '31.25rem',
                        height: '60px',
                        justifyContent: 'space-around',
                    }}
                >
                    <Button
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
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
                        onClick={handlefreeBoard}
                    >
                        {' '}
                        자유게시판{' '}
                    </Button>
                    <Button
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '0.875rem',
                            color: 'secondary.main',
                        }}
                        onClick={handleReviewBoard}
                    >
                        {' '}
                        리뷰게시판{' '}
                    </Button>
                    <Button
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            color: 'secondary.main',
                            fontSize: '0.875rem',
                        }}
                        onClick={handleQnaBoard}
                    >
                        {' '}
                        Q&A{' '}
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default MovietalkMenuBar;
