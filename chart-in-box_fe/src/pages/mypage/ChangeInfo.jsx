import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBar from '../../components/menubar/MenuBar';
import Swal from 'sweetalert2';
import Footer from '../../components/footer/Footer';

const FormHelperTexts = styled(FormHelperText)`
    width: 100%;
    padding-left: 1px;
    font-weight: 500 !important;
    color: #d32f2f !important;
`;

function ChangeInfo({ changeClose }) {
    const theme = createTheme({
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });

    const [checked, setChecked] = useState(false);
    const [passwordState, setPasswordState] = useState(''); //비밀번호 입력
    const [passwordError, setPasswordError] = useState(''); //비밀번호 재입력
    const [nameError, setNameError] = useState('');

    const onhandleNickNamePost = async data => {
        const { userEmail, newNickname } = data;
        const postData = { userEmail, newNickname };
        postData.userEmail = data.id;
        postData.newNickname = data.name;
        console.log(postData, 'postData');

        await axios
            .post('http://localhost:8080/my-page/edit/nickname', postData)
            .then(res => {
                let submitBtn = document.getElementById('submit');
                submitBtn.addEventListener('click', function (e) {
                    this.setAttribute('disabled', 'true');
                    this.setAttribute('disabledElevation', 'true');
                    this.setAttribute('disabledRipple', 'true');
                    console.log('성공');
                });
                Swal.fire({
                    width: 460,
                    height: 260,
                    html: '성공',
                    showConfirmButton: false,
                    cancelButtonText: '확인',
                    cancelButtonColor: '#CF5E53',
                    showCancelButton: true,
                    background: '#fff url(/image/swalBackground.png)',
                    timer: 5000,
                }); //닉네임변경성공
            })
            .catch(err => {
                console.log('error남', err);
                console.log(err.response.data);
                if (err.response.data === 'newNickname') {
                    changeClose();
                    Swal.fire({
                        width: 460,
                        height: 260,
                        html: '<b> 변경 실패</b><br><br>이미 존재하는 닉네임입니다',
                        showConfirmButton: false,
                        cancelButtonText: '확인',
                        cancelButtonColor: '#CF5E53',
                        showCancelButton: true,
                        background: '#fff url(/image/swalBackground.png)',
                        timer: 5000,
                    });
                }
            });
    };
    const onhandlePasswordPost = async data => {
        const { userEmail, userPassword, newPassword } = data;
        const postData = { userEmail, userPassword, newPassword };
        postData.userEmail = data.id;
        postData.userPassword = data.password;
        postData.newPassword = data.newpassword;
        console.log(postData, 'postData');

        await axios
            .post('http://localhost:8080/my-page/edit/password', postData)
            .then(res => {
                let submitBtn = document.getElementById('submit');
                submitBtn.addEventListener('click', function (e) {
                    this.setAttribute('disabled', 'true');
                    this.setAttribute('disabledElevation', 'true');
                    this.setAttribute('disabledRipple', 'true');
                    console.log('성공');
                });
                Swal.fire({
                    width: 460,
                    height: 260,
                    html: '성공',
                    showConfirmButton: false,
                    cancelButtonText: '확인',
                    cancelButtonColor: '#CF5E53',
                    showCancelButton: true,
                    background: '#fff url(/image/swalBackground.png)',
                    timer: 5000,
                }); //비밀번호변경성공
            })
            .catch(err => {
                console.log('error남', err);
                console.log(err.response.data);
                if ('userPassword' !== 'userPassword') {
                    changeClose();
                    Swal.fire({
                        width: 460,
                        height: 260,
                        html: '비밀번호가 서로 다릅니다',
                        showConfirmButton: false,
                        cancelButtonText: '확인',
                        cancelButtonColor: '#CF5E53',
                        showCancelButton: true,
                        background: '#fff url(/image/swalBackground.png)',
                        timer: 5000,
                    });
                }
            });
    };

    const handleNicknameSubmit = event => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        console.log('data', data);

        const reviseData = {
            name: data.get('name'),
        };

        const { name } = reviseData;
        console.log('name', name);

        onhandleNickNamePost(reviseData);
    };

    const handlePasswordSubmit = event => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        console.log('data', data);

        const reviseData = {
            id: data.get('id'),
            password: data.get('password'),
            newpassword: data.get('newpassword'),
        };

        const { id, password, newpassword } = reviseData;
        console.log('id', id);
        console.log('password', password);
        console.log('newpassword', newpassword);

        onhandleNickNamePost(reviseData);
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
                        href="edit"
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
                                    className="change"
                                    onSubmit={handleNicknameSubmit}
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
                                onSubmit={handlePasswordSubmit}
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
                            mb: 14,
                        }}
                    >
                        <Button
                            href="/my-page"
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
            </main>
            <Footer></Footer>
        </ThemeProvider>
    );
}
export default ChangeInfo;
