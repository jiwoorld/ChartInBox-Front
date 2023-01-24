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

function MyCommentTable(props) {
    function createData(board, title) {
        return { board, title };
    }
    const navigate = useNavigate();
    const tableName = props.tableName;
    const link = props.tableLink;

    const handlePage = () => {
        navigate(link);
    };
    const rows = [
        createData('자유게시판', '알라딘 포디엑스 본 사람?'),
        createData('후기게시판', '알라딘 포디엑스 본 후기'),
        createData('Q&A게시판', '알라딘 포디엑스 본 후기'),
        createData('자유게시판', '알라딘 포디엑스 본 사람?'),
        createData('후기게시판', '알라딘 포디엑스 본 후기'),
        createData('Q&A게시판', '알라딘 포디엑스 본 후기'),
    ];
    const theme = createTheme({
        palette: {
            /*  primary: {
                main: '#EDEBDE',
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
                primary: '#1a1a1a',
                default: '#616161',
            }, */
        },
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
                                {rows.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            sx={{
                                                height: '2.75rem',
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                paddingTop: '0',
                                                paddingBottom: '0',
                                            }}
                                        >
                                            {row.board}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                height: '2.75rem',
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                                paddingTop: '0',
                                                paddingBottom: '0',
                                            }}
                                        >
                                            {row.title}
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
