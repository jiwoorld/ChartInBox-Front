// import axios from 'axios';
import React, { useState } from 'react';
import {
    TextField,
    Button,
    Grid,
    FormControl,
    Box,
    FormHelperText,
} from '@mui/material/';
import './Join.css';
function JoinForm() {
    const path = 'http://localhost:8080';
    const [emailError, setEmailError] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [registerError, setRegisterError] = useState('');

    const onhandlePost = async data => {
        const { email, password, name } = data;
        const postData = { email, password, name };

        // await axios
        //     .post(path + '/', postData)
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (err) {
        //         console.log(err);
        //         setRegisterError('회원가입 실패');
        //     });
    };
    const handleClick = e => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const joinData = {
            email: data.get('email'),
            password: data.get('password'),
            name: data.get('name'),
            rePassword: data.get('rePassword'),
        };
        const { email, password, name, rePassword } = joinData;

        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!emailRegex.test(email))
            setEmailError('이메일 형식이 올바르지 않습니다');
        else setEmailError('');

        const passwordRegex =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegex.test(password))
            setPasswordState(
                '영문 숫자 특수문자를 포함한 8자이상의 비밀번호를 설정해주세요',
            );
        else setPasswordState('');

        if (password !== rePassword)
            setPasswordError('비밀번호가 일치하지 않습니다.');
        else setPasswordError('');

        const nameRegex = /^[가-힣a-zA-Z]+$/;
        if (!nameRegex.test(name) || name.length < 1)
            setNameError('올바른 이름을 입력해주세요.');
        else setNameError('');

        if (
            emailRegex.test(email) &&
            passwordRegex.test(password) &&
            password === rePassword &&
            nameRegex.test(name)
        ) {
            onhandlePost(joinData);
        }
    };
    return (
        <div class="overall">
            <Box component="form" onSubmit={handleClick} class="a">
                <FormControl
                    component="fieldset"
                    variant="standard"
                    class="form"
                >
                    <div class="buttonDiv">
                        <button id="top">logo</button>
                    </div>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="이메일(아이디)"
                            margin="normal"
                            placeholder="이메일 입력 (ex. charinbox@gmail.com)"
                            name="email"
                            variant="standard"
                            error={emailError !== '' || false}
                            helperText={emailError}
                        />
                        <TextField
                            required
                            fullWidth
                            id="password"
                            label="비밀번호"
                            margin="normal"
                            placeholder="영문,숫자,특수문자를 포함한 8자"
                            name="password"
                            variant="standard"
                            error={passwordState !== '' || false}
                            helperText={passwordState}
                        />
                        <TextField
                            required
                            fullWidth
                            id="rePassword"
                            placeholder="비밀번호 재입력"
                            margin="normal"
                            name="rePassword"
                            variant="standard"
                            error={passwordError !== '' || false}
                            helperText={passwordError}
                        />
                        <TextField
                            required
                            fullWidth
                            id="name"
                            label="닉네임"
                            margin="normal"
                            placeholder="닉네임을 입력해주세요"
                            name="name"
                            variant="standard"
                            error={nameError !== '' || false}
                            helperText={nameError}
                        />
                        <div class="buttonDiv">
                            <Button
                                type="submit"
                                variant="contained"
                                size="big"
                                color="secondary"
                            >
                                회원가입
                            </Button>
                        </div>
                    </Grid>
                    <FormHelperText>{registerError}</FormHelperText>
                </FormControl>
            </Box>
        </div>
    );
}

export default JoinForm;
