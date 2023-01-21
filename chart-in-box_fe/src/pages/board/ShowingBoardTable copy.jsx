import React from 'react';
import {
    Box,
    Button,
    createTheme,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    ThemeProvider,
    Typography,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShortTable from './ShortTable';

function ShowingBoardTable(props) {
    function createData(type, title, author, date, view, like, reple, context) {
        return { type, title, author, date, view, like, reple, context };
    }
    //const tableName = props.tableName;

    const rows = [
        createData(
            '리뷰',
            '맘마미아2 재밌더라',
            '익명',
            '2022.01.03 13:01',
            34,
            2,
            7,
            '개재밌더라',
        ),
    ];
    const theme = createTheme({
        /*         palette: {
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
        }, */
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [value, setValue] = React.useState('Controlled');

    const handleChange = event => {
        setValue(event.target.value);
    };
    return (
        <ThemeProvider theme={theme}>
            <Box //글
                sx={{
                    //alignItems: 'flex-start',
                    minHeight: '50rem',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        width: '59.5rem',
                        pb: 2,
                        borderBottom: '1px solid #0000001A',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            textAlign: 'left',
                        }}
                    >
                        아마도 제목..
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '59.5rem',
                        pb: 2,
                        borderBottom: '1px solid #0000001A',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            textAlign: 'left',
                        }}
                    >
                        writer, 날짜, 조회수 등이 들어갈 칸
                    </Typography>
                </Box>
                <Box //본문
                    sx={{
                        width: '59.5rem',
                        minHeight: '30rem',
                        pb: 5,
                        borderBottom: '2px solid #0000001A',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Typography
                        sx={{
                            height: '70%',
                            pt: 3,
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            textAlign: 'left',
                        }}
                    >
                        본문이 들어갈 칸
                    </Typography>
                    <Box sx={{ width: '100%', height: '107px' }}>영화정보</Box>
                    <Button
                        align="left"
                        variant="contained"
                        endIcon={<ThumbUpAltIcon />}
                        sx={{
                            backgroundColor: 'black',
                        }}
                    >
                        좋아요
                    </Button>
                </Box>

                <Box //댓글
                    sx={{
                        //alignItems: 'flex-start',
                        display: 'flex',
                        flexDirection: 'column',
                        mt: 10,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            textAlign: 'left',
                            fontStyle: 'noraml',
                            borderBottom: '2px solid #0000001A',
                            pb: 2,
                        }}
                    >
                        댓글
                    </Typography>
                    <Box
                        sx={{
                            borderBottom: '2px solid #0000001A',
                        }}
                    >
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    textAlign: 'left',
                                    fontStyle: 'noraml',
                                    width: '80%',
                                    color: '#1A1A1A',
                                    pt: 2,
                                    pb: 1,
                                }}
                            >
                                글쓴이
                            </Box>
                            <Box
                                sx={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    textAlign: 'left',
                                    fontStyle: 'noraml',
                                    color: '#757575',
                                    mr: -5,
                                    pt: 2,
                                }}
                            >
                                2022.12.19 17:00 |
                            </Box>
                            <IconButton aria-label="delete" sx={{ pt: 3 }}>
                                <MoreVertIcon />
                            </IconButton>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: '0.875rem',
                                fontWeight: '400',
                                textAlign: 'left',
                                fontStyle: 'noraml',
                                color: '#1A1A1A',
                                pt: 2,
                                pb: 3,
                            }}
                        >
                            댓글내용
                        </Typography>
                        <Box
                            sx={{
                                textAlign: 'right',
                            }}
                        >
                            <Button
                                size="small"
                                sx={{
                                    alignContent: 'left',
                                    fontSize: '0.75rem',
                                    fontWeight: '400',
                                    color: '#424242',
                                }}
                            >
                                답글 달기
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            borderBottom: '2px solid #0000001A',
                            pb: 1,
                        }}
                    >
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    textAlign: 'left',
                                    fontStyle: 'noraml',
                                    width: '80%',
                                    color: '#1A1A1A',
                                    pt: 2,
                                }}
                            >
                                글쓴이
                            </Box>
                            <Box
                                sx={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    textAlign: 'left',
                                    fontStyle: 'noraml',
                                    color: '#757575',
                                    mr: -5,
                                    pt: 2,
                                }}
                            >
                                2022.12.19 17:00 |
                            </Box>
                            <IconButton aria-label="delete" sx={{ pt: 3 }}>
                                <MoreVertIcon />
                            </IconButton>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: '0.875rem',
                                fontWeight: '400',
                                textAlign: 'left',
                                fontStyle: 'noraml',
                                color: '#1A1A1A',
                                pt: 2,
                                pb: 3,
                            }}
                        >
                            댓글내용
                        </Typography>
                        <Box
                            sx={{
                                textAlign: 'right',
                            }}
                        >
                            <Button
                                size="small"
                                sx={{
                                    alignContent: 'left',
                                    fontSize: '0.75rem',
                                    fontWeight: '400',
                                    color: '#424242',
                                }}
                            >
                                답글 달기
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box //댓글쓰기
                    component="form"
                    sx={{
                        '& > :not(style)': {
                            mt: 3,
                            mb: 1,
                            width: '59.5rem',
                            //height: '5rem',
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                        label="댓글을 입력해주세요"
                        variant="outlined"
                        sx={{
                            width: '59.5rem',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        textAlign: 'right',
                        mb: 8,
                    }}
                >
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            alignContent: 'left',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                            backgroundColor: '#F2CB05',
                            borderRadius: '0.5rem',
                            border: 0,
                            color: '#1D192B',
                            fontSize: '0.875rem',
                        }}
                    >
                        등록
                    </Button>
                </Box>
                <ShortTable></ShortTable>
            </Box>
        </ThemeProvider>
    );
}

export default ShowingBoardTable;
