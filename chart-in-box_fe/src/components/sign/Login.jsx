import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// mui의 css 우선순위가 높기때문에 important를 설정 - 실무하다 보면 종종 발생 우선순위 문제
const FormHelperTexts = styled(FormHelperText)`
    width: 100%;
    padding-left: 1px;
    font-weight: 500 !important;
    color: #d32f2f !important;
`;

const Boxs = styled(Box)`
    padding-bottom: 40px !important;
`;

function Login({ clickJoin, clickPassword }) {
    // color, font 설정
    const theme = createTheme({
        palette: {
            primary: {
                main: '#333D41',
            },
            secondary: {
                main: '#CF5E53',
            },
        },
        typography: {
            fontFamily: "'Noto Sans KR', sans-serif",
        },
    });

    // 유효성 검사 useState 추가
    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState(''); //비밀번호 재입력
    const navigate = useNavigate();
    //useNavigate?! -> 페이지

    // 이름, 전화번호, 아이디, 패스워드 받기
    const onhandlePost = async data => {
        const { id, password } = data;
        const postData = { id, password };

        await axios
            .post('http://localhost:8080/log-in', { postData })
            .then(res => {
                // submit 버튼 중복클릭 방지
                let submitBtn = document.getElementById('submit');
                submitBtn.addEventListener('click', function (e) {
                    this.setAttribute('disabled', 'true');
                    //버튼 비활성화 여러번 눌리면 그게 여러번 서버로 보내질 수 있으니까
                    this.setAttribute('disabledElevation', 'true');
                    this.setAttribute('disabledRipple', 'true');
                });
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    };

    //form 전송
    const handleSubmit = event => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const loginData = {
            id: data.get('id'),
            password: data.get('password'),
        };
        onhandlePost(loginData);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 470,
                    paddingLeft: 2,
                    paddingRight: 2,
                }}
            >
                {/* 아이콘 */}
                <Box sx={{ m: 1, width: 142, height: 37 }}>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            fontSize: 16,
                            fontWeight: 500,
                        }}
                        size="medium"
                        color="secondary"
                    >
                        로고
                    </Button>
                </Box>
                {/* 메인 제목 */}
                <Boxs
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 6.25 }}
                >
                    <FormControl component="fieldset" variant="standard">
                        {/* 아이디 입력 폼 */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} sx={{ marginBottom: 3, mt: 4 }}>
                                <Typography
                                    sx={{
                                        color: 'black',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        textAlign: 'left',
                                        marginBottom: 1,
                                    }}
                                >
                                    이메일 (아이디)
                                </Typography>
                                <TextField
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="id"
                                    name="id"
                                    autoComplete="id" //자동완성 기능
                                    placeholder="가입하신 이메일 입력, 예)chartinbox@gmail.com"
                                />
                            </Grid>
                            {/* 비밀번호 입력 폼 */}
                            <Grid item xs={12} sx={{ marginBottom: 5 }}>
                                <Typography
                                    sx={{
                                        color: 'black',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        textAlign: 'left',
                                        marginBottom: 1,
                                    }}
                                >
                                    비밀번호{' '}
                                </Typography>

                                <TextField
                                    variant="standard"
                                    required
                                    fullWidth
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button
                                    onClick={clickPassword}
                                    variant="body2"
                                    sx={{
                                        fontWeight: 'normal',
                                        fontSize: 15,
                                        textDecoration: 'none',
                                    }}
                                >
                                    비밀번호를 잊으셨나요?
                                </Button>
                            </Grid>
                        </Grid>
                        {/* 회원가입 버튼 */}
                        <Button
                            id="submit"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            size="large"
                        >
                            로그인
                        </Button>
                    </FormControl>

                    {/* 로그인 링크 */}
                    <Grid
                        container
                        justifyContent="flex-end"
                        sx={{
                            mt: 1,
                        }}
                    >
                        <Grid
                            item
                            sx={{
                                marginRight: 6,
                            }}
                        >
                            <Button
                                onClick={clickJoin}
                                variant="body2"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    textDecoration: 'none',
                                }}
                            >
                                아직 차트인 박스 회원이 아니신가요?
                            </Button>
                        </Grid>
                    </Grid>
                </Boxs>
            </Box>
        </ThemeProvider>
    );
}
export default Login;
