import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FormGroup from '@mui/material/FormGroup';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBar from '../../components/menubar/MenuBar';
import { Paper } from '@mui/material';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { styled } from '@mui/material/styles';
import { borderBottom } from '@mui/system';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
//import ReactHtmlParser from 'react-html-parser';

function NWriting() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#333D41',
            },
            secondary: {
                main: '#757575',
            },
            line: {
                main: '#C2C2C2',
            },
            text: {
                primary: '#1A1A1A',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [ott, setOtt] = React.useState('');
    const handleOttChange = event => {
        setOtt(event.target.value);
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar></MenuBar>
            <Box
                sx={{
                    height: '60px',
                    width: '100%',
                    alignItems: 'left',
                    justifyContent: 'space-around',
                    borderTop: '0.063rem solid #D9D9D9',
                    borderBottom: '0.063rem solid #D9D9D9',
                }}
            >
                <Box
                    sx={{
                        ml: '8rem',
                        display: 'flex',
                        width: '55rem',
                        height: '60px',
                        justifyContent: 'space-around',
                    }}
                >
                    <Button
                        href="../totalnboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '0.875rem',
                            color: 'secondary.main',
                        }}
                    >
                        {' '}
                        전체글{' '}
                    </Button>
                    <Button
                        href="../netflexnboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '4500',
                            fontSize: '0.875rem',
                            color: 'secondary.main',
                        }}
                    >
                        {' '}
                        넷플릭스{' '}
                    </Button>
                    <Button
                        href="../watchanboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '4500',
                            fontSize: '0.875rem',
                            color: 'secondary.main',
                        }}
                    >
                        {' '}
                        왓차{' '}
                    </Button>
                    <Button
                        href="../tivingnboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            color: 'secondary.main',
                            fontSize: '0.875rem',
                        }}
                    >
                        {' '}
                        티빙{' '}
                    </Button>
                    <Button
                        href="../wavenboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            color: 'secondary.main',
                            fontSize: '0.875rem',
                        }}
                    >
                        {' '}
                        웨이브{' '}
                    </Button>
                    <Button
                        href="../disneynboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            color: 'secondary.main',
                            fontSize: '0.875rem',
                        }}
                    >
                        {' '}
                        디즈니{' '}
                    </Button>
                    <Button
                        href="../etcnboard"
                        sx={{
                            width: '31.25rem',
                            height: '60px',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            color: 'secondary.main',
                            fontSize: '0.875rem',
                        }}
                    >
                        {' '}
                        기타{' '}
                    </Button>
                </Box>
            </Box>
            <main>
                <Box
                    sx={{
                        pb: 1,
                        pt: 5,
                        width: '76.125rem',
                        borderBottom: 1,
                        display: 'flex',
                        alignItems: 'center',
                        margin: 'auto',
                        justifyContent: 'space-around',
                    }}
                >
                    <Typography
                        sx={{
                            width: '92%',
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            textAlign: 'left',
                        }}
                    >
                        글쓰기
                    </Typography>
                    <Button variant="outlined">등록</Button>
                </Box>
                <Container
                    sx={{
                        maxWidth: '85.125rem',
                        display: 'flex',
                        alignItems: 'center',
                        margin: 'auto',
                        pt: 3,
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': {
                                        /* pb: 2, */
                                        width: '53.5rem',
                                        /* mt: 3,*/
                                        // ml: -4,
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="제목을 입력해 주세요."
                                    variant="outlined"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box
                                sx={
                                    {
                                        //Height: '3rem',
                                        //alignItems: 'flex-start',
                                        /* ml: 3,
                                    pb: 2,
                                    mt: 3, */
                                    }
                                }
                            >
                                <FormControl sx={{ width: 300 }}>
                                    <Select
                                        displayEmpty
                                        inputProps={{
                                            'aria-label': 'Without label',
                                        }}
                                        value={ott}
                                        label="Ott"
                                        onChange={handleOttChange}
                                    >
                                        <MenuItem value="">넷플릭스</MenuItem>
                                        <MenuItem value={10}>왓챠</MenuItem>
                                        <MenuItem value={20}>티빙</MenuItem>
                                        <MenuItem value={30}>웨이브</MenuItem>
                                        <MenuItem value={40}>디즈니</MenuItem>
                                        <MenuItem value={50}>기타</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item xs={9}>
                            <Box
                                className="App"
                                sx={{
                                    '& > :not(style)': {
                                        /* pb: 2, */
                                        maxWidth: '53.5rem',
                                        /* mt: 3, */
                                        //ml: -21,
                                    },
                                }}
                            >
                                <CKEditor
                                    height="30rem"
                                    editor={ClassicEditor}
                                    config={{
                                        placeholder: '내용을 입력하세요.',
                                    }}
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log(
                                            'Editor is ready to use!',
                                            editor,
                                        );
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log('Focus.', editor);
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            {/*  <Box sx={{ border: 1 }}> */}
                            <Box
                                sx={{
                                    border: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    width: '18.8rem',
                                    p: '20px 15px 40px 7px',
                                    gap: '8px',
                                    border: 0,
                                    textAlign: 'left',
                                    borderRadius: '0.25rem',
                                    backgroundColor: '#F5F5F5',
                                }}
                            >
                                <Typography color={'#616161'}>
                                    • 차트인박스는 OTT 파티원을 구하기 위한
                                    게시판만 제공하며 회원 간 거래에 대하여
                                    일체의 책임을 지지 않습니다.{' '}
                                </Typography>{' '}
                                <Typography color={'#616161'}>
                                    •타인에게 불쾌감을 주는 욕설, 성적인 발언
                                    등이 포함된 글은 추후 운영진에 의해 삭제
                                    조치될 수 있습니다.
                                </Typography>
                            </Box>
                            <Button
                                align="left"
                                variant="contained"
                                endIcon={<ThumbUpAltIcon />}
                                sx={{
                                    backgroundColor: '#F2CB05',
                                    ml: -9,
                                    mt: 2.5,
                                }}
                            >
                                이 영화를 추천합니다.
                            </Button>
                            <Button
                                variant="contained"
                                endIcon={<ThumbDownAltIcon />}
                                sx={{
                                    backgroundColor: '#CF5E53',
                                    ml: -4.2,
                                    mt: 1,
                                }}
                            >
                                이 영화를 추천하지 않습니다.
                            </Button>
                            {/* <Button
                                variant="contained"
                                endIcon={<ThumbUpAltIcon />}
                                sx={{ backgroundColor: '#F2CB05' }}
                            >
                                이 영화를 추천합니다.
                            </Button>
                            <Button
                                variant="contained"
                                endIcon={<ThumbDownAltIcon />}
                                sx={{ backgroundColor: '#CF5E53' }}
                            >
                                이 영화를 추천하지 않습니다.
                            </Button> */}
                            {/* </Box> */}
                        </Grid>
                    </Grid>
                </Container>
            </main>

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
export default NWriting;
