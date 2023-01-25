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
import commentdata from '../../testdata/commentdata.json';

function MycommentTable(props) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default MycommentTable;
