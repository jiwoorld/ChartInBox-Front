import React from 'react';
import {
    Box,
    Button,
    createTheme,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    ThemeProvider,
    Typography,
} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import freeboarddata from '../../testdata/freeboarddata.json';

function BoardTable(props) {
    /* function createData(title, author, date, view, like) {
        return { title, author, date, view, like };
    } */
    const tableName = props.tableName;
    /* const rows = [
        createData('알리딘 포디엑스 본 사람?', '양윤서', '22.01.03', 34, 7),
        createData('알리딘 포디엑스 본 사람?', '김다은', '22.01.03', 34, 7),
        createData('알리딘 포디엑스 본 사람?', '이지현', '22.01.03', 34, 7),
        createData('알리딘 포디엑스 본 사람?', '곽지우', '22.01.03', 34, 7),
        createData('알리딘 포디엑스 본 사람?', '박가현', '22.01.03', 34, 7),
        createData('알리딘 포디엑스 본 사람?', '양윤서', '22.01.03', 34, 7),
        createData('알리딘 포디엑스 본 사람?', '김다은', '22.01.03', 34, 7),
        createData('알리딘 포디엑스 본 사람?', '이지현', '22.01.03', 34, 7),
        createData('알리딘 포디엑스 본 사람?', '곽지우', '22.01.03', 34, 7),
        createData('알리딘 포디엑스 본 사람?', '박가현', '22.01.03', 34, 7),
    ]; */

    {
        /* <div className="list_day">
        {freeboarddata.boardList.map(postTitle => (
            <li key={postTitle.postId}>Day {postTitle.postTitle}</li>
        ))}
    </div>; */
    }

    /* const postIddata = freeboarddata.map((item, index) => {
        return <div key={index}>{item.boardList.postId}</div>;
    });

    const postIddatapostTitle = freeboarddata.map((item, index) => {
        return <div key={index}>{item.postTitle}</div>;
    });

    const postIddatapostDate = freeboarddata.map((item, index) => {
        return <div key={index}>{item.postDate}</div>;
    });

    const postIddatacountVisit = freeboarddata.map((item, index) => {
        return <div key={index}>{item.countVisit}</div>;
    }); */

    const theme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            secondary: {
                main: '#CF5E53',
            },
            third: {
                main: '#001F28',
            },
            background: {
                default: 'white',
            },
            text: {
                primary: '#001F28',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    const [time, setTime] = React.useState('');
    const handleTimeChange = event => {
        setTime(event.target.value);
    };

    const [scope, setScope] = React.useState('');
    const handleScopeChange = event => {
        setScope(event.target.value);
    };

    const [lineup, setLineup] = React.useState('');
    const handleLineupChange = event => {
        setLineup(event.target.value);
    };

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    //height: '45rem',
                    //textAlign: 'center',
                    //justifyContent: 'center',
                    //alignItems: 'center',
                    display: 'flex',
                    //alignItems: 'flex-start',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        height: '1.75rem',
                        display: 'flex',
                        //justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        mb: 1,
                    }}
                >
                    <Box
                        sx={{
                            width: '76%',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: '600',
                                textAlign: 'left',
                                fontSize: '1.313rem',
                            }}
                        >
                            {tableName}
                        </Typography>
                    </Box>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="스포포함"
                        />
                    </FormGroup>
                    <Box
                        sx={{
                            maxWidth: '10rem',
                            Height: '3rem',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Box sx={{ m: '0.3rem', mt: -1.5 }}>
                            <FormControl fullWidth>
                                <Select
                                    displayEmpty
                                    inputProps={{
                                        'aria-label': 'Without label',
                                    }}
                                    value={lineup}
                                    label="Lineup"
                                    onChange={handleLineupChange}
                                >
                                    <MenuItem value="">최신순</MenuItem>
                                    <MenuItem value={10}>조회순</MenuItem>
                                    <MenuItem value={20}>좋아요순</MenuItem>
                                    <MenuItem value={30}>댓글순</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <TableContainer>
                        <Table
                            sx={{
                                mt: '1.4rem',
                                borderTop: '1px solid black',
                                borderRight: '1px solid white',
                                borderLeft: '1px solid white',
                            }}
                            aria-label="simple table"
                        >
                            <TableHead
                                sx={{
                                    borderTop: '0.063rem solid black',
                                    borderRight: '1px solid white',
                                    borderLeft: '1px solid white',
                                    borderBottom: '0.063rem solid #D9D9D9',
                                }}
                            >
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            width: '35.4rem',
                                            textAlign: 'center',
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            borderLeft: 0,
                                        }}
                                    >
                                        제목
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            width: '8.4rem',
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                        }}
                                    >
                                        작성자
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            width: '11.4rem',
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                        }}
                                    >
                                        작성일
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            width: '4.4rem',
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                        }}
                                    >
                                        조회
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            width: '4.4rem',
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                        }}
                                    >
                                        좋아요
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody
                                sx={{ borderBottom: '0.063rem solid #D9D9D9' }}
                            >
                                {freeboarddata.boardList.map(postId => (
                                    <TableRow>
                                        <TableCell
                                            key={postId.postTitle}
                                            component="th"
                                            scope="row"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                borderBottom:
                                                    '0.063rem solid #D9D9D9',
                                            }}
                                        >
                                            {postId.postTitle}
                                        </TableCell>
                                        <TableCell
                                            key={postId.postUserNickname}
                                            component="th"
                                            scope="row"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                borderBottom:
                                                    '0.063rem solid #D9D9D9',
                                            }}
                                        >
                                            {postId.postUserNickname}
                                        </TableCell>
                                        <TableCell
                                            key={postId.postDate}
                                            component="th"
                                            scope="row"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                borderBottom:
                                                    '0.063rem solid #D9D9D9',
                                            }}
                                        >
                                            {postId.postDate}
                                        </TableCell>
                                        <TableCell
                                            key={postId.countVisit}
                                            component="th"
                                            scope="row"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                borderBottom:
                                                    '0.063rem solid #D9D9D9',
                                            }}
                                        >
                                            {postId.countVisit}
                                        </TableCell>
                                        <TableCell
                                            key={postId.postLike}
                                            component="th"
                                            scope="row"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                borderBottom:
                                                    '0.063rem solid #D9D9D9',
                                            }}
                                        >
                                            {postId.postLike}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box
                        sx={{
                            height: '3.125rem',
                            display: 'flex',
                            //mr: 'auto',
                            justifyContent: 'flex-end',
                            mt: '0.2rem',
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: '#EDEDED',
                                color: 'black',
                                width: '4.063rem',
                                height: '2.188rem',
                                borderRadius: '0.25rem',
                                opacity: '70%',
                            }}
                        >
                            글쓰기
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            ml: 14,
                            display: 'flex',
                            justifyContent: 'space-around',
                            width: '38.45rem',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ height: '2.18rem', m: '0.3rem' }}>
                            <FormControl fullWidth sx={{ width: '7.45rem' }}>
                                <Select
                                    displayEmpty
                                    inputProps={{
                                        'aria-label': 'Without label',
                                    }}
                                    value={time}
                                    label="Time"
                                    onChange={handleTimeChange}
                                >
                                    <MenuItem value="">전체기간</MenuItem>
                                    <MenuItem value={10}>1일</MenuItem>
                                    <MenuItem value={20}>1주</MenuItem>
                                    <MenuItem value={30}>한 달</MenuItem>
                                    <MenuItem value={40}>6개월</MenuItem>
                                    <MenuItem value={50}>1년</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ height: '2.18rem', m: '0.3rem' }}>
                            <FormControl fullWidth sx={{ width: '7.45rem' }}>
                                <Select
                                    value={scope}
                                    label="Scope"
                                    displayEmpty
                                    inputProps={{
                                        'aria-label': 'Without label',
                                    }}
                                    onChange={handleScopeChange}
                                >
                                    <MenuItem value="">제목+내용</MenuItem>
                                    <MenuItem value={10}>제목만</MenuItem>
                                    <MenuItem value={20}>본문만</MenuItem>
                                    <MenuItem value={30}>댓글만</MenuItem>
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
                            inputProps={{ 'aria-label': 'search google maps' }}
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
        </ThemeProvider>
    );
}

export default BoardTable;
