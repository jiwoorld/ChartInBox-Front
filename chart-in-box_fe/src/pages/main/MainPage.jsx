import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Join from '../../components/sign/Join';
import Login from '../../components/sign/Login';
import ChangePassword from '../../components/sign/ChangePassword';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function MainPage() {
    const [joinOpen, setJoinOpen] = React.useState(false);
    const handleJoinOpen = () => setJoinOpen(true);
    const handleJoinClose = () => setJoinOpen(false);

    const [loginOpen, setLoginOpen] = React.useState(false);
    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const [changePasswordOpen, setChangePasswordOpen] = React.useState(false);
    const handleChangePasswordOpen = () => setChangePasswordOpen(true);
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
    return (
        <div>
            <Button onClick={handleJoinOpen}>회원가입</Button>
            <Modal open={joinOpen} onClose={handleJoinClose}>
                <Box sx={style}>
                    <Join clickLogin={clickLogin} joinClose={joinClose} />
                </Box>
            </Modal>
            <Button onClick={handleLoginOpen}>로그인</Button>
            <Modal open={loginOpen} onClose={handleLoginClose}>
                <Box sx={style}>
                    <Login
                        clickJoin={clickJoin}
                        clickPassword={clickPassword}
                        loginClose={loginClose}
                    />
                </Box>
            </Modal>
            <Button onClick={handleChangePasswordOpen}>비밀번호 찾기</Button>
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
        </div>
    );
}
export default MainPage;
