import React from 'react';
import {
    Box,
    Button,
    createTheme,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    ThemeProvider,
    Typography,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import commentdata from '../../testdata/commentdata.json';

function MycommentTable(props) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    /* function createData(title, author, date, view, like) {
        return { title, author, date, view, like };
    }
    

    const rows = [
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
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
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
                                    <TableCell></TableCell>
                                    <TableCell
                                        sx={{
                                            width: '42.4rem',
                                            textAlign: 'center',
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            borderLeft: 0,
                                        }}
                                    >
                                        댓글
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            textAlign: 'center',
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            borderLeft: 0,
                                        }}
                                    >
                                        원글
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontSize: '0.8rem',
                                            textAlign: 'center',
                                            fontWeight: '400',
                                            border: '0px',
                                        }}
                                    >
                                        작성일
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody
                                sx={{ borderBottom: '0.063rem solid #D9D9D9' }}
                            >
                                {/* {freeboarddata.boardList.map(item => ( */}
                                {commentdata.map(item => (
                                    <TableRow key={item.cmtPostId}>
                                        <TableCell>
                                            <Checkbox {...label} />
                                        </TableCell>
                                        <TableCell
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
                                            {item.cmtContent}
                                        </TableCell>
                                        <TableCell
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
                                            {item.boardTitle}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                borderBottom:
                                                    '0.063rem solid #D9D9D9',
                                            }}
                                        >
                                            {item.cmtDate}
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
                                backgroundColor: 'white',
                                color: 'black',
                                borderRadius: '0.9rem',
                                opacity: '70%',
                            }}
                        >
                            삭제하기
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default MycommentTable;
