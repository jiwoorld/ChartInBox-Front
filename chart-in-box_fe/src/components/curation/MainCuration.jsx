import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MainCuration() {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        speed: 5000,
        arrows: false,
        focusOnSelect: true,
    };

    return (
        <Slider {...settings}>
            <Box sx={{ width: '208px' }}>
                <Box
                    sx={{
                        width: '11.75rem',
                        height: '16.8438rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    1
                </Box>
            </Box>
            <Box sx={{ width: '208px' }}>
                <Box
                    sx={{
                        width: '11.75rem',
                        height: '16.8438rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    2
                </Box>
            </Box>
            <Box sx={{ width: '208px' }}>
                <Box
                    sx={{
                        width: '11.75rem',
                        height: '16.8438rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    3
                </Box>
            </Box>
            <Box sx={{ width: '208px' }}>
                <Box
                    sx={{
                        width: '11.75rem',
                        height: '16.8438rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    4
                </Box>
            </Box>
            <Box sx={{ width: '208px' }}>
                <Box
                    sx={{
                        width: '11.75rem',
                        height: '16.8438rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    5
                </Box>
            </Box>
            <Box sx={{ width: '208px' }}>
                <Box
                    sx={{
                        width: '11.75rem',
                        height: '16.8438rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    6
                </Box>
            </Box>
            <Box sx={{ width: '208px' }}>
                <Box
                    sx={{
                        width: '11.75rem',
                        height: '16.8438rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    7
                </Box>
            </Box>
            <Box sx={{ width: '208px' }}>
                <Box
                    sx={{
                        width: '11.75rem',
                        height: '16.8438rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    8
                </Box>
            </Box>
            <Box sx={{ width: '208px' }}>
                <Box
                    sx={{
                        width: '11.75rem',
                        height: '16.8438rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    9
                </Box>
            </Box>
            <Box sx={{ width: '208px' }}>
                <Box
                    sx={{
                        width: '11.75rem',
                        height: '16.8438rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    10
                </Box>
            </Box>
        </Slider>
    );
}

export default MainCuration;
