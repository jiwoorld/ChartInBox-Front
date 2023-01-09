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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { borderBottom } from '@mui/system';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
//import ReactHtmlParser from 'react-html-parser';

function Writing() {
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
    const [board, setBoard] = React.useState('');
    const handleBoardChange = event => {
        setBoard(event.target.value);
    };
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar></MenuBar>

            <main>
                <Box
                    sx={{
                        pb: 1,
                        pt: 3,
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
                            width: '70%',
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            textAlign: 'left',
                        }}
                    >
                        글쓰기
                    </Typography>
                    <div>
                        <Checkbox {...label} defaultChecked />
                        익명으로 작성하기
                    </div>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="스포포함"
                        />
                    </FormGroup>
                    <Button variant="outlined">등록</Button>
                </Box>
                <Container
                    Width="76.125rem"
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {
                                pb: 2,
                                width: '53.5rem',
                                mt: 3,
                                ml: -2,
                                //flexDirection: 'row',
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

                    <Box
                        sx={{
                            Height: '3rem',
                            alignItems: 'flex-start',
                            ml: 3,
                            pb: 2,
                            mt: 3,
                        }}
                    >
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <Select
                                displayEmpty
                                inputProps={{
                                    'aria-label': 'Without label',
                                }}
                                value={board}
                                label="Board"
                                onChange={handleBoardChange}
                            >
                                <MenuItem value="">리뷰게시판</MenuItem>
                                <MenuItem value={10}>자유게시판</MenuItem>
                                <MenuItem value={20}>Q&A</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Container>
                <Container
                    Width="76.125rem"
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        //margin: 'auto',
                    }}
                >
                    <div
                        className="App"
                        sx={{
                            '& > :not(style)': {
                                pb: 2,
                                width: '53.5rem',
                                mt: 3,
                                ml: -2,
                            },
                        }}
                    >
                        <CKEditor
                            Width="76.125rem"
                            editor={ClassicEditor}
                            config={{
                                placeholder: '내용을 입력하세요.',
                            }}
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
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
                    </div>
                    <Box>df</Box>
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
export default Writing;
