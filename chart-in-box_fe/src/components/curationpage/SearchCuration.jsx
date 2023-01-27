import { Box } from '@mui/material';
import React from 'react';

function SearchCuration({ item = {} }) {
    return (
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
    );
}

export default SearchCuration;
