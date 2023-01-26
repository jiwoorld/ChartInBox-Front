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
import { useNavigate } from 'react-router-dom';
import mypagedata from '../../testdata/mypagedata.json';

function MyCommentTable({ data }) {
    function createData(board, title) {
        return { board, title };
    }
    const navigate = useNavigate();
    const tableName = data.tableName;
    const link = data.tableLink;

    const handlePage = () => {
        navigate(link);
    };
    const theme = createTheme({
        palette: {},
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    height: '29.25rem',
                    width: '24.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        width: '24.6875rem',
                        height: '27.5rem',
                    }}
                >
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableBody>
                                {data &&
                                    data.map(item => (
                                        <TableRow key={item.cmtId}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                sx={{
                                                    height: '2.75rem',
                                                    fontSize: '1rem',
                                                    fontWeight: '400',
                                                    paddingTop: '0',
                                                    paddingBottom: '0',
                                                }}
                                            >
                                                {item.cmtContent}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                sx={{
                                                    height: '2.75rem',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '400',
                                                    paddingTop: '0',
                                                    paddingBottom: '0',
                                                }}
                                            >
                                                {item.boardTitle}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box
                        sx={{
                            height: '1.25rem',
                            display: 'flex',
                            mt: 2,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            size="medium"
                            href="my-page/comment"
                            sx={{
                                color: '#CF5E53',
                            }}
                        >
                            See more
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default MyCommentTable;
