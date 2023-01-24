import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBar from '../../components/menubar/MenuBar';
import MovietalkMenuBar from '../../components/menubar/MovietalkMenuBar';
import MovietalkSubBar from '../../components/menubar/MovietalkSubBar';
import MyInformation from '../../components/board/MyInformation';
import ShowingBoardTable from './ShowingBoardTable';
import { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShortTable from './ShortTable';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function ShowingBoard(props) {
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
    const [detail, setdetail] = React.useState({});
    const [comment, setcomment] = React.useState({});
    const [name, setname] = React.useState({});

    const postId = useParams();
    const url = postId.id;

    useEffect(() => {
        axios
            .get('/dummydata/showingboarddata.json')
            .then(function (response) {
                console.log('RRr' + response.data);
                setdetail(response.data.postDetail);
                setcomment(response.data.comments);
                setname(response.data.userNickname);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [url]);

    const [value, setValue] = React.useState('Controlled');

    const handleChange = event => {
        setValue(event.target.value);
    };
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar></MenuBar>
            <MovietalkMenuBar></MovietalkMenuBar>
            <main>
                <Container
                    sx={{
                        ml: '8rem',
                        mt: '1.4rem',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    {/* {detail.postTitle} */}
                    <Box sx={{ p: 1 }}>
                        <MyInformation></MyInformation>
                        <Button
                            href="../writing"
                            sx={{
                                width: '15.125rem',
                                fontSize: '0.938rem',
                                fontWeight: 800,
                                backgroundColor: '#EDEDED',
                                Color: 'black',
                                ml: '-1.4rem',
                                mb: '1.5rem',
                            }}
                        >
                            글쓰기
                        </Button>
                        <Box
                            sx={{
                                width: '16.625rem',
                                height: '16.625rem',
                                //border: 2,
                            }}
                        >
                            <MovietalkSubBar></MovietalkSubBar>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '59.5rem',
                            display: 'flex',
                        }}
                    >
                        <Box //글
                            sx={{
                                //alignItems: 'flex-start',
                                minHeight: '50rem',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box
                                sx={{
                                    width: '59.5rem',
                                    pb: 2,
                                    borderBottom: '1px solid #0000001A',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '1.5rem',
                                        fontWeight: '500',
                                        textAlign: 'left',
                                    }}
                                >
                                    {detail.postTitle}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: '59.5rem',
                                    pb: 2,
                                    borderBottom: '1px solid #0000001A',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '1.5rem',
                                        fontWeight: '500',
                                        textAlign: 'left',
                                    }}
                                >
                                    {detail.postUserNickname}
                                    {detail.postDate}
                                    {detail.countVisit}
                                </Typography>
                            </Box>
                            <Box //본문
                                sx={{
                                    width: '59.5rem',
                                    minHeight: '30rem',
                                    pb: 5,
                                    borderBottom: '2px solid #0000001A',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography
                                    sx={{
                                        height: '70%',
                                        pt: 3,
                                        fontSize: '1.5rem',
                                        fontWeight: '500',
                                        textAlign: 'left',
                                    }}
                                >
                                    {detail.postContent}
                                </Typography>
                                <Box sx={{ width: '100%', height: '107px' }}>
                                    영화정보
                                </Box>
                                <Button
                                    align="left"
                                    variant="contained"
                                    endIcon={<ThumbUpAltIcon />}
                                    sx={{
                                        backgroundColor: 'black',
                                    }}
                                >
                                    좋아요
                                </Button>
                            </Box>

                            <Box //댓글
                                sx={{
                                    //alignItems: 'flex-start',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    mt: 10,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        textAlign: 'left',
                                        fontStyle: 'noraml',
                                        borderBottom: '2px solid #0000001A',
                                        pb: 2,
                                    }}
                                >
                                    댓글
                                </Typography>
                                <Box
                                    sx={{
                                        borderBottom: '2px solid #0000001A',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                fontSize: '0.875rem',
                                                fontWeight: '600',
                                                textAlign: 'left',
                                                fontStyle: 'noraml',
                                                width: '80%',
                                                color: '#1A1A1A',
                                                pt: 2,
                                                pb: 1,
                                            }}
                                        >
                                            {comment.cmtUserNickname}
                                        </Box>
                                        <Box
                                            sx={{
                                                fontSize: '0.875rem',
                                                fontWeight: '600',
                                                textAlign: 'left',
                                                fontStyle: 'noraml',
                                                color: '#757575',
                                                mr: -5,
                                                pt: 2,
                                            }}
                                        >
                                            {comment.cmtDate} |
                                        </Box>
                                        <IconButton
                                            aria-label="delete"
                                            sx={{ pt: 3 }}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: '0.875rem',
                                            fontWeight: '400',
                                            textAlign: 'left',
                                            fontStyle: 'noraml',
                                            color: '#1A1A1A',
                                            pt: 2,
                                            pb: 3,
                                        }}
                                    >
                                        {comment.cmtContent}
                                    </Typography>
                                    <Box
                                        sx={{
                                            textAlign: 'right',
                                        }}
                                    >
                                        <Button
                                            size="small"
                                            sx={{
                                                alignContent: 'left',
                                                fontSize: '0.75rem',
                                                fontWeight: '400',
                                                color: '#424242',
                                            }}
                                        >
                                            답글 달기
                                        </Button>
                                    </Box>
                                </Box>
                                {/* <Box
                                    sx={{
                                        borderBottom: '2px solid #0000001A',
                                        pb: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                fontSize: '0.875rem',
                                                fontWeight: '600',
                                                textAlign: 'left',
                                                fontStyle: 'noraml',
                                                width: '80%',
                                                color: '#1A1A1A',
                                                pt: 2,
                                            }}
                                        >
                                            {comment.cmtUserNickname}
                                        </Box>
                                        <Box
                                            sx={{
                                                fontSize: '0.875rem',
                                                fontWeight: '600',
                                                textAlign: 'left',
                                                fontStyle: 'noraml',
                                                color: '#757575',
                                                mr: -5,
                                                pt: 2,
                                            }}
                                        >
                                            {comment.cmtDate} |
                                        </Box>
                                        <IconButton
                                            aria-label="delete"
                                            sx={{ pt: 3 }}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: '0.875rem',
                                            fontWeight: '400',
                                            textAlign: 'left',
                                            fontStyle: 'noraml',
                                            color: '#1A1A1A',
                                            pt: 2,
                                            pb: 3,
                                        }}
                                    >
                                        {comment.cmtDate}
                                    </Typography>
                                    <Box
                                        sx={{
                                            textAlign: 'right',
                                        }}
                                    >
                                        <Button
                                            size="small"
                                            sx={{
                                                alignContent: 'left',
                                                fontSize: '0.75rem',
                                                fontWeight: '400',
                                                color: '#424242',
                                            }}
                                        >
                                            답글 달기
                                        </Button>
                                    </Box>
                                </Box> */}
                            </Box>
                            <Box //댓글쓰기
                                component="form"
                                sx={{
                                    '& > :not(style)': {
                                        mt: 3,
                                        mb: 1,
                                        width: '59.5rem',
                                        //height: '5rem',
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    multiline
                                    maxRows={4}
                                    value={value}
                                    onChange={handleChange}
                                    label="댓글을 입력해주세요"
                                    variant="outlined"
                                    sx={{
                                        width: '59.5rem',
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    textAlign: 'right',
                                    mb: 8,
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        alignContent: 'left',
                                        fontSize: '0.75rem',
                                        fontWeight: '500',
                                        backgroundColor: '#F2CB05',
                                        borderRadius: '0.5rem',
                                        border: 0,
                                        color: '#1D192B',
                                        fontSize: '0.875rem',
                                    }}
                                >
                                    등록
                                </Button>
                            </Box>
                            <ShortTable></ShortTable>
                        </Box>
                    </Box>
                </Container>
            </main>
        </ThemeProvider>
    );
}
export default ShowingBoard;
