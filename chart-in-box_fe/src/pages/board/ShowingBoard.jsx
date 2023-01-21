import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBar from '../../components/menubar/MenuBar';
import MovietalkMenuBar from '../../components/menubar/MovietalkMenuBar';
import MovietalkSubBar from '../../components/menubar/MovietalkSubBar';
import MyInformation from '../../components/board/MyInformation';
import ShowingBoardTable from './ShowingBoardTable';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ShowingBoard() {
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
    const [allData, setAllData] = React.useState({});
    const post = allData?.mvCharts;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar></MenuBar>
            <MovietalkMenuBar></MovietalkMenuBar>
            <main>
                <Container
                    sx={{
                        ml: '8rem',
                        mt: '1.4rem',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Box sx={{ p: 1 }}>
                        <MyInformation></MyInformation>
                        {/* <Box
                            sx={{
                                width: '15.125rem',
                                height: '14rem',
                                border: 0.4,
                                borderColor: 'line.main',
                                mb: 3,
                            }}
                        >
                            
                        </Box> */}
                        <Button
                            href="../writing"
                            sx={{
                                width: '15.125rem',
                                fontSize: '0.938rem',
                                fontWeight: 800,
                                backgroundColor: '#EDEDED',
                                Color: 'black',
                                ml: '-1.4rem',
                                mb: '1.5rem',
                            }}
                        >
                            글쓰기
                        </Button>
                        <Box
                            sx={{
                                width: '16.625rem',
                                height: '16.625rem',
                                //border: 2,
                            }}
                        >
                            <MovietalkSubBar></MovietalkSubBar>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '59.5rem',
                            display: 'flex',
                        }}
                    >
                        <ShowingBoardTable></ShowingBoardTable>
                    </Box>
                </Container>
            </main>
        </ThemeProvider>
    );
}
export default ShowingBoard;
