import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MovieCuration() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 5000,
    };
    return (
        <Slider {...settings}>
            <Box sx={{ width: '264px' }}>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '8.875rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    1
                </Box>
            </Box>
            <Box sx={{ width: '264px' }}>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '8.875rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    2
                </Box>
            </Box>
            <Box sx={{ width: '264px' }}>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '8.875rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    3
                </Box>
            </Box>
            <Box sx={{ width: '264px' }}>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '8.875rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    4
                </Box>
            </Box>
            <Box sx={{ width: '264px' }}>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '8.875rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    5
                </Box>
            </Box>
            <Box sx={{ width: '264px' }}>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '8.875rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                    }}
                >
                    6
                </Box>
            </Box>
        </Slider>
    );
}

export default MovieCuration;
