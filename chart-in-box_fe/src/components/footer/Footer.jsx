import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ flexDirection: 'row', mb: 10 }}>
            <Box
                sx={{
                    display: 'flex',
                    m: 'auto',
                    mt: 10,
                    width: '1140px',
                    height: '35px',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <img
                    src="../../image/footer.png"
                    width="194.2px"
                    height="27px"
                ></img>
                <Button
                    href=" http://pf.kakao.com/_WCNaxj"
                    sx={{
                        textAlign: 'center',
                        border: '1px solid #757575',
                        borderRadius: '20px',
                        width: '94px',
                        height: '40px',
                        color: '#757575',
                    }}
                >
                    문의하기
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    m: 'auto',
                    width: '1140px',
                    height: '35px',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Typography
                    sx={{
                        textAlign: 'left',
                        fontWeight: '400',
                        fontSize: '10px',
                        pl: 3.5,
                    }}
                >
                    chartinbox1234@gmail.com 개인정보처리방침
                </Typography>
            </Box>
            <Footer></Footer>
        </Box>
    );
}
export default Footer;
