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
import freeboarddata from '../../testdata/freeboarddata.json';

function ShortTable(props) {
    console.log(props);
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

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <ThemeProvider theme={theme}>
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
                                        width: '8rem',
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
                                        width: '7rem',
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
                            {freeboarddata.boardList.map(item => (
                                <TableRow key={item.postId}>
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
                                        <a href={`/movie-talk/${item.postId}`}>
                                            {item.postTitle}
                                        </a>
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
                                        {item.postUserNickname}
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
                                            maxWidth: '7rem',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {item.postDate}
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
                                        {item.countVisit}
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
                                        {item.postLike}
                                    </TableCell>
                                </TableRow>
                            ))}
                            {/* {props.map(props => (
                                <TableRow key={props.postId}>
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
                                        <a href={`/movie-talk/${props.postId}`}>
                                            {props.postTitle}
                                        </a>
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
                                        {props.postUserNickname}
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
                                            maxWidth: '7rem',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {props.postDate}
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
                                        {props.countVisit}
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
                                        {props.postLike}
                                    </TableCell>
                                </TableRow>
                            ))} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </ThemeProvider>
    );
}

export default ShortTable;
