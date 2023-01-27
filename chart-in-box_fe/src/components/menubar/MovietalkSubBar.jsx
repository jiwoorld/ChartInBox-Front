import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function MovietalkSubBar() {
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
    /* const handlefreeBoard = () => {
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
    }; */
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
                        borderTop: '1px solid #C2C2C2',
                        borderBottom: '1px solid #C2C2C2',
                        textAlign: 'left',
                        height: '2.5rem',
                    }}
                >
                    <Button
                        className="menuButton"
                        sx={{
                            pl: '1rem',
                            pt: '0.5rem',
                            width: '15.125rem',
                            fontWeight: 400,
                            fontSize: '0.875rem',
                        }}
                        href="../movie-talk/totalboard"
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
                        sx={{
                            pl: '1rem',
                            pt: '0.5rem',
                            width: '15.125rem',
                            fontWeight: 400,
                            fontSize: '0.875rem',
                        }}
                        href="../movie-talk/freeboard"
                    >
                        자유
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
                        sx={{
                            pl: '1rem',
                            fontWeight: 400,
                            pt: '0.5rem',
                            width: '15.125rem',
                            fontSize: '0.875rem',
                        }}
                        href="../movie-talk/reviewboard"
                    >
                        리뷰
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
                        sx={{
                            pl: '1rem',
                            fontWeight: 400,
                            width: '15.125rem',
                            pt: '0.5rem',
                            fontSize: '0.875rem',
                        }}
                        href="../movie-talk/qnaboard"
                    >
                        Q&A
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default MovietalkSubBar;
