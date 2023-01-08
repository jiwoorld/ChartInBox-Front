import {
    createTheme,
    CssBaseline,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

function Selected() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#ffff',
            },

            third: {
                main: '#001F28',
            },

            text: {
                primary: '#001F28',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
        components: {
            MuiMenuItem: {
                styleOverrides: {
                    root: { '&.Mui-selected': { backgroundColor: '#ffff' } },
                },
            },
        },
    });
    const [age, setAge] = React.useState('');

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <FormControl
                sx={{
                    m: 1,
                    minWidth: 120,
                    color: '#ffff',
                }}
                size="small"
                variant="standard"
            >
                <InputLabel
                    sx={{
                        color: '#ffff',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                    }}
                    variant="standard"
                >
                    Age
                </InputLabel>
                <Select
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    sx={{
                        fontSize: '14px',
                        color: '#ffff',
                        borderBottom: '1px solid white',
                    }}
                    variant="standard"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </ThemeProvider>
    );
}

export default Selected;
