import * as React from 'react';
/* import FormControlLabel from '@mui/material/FormControlLabel'; */
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
/* import FormControl from '@mui/material/FormControl'; */
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
/* import Link from '@mui/material/Link';
 */ import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBar from '../../components/menubar/MenuBar';

const FormHelperTexts = styled(FormHelperText)`
    width: 100%;
    padding-left: 1px;
    font-weight: 500 !important;
    color: #d32f2f !important;
`;

function ChangeInfo() {
    const theme = createTheme({
        // palette: {
        //     primary: {
        //         main: '#fff',
        //     },
        //     secondary: {
        //         main: '#CF5E53',
        //     },
        //     third: {
        //         main: '#001F28',
        //     },
        //     background: {
        //         default: '#001F28',
        //     },
        //     text: {
        //         primary: '#fff',
        //     },
        // },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });

    const [checked, setChecked] = useState(false);
    const [idError, setIdError] = useState('');
    const [passwordState, setPasswordState] = useState(''); //비밀번호 입력
    const [passwordError, setPasswordError] = useState(''); //비밀번호 재입력
    const [nameError, setNameError] = useState('');

    const onhandlePost = async data => {
        const { id, password, name } = data;
        const postData = { id, password, name };
        await axios
            .post('http://localhost:8080/changeinfo', { postData })
            .then(res => {
                // submit 버튼 중복클릭 방지
                let submitBtn = document.getElementById('submit');
                submitBtn.addEventListener('click', function (e) {
                    this.setAttribute('disabled', 'true');
                    this.setAttribute('disabledElevation', 'true');
                    this.setAttribute('disabledRipple', 'true');
                });
                // navigate('/');
            })
            .catch(err => {
                console.log(err);
                if (err === 'userNickname') {
                    //닉네임 중복으로 인해 회원가입 실패
                }
            });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const reviseData = {
            id: data.get('id'),
            password: data.get('password'),
            name: data.get('name'),
            rePassword: data.get('rePassword'),
        };
        const { id, password, rePassword } = reviseData;

        // 아이디 유효성 체크
        const idRegrex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!idRegrex.test(id)) setIdError('이메일 형식이 올바르지 않습니다');
        else setIdError('');

        // 비밀번호 유효성 체크
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegex.test(password))
            setPasswordState(
                ' 영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 설정해주세요.',
            );
        else setPasswordState('');

        if (password !== rePassword)
            setPasswordError('비밀번호가 일치하지 않습니다.');
        else setPasswordError('');

        // 모두 통과하면 post되는 코드 실행
        if (
            // nameRegex.test(name) &&
            idRegrex.test(id) &&
            passwordRegex.test(password) &&
            password === rePassword &&
            checked
        ) {
            onhandlePost(reviseData);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar></MenuBar>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        px: 32,
                        mt: 10,
                        direction: 'column',
                        align: 'center',
                        justifyContent: 'space-around',
                    }}
                >
                    <Button
                        sx={{
                            align: 'left',
                            width: '8.313rem',
                            height: '2.063rem',
                            fontFamily: 'Pretendard',
                            fontWeight: '400',
                            fontSize: '1.313rem',
                            lineHeight: '25px',
                            color: 'text.primary',
                            ml: '-30em',
                        }}
                    >
                        개인정보 수정
                    </Button>
                    <Button
                        href="/changeinfo"
                        sx={{
                            height: '1.375rem',
                            width: '5.303rem',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '1.125rem',
                            color: '#757575',
                        }}
                    >
                        {' '}
                        탈퇴하기{' '}
                    </Button>
                </Box>

                <Container
                    sx={{
                        mt: 8,
                        width: '42.875rem',
                        height: '100%',
                        flexDirection: 'column',
                    }}
                >
                    <Box marginBottom="20px">
                        <Box
                            sx={{
                                width: '42.875rem',
                                display: 'flex',
                                height: '100%',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography
                                component="h1"
                                align="left"
                                height="30px"
                                color="text.primary"
                                fontSize="0.75rem"
                                fontWeight="600px"
                                gutterBottom
                            >
                                닉네임 변경
                            </Typography>
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                name="name"
                                placeholder="닉네임을 입력해주세요."
                                id="name"
                                autoComplete="name"
                                error={nameError !== '' || false}
                            />
                            <FormHelperTexts>{nameError}</FormHelperTexts>
                            <Box
                                sx={{
                                    height: '3.125rem',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    mt: 3.5,
                                }}
                            >
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        width: '3.2rem',
                                        height: '1.3rem',
                                        padding: '0px',
                                        backgroundColor: '#E0E0E0',
                                        color: '#333D41',
                                        fontWeight: '600',
                                        fontSize: '0.7rem',
                                    }}
                                >
                                    변경하기
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    <Box marginBottom="30px">
                        <Box
                            sx={{
                                width: '42.875rem',
                                display: 'flex',
                                height: '100%',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography
                                component="h1"
                                align="left"
                                height="50px"
                                color="text.primary"
                                fontSize="0.75rem"
                                fontWeight="600px"
                                maxWidth="200px"
                            >
                                비밀번호 변경
                            </Typography>
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                name="password"
                                placeholder="현재 비밀번호를 입력해주세요"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                error={passwordState !== '' || false}
                            />
                            <FormHelperTexts>{passwordState}</FormHelperTexts>
                        </Box>
                    </Box>
                    <Box marginBottom="30px">
                        <Box
                            sx={{
                                width: '42.875rem',
                                display: 'flex',
                                height: '100%',
                                flexDirection: 'column',
                            }}
                        >
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                name="rePassword"
                                placeholder="변경할 비밀번호를 입력해주세요"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                error={passwordError !== '' || false}
                            />
                            <FormHelperTexts>{passwordError}</FormHelperTexts>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '42.875rem',
                            display: 'flex',
                            height: '100%',
                            flexDirection: 'column',
                        }}
                    >
                        <TextField
                            variant="standard"
                            required
                            fullWidth
                            name="rePassword"
                            placeholder="비밀번호 재입력"
                            type="password"
                            id="rePassword"
                            autoComplete="new-password"
                            error={passwordError !== '' || false}
                        />
                        <FormHelperTexts>{passwordError}</FormHelperTexts>

                        <Box
                            sx={{
                                height: '3.125rem',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                mt: 3.5,
                            }}
                        >
                            <Button
                                variant="contained"
                                size="small"
                                sx={{
                                    width: '3.2rem',
                                    height: '1.3rem',
                                    padding: '0px',
                                    backgroundColor: '#E0E0E0',
                                    color: '#333D41',
                                    fontWeight: '600',
                                    fontSize: '0.7rem',
                                }}
                            >
                                변경하기
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            height: '3.125rem',
                            display: 'flex',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <Button
                            id="submit"
                            type="submit"
                            size="medium"
                            sx={{
                                color: 'black',
                                ml: 0,
                            }}
                        >
                            뒤로가기
                        </Button>
                    </Box>
                </Container>
                {/* </Box> */}

                {/* <Box
                    sx={{
                        height: '3.125rem',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        mt: 3.5,
                    }}
                >
                    <Button id="submit" type="submit" size="medium">
                        뒤로가기
                    </Button>
                </Box> */}
            </main>
            {/* Footer */}
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
export default ChangeInfo;
