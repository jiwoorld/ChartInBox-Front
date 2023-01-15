import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import dummydata from '../../dummydata/mainMovie.json';
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
    React.useEffect(() => {
        setMovies(dummydata);
    }, []);

    // const [movies, setMovies] = React.useState([]);
    // React.useEffect(()=>{
    //     axios.get('http://localhost:8080/').then(function(response){
    //     setMovies(response.data);
    // })
    // .catch(function(error){
    //     console.log(error);
    // })
    // },[]);

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
                            <a href={`/diary/${item.movieId}`}>
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
