import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Join from './join/Join';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    palette: {
        primary: {
            main: '#CF5E53',
        },
        secondary: {
            main: '#333D41',
        },
    },
});

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Join></Join>
        </ThemeProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
