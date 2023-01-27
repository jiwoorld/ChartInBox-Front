import {
    createTheme,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

function Selected({ title, items, setValue }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },

            third: {
                main: '#fff',
            },

            text: {
                primary: '#fff',
            },
        },
        typography: {
            fontFamily: "'Pretendard', sans-serif",
        },
        components: {
            MuiMenuItem: {
                styleOverrides: {
                    root: { '&.Mui-selected': { backgroundColor: '#fff' } },
                },
            },
        },
    });
    const [value, setvalue] = React.useState('');

    const handleChange = event => {
        setValue(event.target.value);
        setvalue(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <FormControl
                sx={{
                    m: 1,
                    minWidth: 120,
                    color: 'text.primary',
                }}
                size="small"
                variant="standard"
            >
                <InputLabel
                    sx={{
                        color: 'text.primary',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                    }}
                    variant="standard"
                >
                    {title}
                </InputLabel>
                <Select
                    value={value}
                    label={value}
                    onChange={handleChange}
                    sx={{
                        color: 'text.primary',
                        fontSize: '14px',
                        borderBottom: '1px solid white',
                    }}
                    variant="standard"
                >
                    <MenuItem value={''}>
                        <em>None</em>
                    </MenuItem>
                    {items.map(item => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </ThemeProvider>
    );
}

export default Selected;
