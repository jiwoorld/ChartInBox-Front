import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dummydata from '../../dummydata/mainMovie.json';

function MainCarousel() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        speed: 5000,
        arrows: false,
        focusOnSelect: true,
    };
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        setMovies(dummydata);
        console.log(dummydata);
    }, []);
    //배열안에 props.dummydata를 넣기

    return (
        <Slider {...settings}>
            {movies.map(item => (
                <Box key={item.mvChartId} sx={{ width: '170px' }}>
                    <Box
                        sx={{
                            ml: '9px',
                            width: '11.75rem',
                            height: '16.8438rem',
                            position: 'relative',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '3.8125rem',
                                height: '3.4rem',
                            }}
                        >
                            <Box
                                sx={{
                                    background:
                                        ' linear-gradient(180deg, #EFECD9 0%, #E8E5D5 24.48%, #EEEBD7 51.04%, #DAD7C2 74.48%, #DFDCC7 100%), conic-gradient(from 43.15deg at 50% 50%, #EDEBDE 0deg, #ECE8D0 360deg), conic-gradient(from 180deg at 50% 50%, #E2DFCB 0deg, #EDEBDE 346.88deg, #E2DFCB 360deg)',
                                    transform: 'rotate(-28.24deg)',
                                    position: 'absolute',
                                    width: '1.75rem',
                                    height: '2.3125rem',
                                    top: '0.625rem',
                                }}
                            >
                                {item.mvChartRank === 1 ? (
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '1.6875rem',

                                            color: '#82251F',
                                        }}
                                    >
                                        0
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '1.6875rem',

                                            color: '#1a1a1a',
                                        }}
                                    >
                                        {item.mvChartRank > 9 ? '1' : '0'}
                                    </Typography>
                                )}
                            </Box>

                            <Box
                                sx={{
                                    background:
                                        ' linear-gradient(180deg, #EFECD9 0%, #E8E5D5 24.48%, #EEEBD7 51.04%, #DAD7C2 74.48%, #DFDCC7 100%), conic-gradient(from 43.15deg at 50% 50%, #EDEBDE 0deg, #ECE8D0 360deg), conic-gradient(from 180deg at 50% 50%, #E2DFCB 0deg, #EDEBDE 346.88deg, #E2DFCB 360deg)',
                                    transform: 'rotate(1.45deg)',
                                    position: 'absolute',
                                    width: '1.75rem',
                                    height: '2.3125rem',
                                    left: '1.875rem',
                                    bottom: '0.9375rem',
                                }}
                            >
                                {item.mvChartRank === 1 ? (
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '1.6875rem',

                                            color: '#82251F',
                                        }}
                                    >
                                        1
                                    </Typography>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '1.6875rem',

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
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '132px',
                                height: '2rem',
                                backgroundColor: '#EDEBDE',
                                top: '235px',
                                left: '23px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
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
                        </Box>
                        <Box
                            sx={{
                                width: '175px',
                                background:
                                    '  radial-gradient(60.19% 60.19% at 50% 50%, rgba(217, 217, 217, 0) 0%, rgba(217, 217, 217, 0) 30.73%, rgba(211, 208, 192, 0.33) 72.4%, rgba(205, 200, 168, 0.55) 100%)',
                            }}
                        >
                            <img
                                width="175px"
                                src={item.mvChartImg}
                                alt="영화 이미지"
                            ></img>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Slider>
    );
}

export default MainCarousel;
