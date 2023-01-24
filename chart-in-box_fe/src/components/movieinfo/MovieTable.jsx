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

function MovieTable({ tableName, buttonName, Board }) {
    const rows = Board.map(item => {
        return {
            title: item.postTitle,
            author: item.postUserNickname,
            date: item.postDate,
            view: item.countVisit,
            like: item.postLike,
        };
    });
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
                default: '#001F28',
            },
            text: {
                primary: '#fff',
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
                    height: '24.5rem',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        height: '1.75rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 1,
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: '600',
                            fontSize: '1.313rem',
                        }}
                    >
                        {tableName}
                    </Typography>
                    <Button
                        sx={{
                            fontWeight: '500',
                            fontSize: '1.063rem',
                        }}
                    >
                        전체보기
                    </Button>
                </Box>
                <Box>
                    <TableContainer component={Paper}>
                        <Table
                            sx={{
                                backgroundColor: 'background.default',
                            }}
                            aria-label="simple table"
                        >
                            <TableHead
                                sx={{
                                    borderTop: '1px solid white',
                                    borderBottom: '1px solid white',
                                }}
                            >
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            width: '32.5rem',
                                            textAlign: 'center',
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                        }}
                                    >
                                        제목
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                            maxWidth: '6.875rem',
                                        }}
                                    >
                                        작성자
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                        }}
                                    >
                                        작성일
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                        }}
                                    >
                                        조회수
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                        }}
                                    >
                                        좋아요
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ borderBottom: '1px solid white' }}>
                                {rows.map(row => (
                                    <TableRow key={row.author}>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                maxWidth: '32.5rem',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {row.title}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                maxWidth: '6.875rem',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {row.author}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                                maxWidth: '5.625rem',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {row.date}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                            }}
                                        >
                                            {row.view}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                border: '0px',
                                            }}
                                        >
                                            {row.like}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box
                    sx={{
                        height: '3.125rem',
                        display: 'flex',
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
                            '&:hover': {
                                backgroundColor: '#fff',
                                opacity: '90%',
                            },
                        }}
                    >
                        {buttonName}
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default MovieTable;
