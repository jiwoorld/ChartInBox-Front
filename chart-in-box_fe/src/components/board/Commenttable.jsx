import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Commenttable({ data }) {
    //console.log({ data });
    const theme = createTheme({
        palette: {
            primary: {
                main: '#333D41',
            },
            secondary: {
                main: '#757575',
            },
            line: {
                main: '#C2C2C2',
            },
            text: {
                primary: '#1A1A1A',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
    });
    return (
        <ThemeProvider theme={theme}>
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
                {data &&
                    data.map(item => (
                        <Box
                            key={item.cmtId}
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
                                    {item.cmtUserNickname}
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
                                    {item.cmtContent} |
                                </Box>
                                <IconButton
                                    aria-label="delete"
                                    sx={{ pt: 3, pl: 5 }}
                                >
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
                                {item.cmtDate}
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
                    ))}
            </Box>
            {/* <Box //댓글쓰기
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
            </Box> */}
            {/* <Box
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
            </Box> */}
        </ThemeProvider>
    );
}
export default Commenttable;
