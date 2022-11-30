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
        autoplaySpeed: 2000,
        speed: 2000,
    };
    return (
        <Box
            sx={{
                display: 'block',
            }}
        >
            <Slider {...settings}>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '8.875rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                        marginLeft: '0px',
                    }}
                >
                    1
                </Box>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '8.875rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                        marginLeft: '30px !important',
                    }}
                >
                    2
                </Box>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '8.875rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                        marginLeft: '60px !important',
                    }}
                >
                    3
                </Box>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '8.875rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                        marginLeft: '90px !important',
                    }}
                >
                    4
                </Box>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '8.875rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                        marginLeft: '120px !important',
                    }}
                >
                    5
                </Box>
                <Box
                    sx={{
                        width: '15.125rem',
                        height: '8.875rem',
                        borderRadius: '0.9rem',
                        backgroundColor: '#D9D9D9',
                        marginLeft: '150px !important',
                    }}
                >
                    6
                </Box>
                <Box></Box>
            </Slider>
        </Box>
    );
}

export default MovieCuration;
