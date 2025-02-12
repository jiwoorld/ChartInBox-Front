import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBar from '../../components/menubar/MenuBar';
import Commenttable from '../../components/board/Commenttable';
import MovietalkMenuBar from '../../components/menubar/MovietalkMenuBar';
import MovietalkSubBar from '../../components/menubar/MovietalkSubBar';
import MyInformation from '../../components/board/MyInformation';
import ShowingBoardTable from './ShowingBoardTable';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { getSelectUtilityClasses } from '@mui/material/Select';
import ShortTable from './ShortTable';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Swal from 'sweetalert2';
import Footer from '../../components/footer/Footer';

function ShowingBoard() {
    const [time, setTime] = React.useState('');
    const handleTimeChange = event => {
        setTime(event.target.value);
    };

    const [scope, setScope] = React.useState('');
    const handleScopeChange = event => {
        setScope(event.target.value);
    };

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
    // const [detail, setdetail] = React.useState({});
    // const [comment, setcomment] = React.useState([]);
    // const [name, setname] = React.useState({});
    // const [info, setInfo] = React.useState({});
    // const [post, setPost] = React.useState([]);

    const postId = useParams();
    const url = postId.id;

    let like = false;

    console.log(url);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/movie-talk/${url}`)
            // .get('/dummydata/showingboarddata.json')
            .then(function (response) {
                console.log(response);
                setAllData(response.data);
                // setdetail(response.data.postDetail);
                // setcomment(response.data.comments);
                // setname(response.data.userNickname);
                // setInfo(response.data.movieInfo);
                // setPost(response.data.postList);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const detail = allData?.postDetail ?? [];
    const comment = allData?.comments ?? [];
    const name = allData?.userNickname ?? [];
    const info = allData?.movieInfo ?? null;
    const post = allData?.postList ?? [];

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
                                    pb: 7,
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
                                <Box
                                    sx={{
                                        displey: 'flex',
                                        direction: 'row',
                                        height: '6rem',
                                    }}
                                >
                                    {/* <MovieInformation></MovieInformation> */}
                                    
                                    {info ? <Box
                                        sx={{
                                            width: '59.5rem',
                                            height: '6.688rem',
                                            backgroundColor: '#F5F5F5',
                                            direction: 'row',
                                            alignItems: 'space-between',
                                            display: 'flex',
                                        }}
                                    >
                                        <Box
                                            /* sx={{
                                                display: 'flex',
                                                width: '3.375rem',
                                                height: '4.497rem',
                                                backgroundColor: 'black',
                                                mt: 2,
                                                ml: 3,
                                            }} */
                                            sx={{
                                                display: 'flex',
                                                width: '3.375rem',
                                                height: '4.497rem',
                                                background: `url(${info.mvPoster})`,
                                                backgroundSize:
                                                    '3.375rem 4.497rem',
                                                resizeMode: 'stretch',
                                                mt: 2,
                                                ml: 3,
                                            }}
                                        ></Box>
                                        <Box
                                            sx={{
                                                width: '50%',
                                                display: 'flex',
                                                mt: 3.5,
                                                flexDirection: 'column',
                                                alignItems: 'column',
                                                textAlign: 'left',
                                                pl: 3,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    pb: 1,
                                                }}
                                            >
                                                {info.mvTitle}
                                            </Box>
                                            <Box
                                                sx={{
                                                    fontSize: '0.625rem',
                                                    fontWeight: 400,
                                                }}
                                            >
                                                {info.mvGenre} |{' '}
                                                {info.mvRuntime} |{' '}
                                                {info.mvRating}
                                            </Box>
                                        </Box>
                                        <Button
                                            align="left"
                                            variant="contained"
                                            endIcon={<ThumbUpAltIcon />}
                                            sx={{
                                                mr: -10,
                                                backgroundColor: '#F2CB05',
                                                height: '2rem',
                                                display: 'flex',
                                                margin: 'auto',
                                                width: '9.375rem',
                                                borderRadius: '0.25rem',
                                                fontSize: '0.65rem',
                                            }}
                                        >
                                            이 영화를 추천합니다
                                        </Button>
                                    </Box> : null}
                                </Box>
                                {/*{like ? (
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
                                    </Button> 
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
                                        mt: 5,
                                    }}
                                >
                                    좋아요
                                </Button>)}*/}
                            </Box>
                            {comment ? <Commenttable data={comment}></Commenttable>  : null}
                            {<ShortTable data={post}></ShortTable>}
                            <Box
                                sx={{
                                    ml: 14,
                                    mt: 4,
                                    mb: 10,
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    width: '38.45rem',
                                    alignItems: 'center',
                                }}
                            >
                                <Box sx={{ height: '2.18rem', m: '0.3rem' }}>
                                    <FormControl
                                        fullWidth
                                        sx={{ width: '7.45rem' }}
                                    >
                                        <Select
                                            displayEmpty
                                            inputProps={{
                                                'aria-label': 'Without label',
                                            }}
                                            value={time}
                                            label="Time"
                                            onChange={handleTimeChange}
                                        >
                                            <MenuItem value="">
                                                전체기간
                                            </MenuItem>
                                            <MenuItem value={10}>1일</MenuItem>
                                            <MenuItem value={20}>1주</MenuItem>
                                            <MenuItem value={30}>
                                                한 달
                                            </MenuItem>
                                            <MenuItem value={40}>
                                                6개월
                                            </MenuItem>
                                            <MenuItem value={50}>1년</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ height: '2.18rem', m: '0.3rem' }}>
                                    <FormControl
                                        fullWidth
                                        sx={{ width: '7.45rem' }}
                                    >
                                        <Select
                                            value={scope}
                                            label="Scope"
                                            displayEmpty
                                            inputProps={{
                                                'aria-label': 'Without label',
                                            }}
                                            onChange={handleScopeChange}
                                        >
                                            <MenuItem value="">
                                                제목+내용
                                            </MenuItem>
                                            <MenuItem value={10}>
                                                제목만
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                본문만
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                댓글만
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <InputBase
                                    sx={{
                                        ml: 1,
                                        flex: 1,
                                        mt: 2.4,
                                        border: '0.031rem solid #757575',
                                        borderRadius: '0.25rem',
                                        width: '15.688rem',
                                        height: '3.25rem',
                                        fontStyle: 'normal',
                                        fontWeight: '300',
                                        fontSize: '0.938rem',
                                    }}
                                    placeholder="  검색어를 입력하세요"
                                    inputProps={{
                                        'aria-label': 'search google maps',
                                    }}
                                />
                                <Button
                                    sx={{
                                        m: '0.3rem',
                                        backgroundColor: '#EDEDED',
                                        color: '#757575',
                                        width: '4.063rem',
                                        mt: 2.7,
                                        height: '3.25rem',
                                        borderRadius: '0.25rem',
                                        opacity: '70%',
                                    }}
                                >
                                    검색
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </main>
            <Footer></Footer>
        </ThemeProvider>
    );
}
export default ShowingBoard;
