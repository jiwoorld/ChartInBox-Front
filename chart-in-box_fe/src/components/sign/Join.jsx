import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
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

function Join({ clickLogin, joinClose }) {
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
    const [privateChecked, setPrivateChecked] = useState(false);
    const [checkedError, setCheckedError] = useState('');
    const [idError, setIdError] = useState('');
    const [passwordState, setPasswordState] = useState(''); //비밀번호 입력
    const [passwordError, setPasswordError] = useState(''); //비밀번호 재입력
    const [nameError, setNameError] = useState('');
    // const navigate = useNavigate();
    //useNavigate?! -> 페이지

    // 약관 동의 체크 확인
    const handleAgree = event => {
        setChecked(event.target.checked);
        //선택됐으면 event.target.checked는 true가 된다
    };
    const handlePrivateAgree = event => {
        setPrivateChecked(event.target.checked);
        //선택됐으면 event.target.checked는 true가 된다
    };

    // 이름, 전화번호, 아이디, 패스워드 받기
    const onhandlePost = async data => {
        const { userEmail, userPassword, userNickname } = data;
        console.log(data, 'data');
        const postData = { userEmail, userPassword, userNickname };
        postData.userEmail = data.id;
        postData.userPassword = data.password;
        postData.userNickname = data.name;
        console.log(postData, 'postData');

        await axios
            .post('http://localhost:8080/join', postData)
            .then(res => {
                // submit 버튼 중복클릭 방지
                let submitBtn = document.getElementById('submit');
                submitBtn.addEventListener('click', function (e) {
                    this.setAttribute('disabled', 'true');
                    //버튼 비활성화 여러번 눌리면 그게 여러번 서버로 보내질 수 있으니까
                    this.setAttribute('disabledElevation', 'true');
                    this.setAttribute('disabledRipple', 'true');
                    console.log('성공');
                });
                joinClose();
                Swal.fire({
                    width: 460,
                    height: 260,
                    html: '가입하신 이메일로 전송된 링크를 <br> 클릭하면 회원가입이 완료됩니다.',
                    showConfirmButton: false,
                    cancelButtonText: '확인',
                    cancelButtonColor: '#CF5E53',
                    showCancelButton: true,
                    background: '#fff url(/image/swalBackground.png)',
                    timer: 5000,
                }); //회원가입 성공
                // navigate('/');
            })
            .catch(err => {
                console.log('error남!!!!!!!!!', err);
                console.log(err.response.data);
                if (err.response.data === 'userNickname') {
                    //닉네임 중복으로 인해 회원가입 실패
                    joinClose();
                    Swal.fire({
                        width: 460,
                        height: 260,
                        html: '<b> 회원가입 실패</b><br><br>이미 존재하는 닉네임입니다',
                        showConfirmButton: false,
                        cancelButtonText: '확인',
                        cancelButtonColor: '#CF5E53',
                        showCancelButton: true,
                        background: '#fff url(/image/swalBackground.png)',
                        timer: 5000,
                    });
                } else if (err.response.data === 'userEmail') {
                    joinClose();
                    Swal.fire({
                        width: 460,
                        height: 260,
                        html: '<b> 회원가입 실패</b><br><br>이미 존재하는 이메일입니다',
                        showConfirmButton: false,
                        cancelButtonText: '확인',
                        cancelButtonColor: '#CF5E53',
                        showCancelButton: true,
                        background: '#fff url(/image/swalBackground.png)',
                        timer: 5000,
                    });
                } //중복된 이메일로 회원가입 실패
            });
    };

    //form 전송
    const handleSubmit = event => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        console.log('data', data);
        const joinData = {
            id: data.get('id'),
            password: data.get('password'),
            name: data.get('name'),
            rePassword: data.get('rePassword'),
        };
        const { id, password, name, rePassword } = joinData;
        console.log('id', id);
        console.log('password', password);
        console.log('name', name);
        console.log('rePassword', rePassword);

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

        // const nameRegex = /^[가-힣a-zA-Z]+$/;
        // if (!nameRegex.test(name) || name.length < 1)
        //   setNameError('올바른 이름을 입력해주세요.');
        // else setNameError('');
        // 비밀번호 같은지 체크

        if (password !== rePassword)
            setPasswordError('비밀번호가 일치하지 않습니다.');
        else setPasswordError('');

        // 이름 유효성 체크

        // 회원가입 동의 체크
        if (!checked || !privateChecked) setCheckedError('약관에 동의해주세요');
        else setCheckedError('');

        // 모두 통과하면 post되는 코드 실행

        if (
            // nameRegex.test(name) &&
            idRegrex.test(id) &&
            passwordRegex.test(password) &&
            password === rePassword &&
            checked &&
            privateChecked
        ) {
            console.log('joinData', joinData);
            onhandlePost(joinData);
        }
    };

    return (
        <ThemeProvider theme={theme}>
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
                <Box
                    sx={{
                        m: 1,
                        width: 218,
                        height: 71,
                    }}
                >
                    <img
                        src="../../image/logo_mouseon.png"
                        alt="로고"
                        width="218px"
                        height="71px"
                    ></img>
                </Box>
                <Boxs
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                >
                    <FormControl component="fieldset" variant="standard">
                        {/* 아이디 입력 폼 */}
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
                                    autoComplete="id" //자동완성 기능
                                    placeholder="이메일 입력 (ex. chartinbox@gmail.com)"
                                    autoFocus
                                    error={idError !== '' || false}
                                />
                                <FormHelperTexts>{idError}</FormHelperTexts>
                            </Grid>

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
                                <FormHelperTexts>
                                    {passwordState}
                                </FormHelperTexts>
                            </Grid>

                            {/* 비밀번호 재입력 폼 */}
                            <Grid item xs={12} sx={{ marginBottom: 3 }}>
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
                                <FormHelperTexts>
                                    {passwordError}
                                </FormHelperTexts>
                            </Grid>
                            <Grid item xs={12} sx={{ marginBottom: 3 }}>
                                <Typography
                                    sx={{
                                        color: 'black',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        textAlign: 'left',
                                    }}
                                >
                                    닉네임{' '}
                                </Typography>

                                <TextField
                                    variant="standard"
                                    required
                                    fullWidth
                                    name="name"
                                    placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                                    id="name"
                                    autoComplete="name"
                                    error={nameError !== '' || false}
                                />
                                <FormHelperTexts>{nameError}</FormHelperTexts>
                            </Grid>

                            {/* 이용약관 체크 박스 */}
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={handleAgree}
                                                color="primary"
                                                size="small"
                                            />
                                        }
                                        label="이용약관 동의"
                                        labelPlacement="end"
                                    />
                                    <Button
                                        href="/terms"
                                        target="_blank"
                                        sx={{
                                            fontSize: '12px',
                                        }}
                                    >
                                        이용약관 보기
                                    </Button>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    {' '}
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={handlePrivateAgree}
                                                color="primary"
                                                size="small"
                                            />
                                        }
                                        label="개인정보처리방침 동의"
                                        labelPlacement="end"
                                    />
                                    <Button
                                        href="/privatepolicy"
                                        target="_blank"
                                        sx={{
                                            fontSize: '12px',
                                        }}
                                    >
                                        이용약관 보기
                                    </Button>
                                </Box>

                                <FormHelperTexts>
                                    {checkedError}
                                </FormHelperTexts>
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
                            <Button onClick={clickLogin}>
                                이미 계정이 있으신가요?&nbsp;&nbsp;&nbsp;
                                <b> 로그인 하기</b>
                            </Button>
                        </Grid>
                    </Grid>
                </Boxs>
            </Box>
        </ThemeProvider>
    );
}
export default Join;
