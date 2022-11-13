import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// mui의 css 우선순위가 높기때문에 important를 설정 - 실무하다 보면 종종 발생 우선순위 문제

const Boxs = styled(Box)`
    padding-bottom: 40px !important;
`;

function ChangePassword() {
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
    // const navigate = useNavigate();
    //useNavigate?! -> 페이지

    // 이름, 전화번호, 아이디, 패스워드 받기
    const onhandlePost = async data => {
        const { id } = data;
        const postData = { id };

        await axios
            .post('http://localhost:8080/log-in/find-pw', { postData })
            .then(res => {
                // submit 버튼 중복클릭 방지
                let submitBtn = document.getElementById('submit');
                submitBtn.addEventListener('click', function (e) {
                    this.setAttribute('disabled', 'true');
                    //버튼 비활성화 여러번 눌리면 그게 여러번 서버로 보내질 수 있으니까
                    this.setAttribute('disabledElevation', 'true');
                    this.setAttribute('disabledRipple', 'true');
                });
                // navigate('/');
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
        };
        onhandlePost(loginData);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
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
                            fullWidth="false"
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                fontSize: 16,
                                fontWeight: 500,
                                width: 142,
                                height: 37,
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
                        sx={{ mt: 18 }}
                    >
                        <Grid>
                            <Typography
                                sx={{
                                    color: 'black',
                                    fontSize: 17,
                                    fontWeight: 500,
                                    textAlign: 'center',
                                    marginBottom: 1,
                                }}
                            >
                                비밀번호를 잊으셨거나, 변경하시길 원하시나요?
                            </Typography>
                        </Grid>
                        <FormControl component="fieldset" variant="standard">
                            {/* 아이디 입력 폼 */}
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={12}
                                    sx={{ marginBottom: 3, mt: 4 }}
                                >
                                    <TextField
                                        variant="standard"
                                        required
                                        fullWidth="false"
                                        id="id"
                                        name="id"
                                        autoComplete="id" //자동완성 기능
                                        placeholder="가입하신 이메일 입력, 예)chartinbox@gmail.com"
                                    />
                                </Grid>
                            </Grid>
                            {/* 회원가입 버튼 */}
                            <Button
                                id="submit"
                                type="submit"
                                fullWidth="false"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, height: 50 }}
                                size="large"
                            >
                                비밀번호 재설정 이메일 발송하기
                            </Button>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 'normal',
                                    fontSize: 17,
                                    textAlign: 'center',
                                }}
                            >
                                입력하신 메일로 비밀번호 재설정 링크를
                                발송해드립니다
                            </Typography>
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
                            ></Grid>
                        </Grid>
                    </Boxs>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
export default ChangePassword;
