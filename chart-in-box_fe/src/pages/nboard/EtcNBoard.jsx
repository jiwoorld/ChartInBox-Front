import * as React from 'react';
import AppBar from '@mui/material/AppBar';
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
import NBoardBar from './NBoardBar';
import { Paper } from '@mui/material';
import { borderBottom } from '@mui/system';
import BoardNTable from './BoardNTable';
import { useNavigate } from 'react-router-dom';
import NBoardMenuBar from '../../components/menubar/NBoardMenuBar';
import NBoardSubBar from '../../components/menubar/NBoardSubBar';
import MyInformation from '../../components/board/MyInformation';

function EtcNBoard() {
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
    const navigate = useNavigate();
    const handleTotalNBoard = () => {
        navigate('/totalnboard');
    };
    const handleNetflexNBoard = () => {
        navigate('/netflexnboard');
    };
    const handledisneyNBoard = () => {
        navigate('/disneynboard');
    };
    const handleTivingNBoard = () => {
        navigate('/tivingnboard');
    };
    const handleWaveNBoard = () => {
        navigate('/wavenboard');
    };
    const handleWatchaNBoard = () => {
        navigate('/watchanboard');
    };
    const handleEtcNBoard = () => {
        navigate('/etcnboard');
    };
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar></MenuBar>
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
                        href="../totalnboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '0.875rem',
                            color: 'secondary.main',
                        }}
                    >
                        {' '}
                        전체글{' '}
                    </Button>
                    <Button
                        href="../netflexnboard"
                        sx={{
                            width: '31.25rem',
                            mr: '1rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontWeight: '500',
                            fontSize: '0.875rem',
                            color: 'secondary.main',
                        }}
                    >
                        {' '}
                        넷플릭스{' '}
                    </Button>
                    <Button
                        href="../watchanboard"
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
                        href="../tivingnboard"
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
                        href="../wavenboard"
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
                        href="../disneynboard"
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
                        href="../etcnboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            color: 'primary.main',
                            borderBottom: 3.5,
                            fontSize: '0.875rem',
                        }}
                    >
                        {' '}
                        기타{' '}
                    </Button>
                </Box>
            </Box>
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
                                    height: '3rem',
                                    borderTop: '1px solid #C2C2C2',
                                    borderBottom: '1px solid #C2C2C2',
                                    textAlign: 'left',
                                }}
                            >
                                <Button
                                    onClick={handleTotalNBoard}
                                    sx={{
                                        pt: '0.5rem',
                                        width: '15.125rem',
                                        pl: '0.6rem',
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
                                    onClick={handleNetflexNBoard}
                                    sx={{
                                        pl: '1rem',
                                        pt: '0.5rem',
                                        width: '15.125rem',
                                        fontWeight: 400,
                                        fontSize: '0.875rem',
                                    }}
                                >
                                    넷플릭스
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
                                    onClick={handleWatchaNBoard}
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
                                    onClick={handleTivingNBoard}
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
                                    onClick={handleWaveNBoard}
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
                                    onClick={handledisneyNBoard}
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
                                    onClick={handleEtcNBoard}
                                    sx={{
                                        pl: '1rem',
                                        fontWeight: 500,
                                        width: '15.125rem',
                                        pt: '0.5rem',
                                        fontSize: '1rem',
                                    }}
                                >
                                    기타
                                </Button>
                            </Box>
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
                        <BoardNTable tableName={'기타'}></BoardNTable>
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
export default EtcNBoard;
