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

function MainTable(props) {
    function createData(title, view) {
        return { title, view };
    }
    const tableName = props.tableName;

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
                    height: '27.5rem',
                    width: '24.6875rem',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box>
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
                                            width: '20rem',
                                            textAlign: 'center',
                                            fontSize: '0.8rem',
                                            fontWeight: '400',
                                            border: '0px',
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
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
                                            }}
                                        >
                                            {row.title}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontWeight: '400',
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
                        height: '3.125rem',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        mt: '0.2rem',
                    }}
                >
                    <Button
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'black',
                            borderRadius: '0.9rem',
                            opacity: '70%',
                        }}
                    >
                        {tableName}
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default MainTable;
