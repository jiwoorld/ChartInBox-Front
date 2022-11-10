import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Swal from 'sweetalert2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// mui의 css 우선순위가 높기때문에 important를 설정 - 실무하다 보면 종종 발생 우선순위 문제
const FormHelperTexts = styled(FormHelperText)`
    width: 100%;
    padding-left: 16px;
    font-weight: 700 !important;
    color: #d32f2f !important;
`;

const Boxs = styled(Box)`
    padding-bottom: 40px !important;
`;

function Join() {
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
    const [checked, setChecked] = useState(false);
    const [nameError, setNameError] = useState('');
    const [idError, setIdError] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    //useNavigate?!

    // 약관 동의 체크 확인
    const handleAgree = event => {
        setChecked(event.target.checked);
    };

    // 이름, 전화번호, 아이디, 패스워드 받기
    const onhandlePost = async data => {
        const { name, phone, id, password } = data;
        const postData = { name, phone, id, password };

        await axios
            .post('http://localhost:8080/join', { postData })
            .then(res => {
                // submit 버튼 중복클릭 방지
                let submitBtn = document.getElementById('submit');
                submitBtn.addEventListener('click', function (e) {
                    this.setAttribute('disabled', 'true');
                    //버튼 비활성화 여러번 눌리면 그게 여러번 서버로 보내질 수 있으니까
                    this.setAttribute('disabledElevation', 'true');
                    this.setAttribute('disabledRipple', 'true');
                });
                Swal.fire({
                    icon: 'success',
                    title: '회원가입 성공',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/');
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    iconColor: '#d32f2f',
                    title: '회원가입 실패',
                    text: '다시 시도해주세요',
                    confirmButtonColor: '#005cb8',
                });
            });
    };

    //form 전송
    const handleSubmit = event => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const joinData = {
            name: data.get('name'),
            phone: data.get('phone'),
            id: data.get('id'),
            password: data.get('password'),
            rePassword: data.get('rePassword'),
        };
        const { name, id, password, rePassword } = joinData;
        // 이름 유효성 체크
        const nameRegex = /^[가-힣a-zA-Z]+$/;
        if (!nameRegex.test(name) || name.length < 1)
            setNameError('올바른 이름을 입력해주세요.');
        else setNameError('');

        // 아이디 유효성 체크
        const idRegrex = /^[a-zA-Z]\w{2,7}$/;
        if (!idRegrex.test(id)) setIdError('올바른 아이디 형식이 아닙니다.');
        else setIdError('');

        // 비밀번호 유효성 체크
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegex.test(password))
            setPasswordState('영문자+숫자 조합으로 8자리 이상 입력해주세요.');
        else setPasswordState('');

        // 비밀번호 같은지 체크
        if (password !== rePassword)
            setPasswordError('비밀번호가 일치하지 않습니다.');
        else setPasswordError('');

        // 회원가입 동의 체크
        if (!checked)
            Swal.fire({
                icon: 'error',
                iconColor: '#d32f2f',
                title: '회원가입 실패',
                text: '회원가입 약관에 동의해주세요.',
                confirmButtonColor: '#005cb8',
            });

        // 모두 통과하면 post되는 코드 실행
        if (
            nameRegex.test(name) &&
            idRegrex.test(id) &&
            passwordRegex.test(password) &&
            password === rePassword &&
            checked
        ) {
            onhandlePost(joinData);
        }
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
                    }}
                >
                    {/* 아이콘 */}
                    <Box
                        sx={{
                            m: 1,
                            width: 142,
                            height: 37,
                            backgroundColor: 'secondary.main',
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: 20,
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            로고
                        </Typography>
                    </Box>
                    {/* 메인 제목 */}
                    <Boxs
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <FormControl component="fieldset" variant="standard">
                            {/* 이름 입력 폼 */}
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ marginBottom: 3 }}>
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
                                        autoComplete="id"
                                        placeholder="이메일 입력 (ex. chartinbox@gmail.com)"
                                        autoFocus
                                        error={idError !== '' || false}
                                    />
                                </Grid>
                                <FormHelperTexts>{idError}</FormHelperTexts>

                                {/* 비밀번호 입력 폼 */}
                                <Grid item xs={12} sx={{ marginBottom: 1 }}>
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
                                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        error={passwordState !== '' || false}
                                    />
                                </Grid>
                                <FormHelperTexts>
                                    {passwordState}
                                </FormHelperTexts>

                                {/* 비밀번호 재입력 폼 */}
                                <Grid item xs={12}>
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
                                </Grid>
                                <FormHelperTexts>
                                    {passwordError}
                                </FormHelperTexts>

                                {/* 이용약관 체크 박스 */}
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={handleAgree}
                                                color="primary"
                                                size="small"
                                            />
                                        }
                                        label="이용약관 및 개인정보 처리 방침에 동의합니다."
                                        labelPlacement="end"
                                    />
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
                                회원가입
                            </Button>
                        </FormControl>

                        {/* 로그인 링크 */}
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    이미 계정이 있으신가요? <b>로그인 하기</b>
                                </Link>
                            </Grid>
                        </Grid>
                    </Boxs>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
export default Join;
