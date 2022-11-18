import * as React from 'react';
/* import FormControlLabel from '@mui/material/FormControlLabel'; */
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
/* import FormControl from '@mui/material/FormControl'; */
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import axios from 'axios';
/* import Grid from '@mui/material/Grid'; */
import styled from 'styled-components';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
/* import Link from '@mui/material/Link';
 */ import { createTheme, ThemeProvider } from '@mui/material/styles';

const FormHelperTexts = styled(FormHelperText)`
    width: 100%;
    padding-left: 1px;
    font-weight: 500 !important;
    color: #d32f2f !important;
`;

function ChangeInfo() {
    const theme = createTheme();
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
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        위에 상단바 들어갈 칸 ~.~
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                        paddingLeft: '25%',
                        paddingRight: '25%',
                    }}
                >
                    <Container maxWidth="550px">
                        <Typography
                            component="h1"
                            align="left"
                            height="50px"
                            color="text.primary"
                            fontSize="1.75rem"
                            fontWeight="900"
                            marginBottom="80px"
                            maxWidth="200px"
                            gutterBottom
                        >
                            개인정보 변경
                        </Typography>
                        <Box marginBottom="100px">
                            <Typography
                                component="h1"
                                align="left"
                                height="50px"
                                color="text.primary"
                                fontSize="1.2rem"
                                fontWeight="600px"
                                maxWidth="200px"
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
                        </Box>
                        <Box marginBottom="100px">
                            <Typography
                                component="h1"
                                align="left"
                                height="50px"
                                color="text.primary"
                                fontSize="1.2rem"
                                fontWeight="600px"
                                maxWidth="200px"
                                gutterBottom
                            >
                                이메일(아이디) 변경
                            </Typography>
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                id="id"
                                name="id"
                                autoComplete="id" //자동완성 기능
                                placeholder="chartinbox@gmail.com"
                                autoFocus
                                error={idError !== '' || false}
                            />
                            <FormHelperTexts>{nameError}</FormHelperTexts>
                        </Box>
                        <Box marginBottom="50px">
                            <Typography
                                component="h1"
                                align="left"
                                height="50px"
                                color="text.primary"
                                fontSize="1.2rem"
                                fontWeight="600px"
                                maxWidth="200px"
                                gutterBottom
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
                        <Box marginBottom="50px">
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
                    </Container>
                </Box>
                <Button id="submit" type="submit" size="medium">
                    탈퇴하기
                </Button>
                <Button id="submit" type="submit" size="medium">
                    수정하기
                </Button>
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
