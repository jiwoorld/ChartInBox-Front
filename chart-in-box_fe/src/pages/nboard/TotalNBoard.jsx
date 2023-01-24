import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBar from '../../components/menubar/MenuBar';
import NBoardBar from './NBoardBar';
import { Paper } from '@mui/material';
import { borderBottom } from '@mui/system';
import BoardNTable from './BoardNTable';
import NBoardMenuBar from '../../components/menubar/NBoardMenuBar';
import NBoardSubBar from '../../components/menubar/NBoardSubBar';
import { useNavigate } from 'react-router-dom';
import MyInformation from '../../components/board/MyInformation';

const data = {
    total: {
        name: '전체글',
    },
    disney: {
        name: '디즈니',
    },
    etc: {
        name: '기타',
    },
    netflex: {
        name: '넷플릭스',
    },
    tving: {
        name: '티빙',
    },
    watcha: {
        name: '왓차',
    },
    wave: {
        name: '웨이브',
    },
};

function TotalNBoard({ match }) {
    const { nboardname } = useParams();
    const nboard = data[nboardname];
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
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar></MenuBar>
            <NBoardMenuBar></NBoardMenuBar>
            <main>
                <Container
                    maxWidth="70rem"
                    sx={{
                        ml: '8rem',
                        mt: '1.4rem',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Box sx={{ p: 1 }}>
                        <Box
                            sx={{
                                width: '15.125rem',
                                height: '14rem',
                                mb: 3,
                            }}
                        >
                            <MyInformation></MyInformation>
                        </Box>
                        <Button
                            href="../nwriting"
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
                        <NBoardSubBar></NBoardSubBar>
                    </Box>
                    <Box
                        sx={{
                            width: '59.5rem',
                            height: '50rem',
                            //border: 2,
                            display: 'flex',
                            p: 1,
                        }}
                    >
                        <BoardNTable tableName={nboard.name}></BoardNTable>
                    </Box>
                </Container>
            </main>
        </ThemeProvider>
    );
}
export default TotalNBoard;
