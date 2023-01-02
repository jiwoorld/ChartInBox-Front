import { ThemeProvider, Typography } from '@mui/material';
import { Box, createTheme } from '@mui/system';

function CurationPageMovie() {
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
                default: '#F2CB05',
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
                    width: '12.125rem',
                    height: '266px',
                    background:
                        'linear-gradient(180deg, rgba(217, 217, 217, 0) 41.67%, rgba(0, 0, 0, 0.4) 67.19%, rgba(0, 0, 0, 0.8) 100%), url(../../image/movieExample.png)',
                    mr: 0.5,
                    mt: 1,
                    borderRadius: '0.75rem',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
            >
                <Box
                    sx={{
                        width: '8.4375rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'flex-start',
                    }}
                >
                    <Typography>라스트 크리스마스</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <img
                            width="12px"
                            height="11px"
                            src="../../image/good.png"
                            alt="좋아요"
                        ></img>
                        <Typography
                            sx={{
                                ml: '0.375rem',
                                color: 'text.default',
                                fontSize: '0.875rem',
                                fontWeight: '400',
                                mr: 1,
                            }}
                        >
                            3.7
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default CurationPageMovie;
