import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MainCarousel({ movies = [] }) {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        speed: 5000,
        arrows: false,
        focusOnSelect: true,
    };

    return (
        <Slider {...settings}>
            {movies.map(item => (
                <Box
                    key={item.mvChartId}
                    sx={{
                        width: '10.625rem',
                        height: '21.875rem',
                        display: 'flex !important',
                        alignItems: 'center !important',
                        justifyContent: 'center',
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            ml: '0.5625rem',
                            width: '11.75rem',
                            height: '18rem',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '3.8125rem',
                                height: '3.4rem',
                                zIndex: '10',
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundImage:
                                        'url(../../image/rectangle2.png)',
                                    transform: 'rotate(-28.24deg)',
                                    position: 'absolute',
                                    width: '2.25rem',
                                    height: '3rem',
                                    top: '0.625rem',
                                    backgroundSize: 'cover',
                                }}
                            >
                                {item.mvChartRank === 1 ? (
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '2rem',

                                            color: '#82251F',
                                        }}
                                    >
                                        0
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '2rem',

                                            color: '#1a1a1a',
                                        }}
                                    >
                                        {item.mvChartRank > 9 ? '1' : '0'}
                                    </Typography>
                                )}
                            </Box>

                            <Box
                                sx={{
                                    backgroundImage:
                                        'url(../../image/rectangle2.png)',
                                    transform: 'rotate(1.45deg)',
                                    position: 'absolute',
                                    width: '2.25rem',
                                    height: '3rem',
                                    left: '1.875rem',
                                    bottom: '0.2rem',
                                    backgroundSize: 'cover',
                                }}
                            >
                                {item.mvChartRank === 1 ? (
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '2rem',

                                            color: '#82251F',
                                        }}
                                    >
                                        1
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '2rem',

                                            color: '#1a1a1a',
                                        }}
                                    >
                                        {item.mvChartRank > 9
                                            ? '0'
                                            : item.mvChartRank}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                        {/* <Box
                            sx={{
                                position: 'absolute',
                                width: '132px',
                                height: '2rem',
                                backgroundColor: '#EDEBDE',
                                top: '17.5rem',
                                left: '4.6875rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                zIndex: '10',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: '1rem',
                                    color: '#5782B5',
                                }}
                            >
                                {item.mvChartName}
                            </Typography>
                        </Box> */}
                        <Box
                            sx={{
                                width: '175px',
                                position: 'absolute',
                                '&:hover,&.Mui-focusVisible': {
                                    zIndex: '20',
                                    right: '6.25rem',
                                    top: '0.0625rem',
                                },
                            }}
                        >
                            <a href={`/movie-info/${item.movieId}`}>
                                <img
                                    width="200px"
                                    height="280px"
                                    src={item.mvChartImg}
                                    alt="이미지"
                                    class="chartImg"
                                ></img>
                            </a>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Slider>
    );
}

export default MainCarousel;
