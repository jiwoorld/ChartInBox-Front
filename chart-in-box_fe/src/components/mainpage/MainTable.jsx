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

function MainTable(props) {
    function createData(title, view) {
        return { title, view };
    }
    const navigate = useNavigate();
    const tableName = props.tableName;
    const link = props.tableLink;

    const handlePage = () => {
        navigate(link);
    };
    const rows = [
        createData('알리딘 포디엑스 본 사람?', 7),
        createData('알리딘 포디엑스 본 사람?', 7),
        createData('알리딘 포디엑스 본 사람?', 7),
        createData('알리딘 포디엑스 본 사람?', 7),
        createData('알리딘 포디엑스 본 사람?', 7),
        createData('알리딘 포디엑스 본 사람?', 7),
        createData('알리딘 포디엑스 본 사람?', 7),
        createData('알리딘 포디엑스 본 사람?', 7),
        createData('알리딘 포디엑스 본 사람?', 7),
        //이 정보들을 백엔드구현하면 받아올 예정
    ];
    const theme = createTheme({
        palette: {
            primary: {
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
                        <Table
                            sx={{
                                backgroundColor: '#EDEBDE',
                            }}
                            aria-label="simple table"
                        >
                            <TableHead
                                sx={{
                                    borderTop: '2px solid #1a1a1a',
                                    borderBottom: '1px solid #1a1a1a',
                                }}
                            >
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            height: '2.75rem',
                                            width: '20rem',
                                            textAlign: 'center',
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                            paddingBottom: '0',
                                            paddingTop: '0',
                                        }}
                                    >
                                        제목
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            height: '2.75rem',
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
                                            paddingTop: '0',
                                            paddingBottom: '0',
                                        }}
                                    >
                                        조회
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody
                                sx={{ borderBottom: '2px solid #1a1a1a' }}
                            >
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
                                            {row.title}
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
                                            {row.view}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box
                    sx={{
                        height: '1.25rem',
                        display: 'flex',
                        mt: '0.2rem',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        sx={{
                            color: 'black',
                            heght: '1.1875rem',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                        }}
                        onClick={handlePage}
                    >
                        {tableName}
                    </Button>
                    <Typography
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '1.0625rem',
                            color: 'text.default',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                        }}
                        onClick={handlePage}
                    >
                        더보기
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default MainTable;
