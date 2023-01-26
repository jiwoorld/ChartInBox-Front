import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MovieCuration({ curationList = [] }) {
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
            {curationList.map(item => (
                <Box sx={{ width: '264px' }}>
                    <Box
                        sx={{
                            width: '15.125rem',
                            height: '8.875rem',
                            borderRadius: '0.9rem',
                            backgroundImage: `url(${item.curationPoster})`,
                            backgroundSize: 'cover',
                        }}
                    ></Box>{' '}
                    <a href={`${item.curationUrl}`}>
                        <Box
                            sx={{
                                maxWidth: '15.125rem',
                                textAlign: 'left !important',
                                color: '#ffff',
                                '&:hover,&.Mui-focusVisible': {
                                    textDecoration: 'underLine',
                                },
                            }}
                        >
                            {item.curationTitle}
                        </Box>
                    </a>
                </Box>
            ))}
        </Slider>
    );
}

export default MovieCuration;
