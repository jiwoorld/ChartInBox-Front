import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import Join from '../sign/Join';
import Login from '../sign/Login';
import ChangePassword from '../sign/ChangePassword';
import { useNavigate } from 'react-router-dom';

function MenuBar() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#333D41',
                darker: '#1A1A1A',
            },
            secondary: {
                main: '#CF5E53',
            },
            third: {
                main: '#D9D9D9',
            },
            text: {
                default: '#fff',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    }); // 색 지정
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    }; //모달창 스타일

    const navigate = useNavigate();
    //navigate 함수  -> 페이지 이동

    const [logo, setLogo] = React.useState(null);
    const handlePopoverOpen = event => {
        setLogo(event.currentTarget);
    };

    const [searchValue, setSearchValue] = React.useState('');
    const onChangeSearch = e => {
        e.preventDefault();
        console.log('들어오?');
        setSearchValue(e.target.value);
    };
    const onKeySearch = e => {
        if (e.key === 'Enter') {
            navigate(`/movieSearch/${searchValue}`);
            return;
        }
    };

    const handlePopoverClose = () => {
        setLogo(null);
    };
    const popoverOpen = Boolean(logo);
    const [joinOpen, setJoinOpen] = React.useState(false);
    const handleJoinOpen = () => setJoinOpen(true);
    const handleJoinClose = () => setJoinOpen(false);

    const [loginOpen, setLoginOpen] = React.useState(false);
    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const [changePasswordOpen, setChangePasswordOpen] = React.useState(false);
    const handleChangePasswordClose = () => setChangePasswordOpen(false);

    const clickLogin = () => {
        setLoginOpen(true);
        setJoinOpen(false);
    };
    const clickJoin = () => {
        setLoginOpen(false);
        setJoinOpen(true);
    };
    const clickPassword = () => {
        setLoginOpen(false);
        setChangePasswordOpen(true);
    };
    const joinClose = () => {
        setJoinOpen(false);
    };
    const loginClose = () => {
        setLoginOpen(false);
    };
    const changePasswordClose = () => {
        setChangePasswordOpen(false);
    };
    //모달창 창끄고 여는 state

    const handleMypage = () => {
        navigate('/mypage');
    };
    const handleMainpage = () => {
        navigate('/');
    };
    //my 클릭시 mypage url로 이동
    const handleTotalpage = () => {
        navigate('/totalboard');
    };
    const handleTotalNpage = () => {
        navigate('/totalnboard');
    };
    const handleMovieSearch = () => {
        navigate('/moviesearch');
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    height: '80px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        width: '656px',
                        height: '60px',
                        justifyContent: 'space-around',
                    }}
                >
                    <Box
                        sx={{
                            width: '161px',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '1.125rem',
                            color: 'secondary.main',
                            padding: '0',
                        }}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                    >
                        {popoverOpen ? (
                            <img
                                src="../../image/logo_header.png"
                                alt="로고"
                                width="162px"
                                height="63px"
                                onClick={handleMainpage}
                            ></img>
                        ) : (
                            <img
                                src="../../image/logo_mouseoff.png"
                                alt="로고"
                                width="162px"
                                height="63px"
                                onClick={handleMainpage}
                            ></img>
                        )}
                    </Box>
                    <Button
                        sx={{
                            width: '161px',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '1.125rem',
                        }}
                        onClick={handleTotalpage}
                    >
                        영화TALK
                    </Button>
                    <Button
                        sx={{
                            width: '161px',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '1.125rem',
                        }}
                        onClick={handleTotalNpage}
                    >
                        N팟 구함
                    </Button>
                    <Button
                        sx={{
                            width: '161px',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '1.125rem',
                        }}
                        onClick={handleMovieSearch}
                    >
                        작품탐색
                    </Button>
                </Box>
                {/* 메인서비스 */}
                <Box>
                    <Paper
                        component="form"
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '300px',
                            borderRadius: '22px',
                            height: '40px',
                            background: ' rgba(217, 217, 217, 0.29)',
                        }}
                    >
                        <InputBase
                            sx={{
                                ml: 1,
                                flex: 1,
                                width: '300px',
                                fontStyle: 'normal',
                                fontWeight: '300',
                                fontSize: '0.938rem',
                                color: 'rgba(26, 26, 26, 0.7)',
                            }}
                            value={searchValue}
                            onChange={onChangeSearch}
                            onKeyPress={onKeySearch}
                            placeholder="제목 감독을 검색해보세요"
                        />
                        <IconButton
                            type="button"
                            sx={{ p: '10px', color: '#666664' }}
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Box>
                {/* 검색창 */}
                <Box
                    sx={{
                        display: 'flex',
                        width: '291px',
                        height: '21px',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}
                >
                    <Button
                        onClick={handleLoginOpen}
                        sx={{
                            fontWeight: '600',
                            fontSize: '0.938rem',
                            width: '64px',
                            height: '21px',
                            padding: '0px',
                        }}
                    >
                        로그인
                    </Button>
                    <Modal open={loginOpen} onClose={handleLoginClose}>
                        <Box sx={style}>
                            <Login
                                clickJoin={clickJoin}
                                clickPassword={clickPassword}
                                loginClose={loginClose}
                            />
                        </Box>
                    </Modal>
                    {/* 로그인모달 */}
                    <Button
                        onClick={handleJoinOpen}
                        sx={{
                            fontWeight: '600',
                            fontSize: '0.938rem',
                            width: '64px',
                            height: '21px',
                            padding: '0px',
                        }}
                    >
                        회원가입
                    </Button>
                    <Modal open={joinOpen} onClose={handleJoinClose}>
                        <Box sx={style}>
                            <Join
                                clickLogin={clickLogin}
                                joinClose={joinClose}
                            />
                        </Box>
                    </Modal>
                    {/* 회원가입 모달 */}
                    <Modal
                        open={changePasswordOpen}
                        onClose={handleChangePasswordClose}
                    >
                        <Box sx={style}>
                            <ChangePassword
                                changePasswordClose={changePasswordClose}
                            ></ChangePassword>
                        </Box>
                    </Modal>
                    {/* 비밀번호 모달 */}
                    <Button
                        sx={{
                            fontWeight: '600',
                            fontSize: '0.938rem',
                            width: '64px',
                            height: '21px',
                            padding: '0px',
                        }}
                        onClick={handleMypage}
                    >
                        MY
                    </Button>
                </Box>
                {/* 마이 */}
            </Box>
        </ThemeProvider>
    );
}

export default MenuBar;
