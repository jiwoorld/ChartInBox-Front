import {
    Button,
    createTheme,
    CssBaseline,
    Paper,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import MenuBar from '../../components/menubar/MenuBar';
import MovieTable from '../../components/table/MovieTable';

function MovieInfo() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            secondary: {
                main: '#CF5E53',
            },
            third: {
                main: '#001F28',
            },
            background: {
                default: '#001F28',
            },
            text: {
                primary: '#fff',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <MenuBar />
            <Paper
                sx={{
                    width: '54rem',
                    height: '127.5rem',
                    position: 'absolute',
                    top: '11rem',
                    left: '25%',
                    backgroundColor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingBottom: '16.5rem',
                }}
            >
                <Box
                    sx={{
                        height: '21.6rem',
                        display: 'flex',
                    }}
                >
                    <Box
                        sx={{
                            width: '16rem',
                            height: '100%',
                            marginRight: '0.75rem',
                        }}
                    >
                        이미지 칸
                    </Box>
                    <Box
                        sx={{
                            marginTop: '3.3rem',
                            height: '18.2rem',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                height: '3.5rem',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box
                                sx={{
                                    height: '100%',
                                    width: '14.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography
                                    sx={{
                                        textAlign: 'left',
                                        fontWeight: '600',
                                        fontSize: '1.5rem',
                                        width: '13.3rem',
                                        height: '1.9rem',
                                    }}
                                >
                                    소년시절의 너
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        paddingLeft: '0px',
                                        mt: '2px',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            width: '3.6rem',
                                            height: '0.9rem',
                                            fontWeight: '400',
                                            fontSize: '0.75rem',
                                            borderRight: '1px solid white',
                                        }}
                                    >
                                        로맨스
                                    </Typography>
                                    <Typography
                                        sx={{
                                            width: '3.6rem',
                                            height: '0.9rem',
                                            fontWeight: '400',
                                            fontSize: '0.75rem',
                                            borderRight: '1px solid white',
                                        }}
                                    >
                                        125분
                                    </Typography>
                                    <Typography
                                        sx={{
                                            width: '3.6rem',
                                            height: '0.9rem',
                                            fontWeight: '400',
                                            fontSize: '0.75rem',
                                            borderRight: '1px solid white',
                                        }}
                                    >
                                        15세
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    height: '1.5rem',
                                    width: '8rem',
                                    display: 'flex',
                                    marginTop: '0.8rem',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                }}
                            >
                                <img
                                    src="../../image/good.png"
                                    alt="좋아요"
                                    width="20px"
                                    height="18px"
                                ></img>
                                <Typography
                                    sx={{
                                        width: '2rem',

                                        fontWeight: 600,
                                        fontSize: '1.3rem',
                                        color: '#F2CB05',
                                    }}
                                >
                                    3.4
                                </Typography>
                                <Button
                                    sx={{
                                        width: '3.2rem',
                                        height: '1.3rem',
                                        padding: '0px',
                                        backgroundColor: 'white',
                                        color: '#333D41',
                                        fontWeight: '600',
                                        fontSize: '0.7rem',
                                    }}
                                >
                                    평점주기
                                </Button>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                color: 'white',
                                width: '100%',
                                height: '6rem',
                                fontWeight: '400',
                                fontSize: '0.8rem',
                                textAlign: 'left',
                            }}
                        >
                            “넌 세상을 지켜, 난 너를 지킬게”<br></br> 시험만 잘
                            치면 멋진 인생을 살 수 있다고 가르치는 세상에서 기댈
                            곳 없이 세상에 내몰린 우등생 소녀 ‘첸니엔’과 양아치
                            소년 ‘베이’. 비슷한 상처와 외로움에 끌려 서로에게
                            의지하게 된 두 사람은 수능을 하루 앞둔 어느 날,
                            ‘첸니엔’의 삶을 뒤바꿔버릴 거대한 사건에 휘말리게
                            된다. ‘첸니엔’만은 평범하고 행복하게 살길 바라는
                            ‘베이’는 그녀의 그림자가 되어 모든 것을 해결하기로
                            마음 먹는데... “고마워. 내 세상의 전부, 소년시절의
                            너.”
                        </Box>
                        <Box
                            sx={{
                                height: '5.5rem',
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: '400',
                                    fontSize: '0.875rem',
                                    display: 'flex',
                                }}
                            >
                                원제 dkdkdkd
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: '400px',
                                    fontSize: '0.875rem',
                                    display: 'flex',
                                }}
                            >
                                개요 중국 , 2020년
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: '400',
                                    fontSize: '0.875rem',
                                    display: 'flex',
                                }}
                            >
                                감독 , 중국상
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: '400',
                                    fontSize: '0.875rem',
                                    display: 'flex',
                                }}
                            >
                                출연 주동우 이양찬새
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        height: '12.6rem',
                        width: '100%',
                    }}
                >
                    큐레이션
                </Box>
                <MovieTable
                    tableName={'Review'}
                    buttonName={'리뷰쓰러가기'}
                ></MovieTable>
                <MovieTable
                    tableName={'Q&A'}
                    buttonName={'Q&A 쓰러가기'}
                ></MovieTable>
            </Paper>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default MovieInfo;
