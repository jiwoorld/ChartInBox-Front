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
import Swal from 'sweetalert2';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MovieInformation from '../../components/board/MovieInfomation';

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
    const [allData, setAllData] = React.useState({});
    const [detail, setdetail] = React.useState({});
    const [comment, setcomment] = React.useState({});
    const [name, setname] = React.useState({});

    const postId = useParams();
    const url = postId.id;

    let like = false;
    useEffect(() => {
        axios
            .get('/dummydata/showingboarddata.json')
            .then(function (response) {
                console.log('RRr' + response.data);
                setAllData(response.data);
                setdetail(response.data.postDetail);
                setcomment(response.data.comments);
                setname(response.data.userNickname);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [url, like]);

    const handleLike = () => {
        axios
            .post(`/movie-info/${url}/like`)
            .then(function (response) {
                like = !like;
            })
            .catch(function (error) {
                if (error.response.data === false) {
                    Swal.fire({
                        width: 460,
                        height: 260,
                        html: '좋아요가 등록되지 않았습니다',
                        showConfirmButton: false,
                        cancelButtonText: '확인',
                        cancelButtonColor: '#CF5E53',
                        showCancelButton: true,
                    });
                }
            });
    };
    like = allData?.movieLike;
    const [value, setValue] = React.useState('Controlled');
    /* const a = detail.postDate;
    const b = a.split('T');
    const b1 = b[0];
    const b2 = b[1];
    const d = b1 + ' ' + b2; */

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
                            href="../write"
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
                                    pt: 1,
                                    pb: 2,
                                    borderBottom: '1px solid #0000001A',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '1.5rem',
                                        fontWeight: '400',
                                        textAlign: 'left',
                                    }}
                                >
                                    {detail.postTitle}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: '59.5rem',
                                    pt: 1.5,
                                    pb: 2,
                                    borderBottom: '1px solid #0000001A',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    sx={{
                                        pl: 1,
                                        width: '36.25rem',
                                        fontSize: '1.5rem',
                                        fontWeight: '500',
                                        textAlign: 'left',
                                        fontSize: '0.875rem',
                                        color: '#757575',
                                    }}
                                >
                                    {detail.postUserNickname}
                                </Typography>
                                <Typography
                                    sx={{
                                        width: '9.375rem',
                                        fontSize: '1.5rem',
                                        fontWeight: '500',
                                        textAlign: 'left',
                                        fontSize: '0.875rem',
                                        color: '#757575',
                                    }}
                                >
                                    {detail.postDate}
                                </Typography>
                                <Typography
                                    sx={{
                                        width: '3.375rem',
                                        fontSize: '1.5rem',
                                        fontWeight: '500',
                                        textAlign: 'left',
                                        fontSize: '0.875rem',
                                        color: '#757575',
                                    }}
                                >
                                    조회 {detail.countVisit}
                                </Typography>
                                <Typography
                                    sx={{
                                        width: '4.375rem',
                                        fontSize: '1.5rem',
                                        fontWeight: '500',
                                        textAlign: 'left',
                                        fontSize: '0.875rem',
                                        color: '#757575',
                                    }}
                                >
                                    좋아요 {detail.postLike}
                                </Typography>
                                <Typography
                                    sx={{
                                        width: '4.375rem',
                                        fontSize: '1.5rem',
                                        fontWeight: '500',
                                        textAlign: 'left',
                                        fontSize: '0.875rem',
                                        color: '#757575',
                                    }}
                                >
                                    댓글 {detail.postComment}
                                </Typography>
                            </Box>
                            <Box //본문
                                sx={{
                                    width: '59.5rem',
                                    minHeight: '35rem',
                                    pb: 5,
                                    borderBottom: '2px solid #0000001A',
                                    //display: 'flex',
                                }}
                            >
                                <Typography
                                    sx={{
                                        height: '70%',
                                        pl: 1,
                                        pt: 3,
                                        fontSize: '1.5rem',
                                        fontWeight: '400',
                                        textAlign: 'left',
                                    }}
                                >
                                    {detail.postContent}
                                </Typography>

                                <MovieInformation></MovieInformation>

                                {like ? (
                                    {
                                        /* <Button
                                        onClick={() => handleLike()}
                                        variant="contained"
                                        endIcon={<ThumbUpAltIcon />}
                                        sx={{
                                            '&:hover,&.Mui-focusVisible': {
                                                backgroundColor: '#C2C2C2',
                                            },
                                            width: '3rem',
                                            color: 'white',
                                            backgroundColor: 'black',
                                        }}
                                    >
                                        좋아요
                                    </Button> */
                                    }
                                ) : (
                                    <Button
                                        onClick={() => handleLike()}
                                        variant="contained"
                                        endIcon={<ThumbUpAltIcon />}
                                        sx={{
                                            '&:hover,&.Mui-focusVisible': {
                                                backgroundColor: '#C2C2C2',
                                            },
                                            color: 'black',
                                            backgroundColor: 'white',
                                            mt: 3,
                                        }}
                                    >
                                        좋아요
                                    </Button>
                                )}
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
